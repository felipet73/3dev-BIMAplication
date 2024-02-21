/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

//alert('cargando');
/*$(document).on('load', function () {
//$document.on(load, function () {
  alert('cargando');
  // in case we want to load this app with a model pre-loaded
  var urn = getParameterByName('urn');
  urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
  if (urn !== null && urn !== '')
    launchViewer(urn);

    $( "#selbtn" ).click(function() {
      var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
      //viewer.select(cadena);
      //viewer.select(cadena, viewer.model, Autodesk.Viewing.SelectionType.OVERLAYED)

      //viewer.highlightRevit(cadena);
      highlightRevit(cadena);
      alert( cadena );
    });
});*/




/*function carga1() {
  alert('hola');
  var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
  //viewer.select(cadena);
  //viewer.select(cadena, viewer.model, Autodesk.Viewing.SelectionType.OVERLAYED)

  //viewer.highlightRevit(cadena);
  highlightRevit(cadena);
  //alert( cadena );
}

*/

/*window.onload=function() {

  var urn = getParameterByName('urn');
  urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
  launchViewer(urn);
  

  $("#selbtn").click(function() {
    alert('hola');
    var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
    highlightRevit(cadena);
  });


}*/




var urn = getParameterByName('urn');
urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
launchViewer(urn);


/*$('#selbtn').on('click', function () {
  alert('hola');
  var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
  //viewer.select(cadena);
  //viewer.select(cadena, viewer.model, Autodesk.Viewing.SelectionType.OVERLAYED)

  //viewer.highlightRevit(cadena);
  highlightRevit(cadena);
  alert( cadena );
});*/

/*window.onload=function() {
  alert('');
  var btn = document.getElementById('selbtn');
  btn.addEventListener("click", carga1);
 

}*/


/* Función que se gatilla al hacer click en el elemento DIV */

function carga1() {
  
  var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
  //viewer.select(cadena);
  //viewer.select(cadena, viewer.model, Autodesk.Viewing.SelectionType.OVERLAYED)

  //viewer.highlightRevit(cadena);
  highlightRevit(cadena);
  //alert( cadena );
}

function carga2() {
  
  //var urn = getParameterByName('urn');
  //alert(dato);
  var urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
  //urn = dato;
  launchViewer(urn);
  //alert( cadena );
  $("#selbtn").click(function() {
    //alert('hola uno');
    var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
    highlightRevit(cadena);
    viewer.loadExtension("NestedViewerExtension", { filter: ["2d","3d"], crossSelection: true });
  });
  cargar_scripts();
  
}


function carga3() {
  
  var urn = getParameterByName('urn');
  urn = 'dXJuOmFkc2sud2lwcHJvZDpmcy5maWxlOnZmLmhxbTRIV0ZmUm82VGtzand2MjZQSlE_dmVyc2lvbj0x';
  launchViewer(urn);
  //alert( cadena );
 
}


/*$("#selbtn").click(function() {
  alert('hola');
  var cadena = '5c069bcb-62a6-44a8-a199-48eb6d184f17-000546cc';
  //viewer.select(cadena);
  //viewer.select(cadena, viewer.model, Autodesk.Viewing.SelectionType.OVERLAYED)

  //viewer.highlightRevit(cadena);
  highlightRevit(cadena);
  //alert( cadena );
});*/


function highlightRevit(idsRevit) {
  // Every Forge Viewer model has an ‘ExternalId Mapping’
  // this mapping is an object that has as keys the
  this.viewer.model.getExternalIdMapping((mapping) => {
      this.configureElementByUniqueIdAndMapping(idsRevit, mapping);
  });
}
function configureElementByUniqueIdAndMapping(idsRevit, mapping) {
  var elementsDbId = [];
  var idsRevitArray = idsRevit.split(',');
  for (var uniqueId in idsRevitArray) {
      const elementDbId = mapping[idsRevitArray[uniqueId]];
      if (elementDbId) {
          elementsDbId.push(elementDbId);
      }
  }
  this.viewer.isolate(elementsDbId);
  this.viewer.fitToView(elementsDbId);
}


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var viewer;



// @urn the model to show
// @viewablesId which viewables to show, applies to BIM 360 Plans folder
function launchViewer(urn, viewableId) {
  //alert('cargando');
  var options = {
    env: 'AutodeskProduction',
    getAccessToken: getForgeToken,
    api: 'derivativeV2' + (atob(urn.replace('_', '/')).indexOf('emea') > -1 ? '_EU' : '') // handle BIM 360 US and EU regions
  };
  //alert('se cargo'+'urn= '+urn+' acces token=');
  Autodesk.Viewing.Initializer(options, () => {
    const config = {
      extensions: ['Autodesk.VisualClusters', 'Autodesk.DocumentBrowser', 'NestedViewerExtension']
    };

    viewer = new Autodesk.Viewing.GuiViewer3D(document.getElementById('forgeViewer'), config);
    
    viewer.start();
    var documentId = 'urn:' + urn;
    Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

    // smooth navigation...
    viewer.autocam.shotParams.destinationPercent = 3;
    viewer.autocam.shotParams.duration = 3;
    
  });

  function onDocumentLoadSuccess(doc) {
    // if a viewableId was specified, load that view, otherwise the default view
    var viewables = (viewableId ? doc.getRoot().findByGuid(viewableId) : doc.getRoot().getDefaultGeometry());
    viewer.loadDocumentNode(doc, viewables).then(i => {
      // any additional action here?
      viewer.loadExtension("NestedViewerExtension", { filter: ["2d","3d"], crossSelection: true })
    });

  }

  function onDocumentLoadFailure(viewerErrorCode) {
    console.error('onDocumentLoadFailure() - errorCode:' + viewerErrorCode);
  }
}

/*function getForgeToken(callback) {  
  fetch('http://localhost:3000/api/forge/oauth/token').then(res => {
    res.json().then(data => {
      alert(data.access_token);
      callback(data.access_token, data.expires_in);
      
    });
  }).catch((err)=>{
    alert('ME DA ERROR'+err);

  });
}*/





function getForgeToken(callback) {    
jQuery.ajax({ 
  type: "POST", 
  url: 'https://developer.api.autodesk.com/authentication/v1/authenticate', 
  data: {
    'client_id':'Lrn6oqLnwpCBd8GS0LuimGx5SHONYw4b',
    'client_secret':'JLA2LfrdwUg4hMkz',
    'grant_type':'client_credentials',
    'scope':'data:read data:write data:create data:search bucket:create bucket:read bucket:update bucket:delete'
  }, 
  //dataType: "application/x-www-form-urlencoded",
  dataType: "json",
  success: function (res) {
    //alert(res.access_token);
    //res.json().then(data => {
    callback(res.access_token, res.expires_in);
      
    //});
  }
}); 
}

            
            



