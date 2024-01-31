import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemsDirective } from '@syncfusion/ej2-react-navigations';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { BreadcrumbBeforeItemRenderEventArgs } from '@syncfusion/ej2-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { getComponent } from '@syncfusion/ej2-base';
import './template-and-customization.css';

const TemplateAndCustomization = () => {

    const [disable, setDisable] = useState<boolean>(false);
    const chipTemplate = (data: any) => {
        return (
            <ChipListComponent>
                <ChipsDirective>
                    <ChipDirective text={data.text}></ChipDirective>
                </ChipsDirective>
            </ChipListComponent>
        );
    }

    const arrowSeparatorTemplate = () => {
        return (
            <span className="e-icons e-arrow"></span>
        );
    }

    const specificItemTemplate = (data: any) => {
        return (
            <div>
                {data.text == "Breadcrumb" ? (
                    <span>
                        <span className="e-searchfor-text">
                            <span style={{ marginRight: "5px" }}>Search for:</span>
                            <a className="e-breadcrumb-text" href={data.url} onClick={() => { return false }}>{data.text}</a>
                        </span>
                    </span>
                ) : (
                    <a className="e-breadcrumb-text" href={data.url} onClick={() => { return false }}>{data.text}</a>
                )}
            </div>
        );
    }

    const customTemplate = (data: any) => {
        return (
            <div className="e-custom-item">
                <div className="e-custom-icon">
                    <span className="e-bicons e-frame e-check"></span>
                    <span className="e-label">{data.text}</span>
                </div>
            </div>
        );
    }

    const customSeparatorTemplate = () => {
        return (
            <div className="e-custom-separator"></div>
        );
    }

    const beforeItemRenderHandler = (args: BreadcrumbBeforeItemRenderEventArgs) => {
        if (args.item.text !== 'Program Files') {
            setDisable(true);
        }
    }

    /*const btnClick = (): void => {
        let breadcrumb, breadcrumbInst, breadcrumbs = document.querySelector('.content-wrapper').getElementsByClassName("e-breadcrumb");
        for (let i = 0; i < breadcrumbs.length; i++) {
            breadcrumb = breadcrumbs[i];
            breadcrumbInst = (getComponent(breadcrumb as HTMLElement, 'breadcrumb') as ButtonComponent);
            breadcrumbInst.activeItem = breadcrumbInst.items[breadcrumbInst.items.length - 1].text;
        }
    }*/

    return (
        <div className='control-pane'>
            <div className="col-lg-12 control-section">
                <div className="content-wrapper breadcrumb-control-wrapper">
                    
                    
                    <div className="row material2">
                        <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
                            <BreadcrumbComponent cssClass="e-custom-breadcrumb" itemTemplate={customTemplate} separatorTemplate={customSeparatorTemplate}>
                                <BreadcrumbItemsDirective>
                                    <BreadcrumbItemDirective text="Directorio 1 " />
                                    <BreadcrumbItemDirective text="Directorio 2" />
                                    <BreadcrumbItemDirective text="Opcion 1" />
                                    <BreadcrumbItemDirective text="Opcion 2" />
                                </BreadcrumbItemsDirective>
                            </BreadcrumbComponent>
                        </div>
                    </div>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    );
}
export default TemplateAndCustomization;