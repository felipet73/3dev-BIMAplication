var signalrUrl = URL_SIGNALR;
var signalrToken = null;
var packages = [];
var startLoad = null;
var endLoad = null;
var signalClientConnectionId = null;
var eventSignalrMessage = function () {   };
var eventTransportDataMessage = function () {   };
var eventHasOutputSignalrMessage = function () {   };

var currentSignalrName = null;
var currentSignalrData = null;
var currentSignalrFunction = null;
var onSignalrStart = false;
var numberAttempt = 0;
var isForceConnect = false;
var sendAlert = false;

$(function () {
   
    try { onSignalrSetParams(); } catch { /* --- */ }

    signalrConnect();
});


function signalrConnect() {
    $.connection.hub.url = signalrUrl + "signalr";
    var chat = $.connection.s10ERPHub;

    chat.client.receiveS10ERPDataResult = function (data) {
        signalrReceiveMessage(data);
    };

    $.connection.hub.qs = { 'AuthType': '1', 'Token': signalrToken, 'ModuleId': 2 };
    $.connection.hub.start().done(function () {
        signalClientConnectionId = $.connection.hub.id;
        try {
            onSignalrConnected();
        } catch (ex) {
            $("#hasSignalr").hide();
            $("#hasNotSignalr").show();
        }
    });

    $.connection.hub.error(function (error) {
        //console.log('SignalrAdapter: ' + error);
        //signalrConnect();
    });
     
    $.connection.hub.disconnected(function () {
        if (!isForceConnect) {
            //console.log('Restart connection after 5 seconds', new Date());
            $("#hasSignalr").hide();
            $("#hasNotSignalr").show();
            setTimeout(function () {
                numberAttempt += 1;
                if (numberAttempt <= 5) {
                    //console.log('try to connected', new Date());
                    signalrConnect();
                }
            }, 5000); // Restart connection after 5 seconds.
            onSignalrStart = false;
        } else {
            if (!sendAlert) {
                sendAlert = true;
                ConfirmValidation("No es posible conectarse a Signalr, comuniquese con el administrador.");
            }
        }
    }); 
};

onSignalrConnected = function () {
    //console.log('Connected', new Date());
    numberAttempt = 0;
    isForceConnect = false;
    sendAlert = false;
    $("#hasNotSignalr").hide();
    $("#hasSignalr").show();
};
 
function signalrRequest(packageName, targetConnection, objectName, apiName = "SignalrServerApi", methodName = "RequestData")
{
    targetConnection = targetConnection.replace("erpDataBase", erpDataBase);

    var dataConfig = {};
    dataConfig.ClientName = signalrToken;
    dataConfig.PackageName = packageName;
    dataConfig.TargetConnection = targetConnection;
    dataConfig.ObjectName = objectName;
    dataConfig.TargetName = "S10SERVER";
   
    WebApiHttpPost(signalrUrl, apiName, methodName, dataConfig).then(function (result) {

    });

}



function signalrReceiveMessage(data) {
    var item = JSON.parse(data);
    packages.push(item);
    if (packages.length === item.Count) {
        
        packages = packages.sort(dynamicSort("Part"));
        var dataJoin;
        var name = null;
        var pos = 0;
        var outpuvalue = null;
        
        packages.forEach(function (p) {
            name = p.Name;

            outpuvalue = p.OutputValue;
            
            if (pos === 0) {
                dataJoin = JSON.parse(p.Data);
            }
            else {
                dataJoin = dataJoin.concat(JSON.parse(p.Data));
            }
            pos++;

        });

        endLoad = Date.now();
        var difference = (endLoad - startLoad) / 1000;
        
        try {
            signarlRequestData(name, dataJoin); 
        } catch (ex) {
            //..
        }
        
        try {
            //if (item.OutputValue != "" || item.OutputValue != null || typeof item.OutputValue != "undefined") {
                eventSignalrMessage(dataJoin);
            //} else {
                eventHasOutputSignalrMessage(item);
            //}
            if (name === "structurewbs") {
                downloadStructureWBSResponse(dataJoin);
            }

            if (name === "assignedbudget") {
                GetAssignedBudget(dataJoin);
            }

            if (name === "HojaPresupuestos") {
                buildHojaPresupuesto(dataJoin);
            }

            if (name === "DetallePresupuestos") {
                buildDetailsPresupuesto(dataJoin);
            }

            if (name === "assignedwbs") {
                downloadWBSResponse(dataJoin);
            }

            if (name === "downloadActivities") {
                downloadActivitiesReponse(dataJoin);
            }

            if (name === "downloadAllActivities") {
                downloadAllActivitiesReponse(dataJoin);
            }


            //#region Specifications
            if (name === "StructureResponsableSpecsErp") {
                SetStructureResponsableSpecs(dataJoin);
            }

            if (name === "StructureSpecificDestinationSpecsErp") {
                SetStructureSpecificDestinationSpecs(dataJoin);
            }

            if (name === "StructureSpecialitySpecsErp") {
                SetStructureSpecialitySpecs(dataJoin);
            }

            if (name === "StructureFrontSpecsErp") {
                SetStructureFrontSpecs(dataJoin);
            }

            if (name === "ResponsableSpecsErp") {
                SetDataResponsableSpecsErp(dataJoin);
            }

            if (name === "SpecificDestinationErp") {
                SetDataSpecificDestinationErp(dataJoin);
            }

            if (name === "SpecialityErp") {
                SetDataSpecialityErp(dataJoin);
            }

            if (name === "FrontErp") {
                SetDataFrontErp(dataJoin);
            }
            //#endregion Specifications

            //if (name === "StructureWorkOrderTeams") {
            //    SetStructureWorkOrderTeams(dataJoin);
            //}

            //if (name === "WorkOrderTeamsErp") {
            //    SetDataWorkOrderTeamsErp(dataJoin);
            //}

            //if (name === "WorkOrderPersonalTeamsErp") {
            //    SetDataWorkOrderTeamsPersonalERP(dataJoin);
            //}

            if (name === "AviableHoursWorkOrders") {
                SetDataAviableHours(outpuvalue);
            }

        } catch (ex) {
            //..
        }

        packages = [];
    }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        /* next line works with strings and numbers,
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

onSignalrSetParams = function () {
    erpDataBase = getSecurityUser().CurrentCompany.DatabaseNameERP;
    signalrToken = getSecurityUser().CurrentCompany.Token;
};

getQueryStringParam = function (name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

resetEventSignalr = function () {
   eventSignalrMessage = function () { };
   eventTransportDataMessage = function () { };
   eventHasOutputSignalrMessage = function () { };
};

forceConnectSignalr = function () {
    isForceConnect = true;
    signalrConnect();
};