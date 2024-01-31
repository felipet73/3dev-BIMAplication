import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { SidebarComponent, ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import './sidebar-menu.css';
import SEODashboard from './DashBoardP';


interface Prps{
    trogle:boolean;
    setCambios:React.Dispatch<React.SetStateAction<boolean>>;
}
  

const SidebarWithMenu = ({trogle, setCambios}:Prps) => {
    let sidebarobj = useRef<SidebarComponent>(null);
    let menuItems: MenuItemModel[] = [
        {
            text: 'Principal',
            iconCss: 'icon-up-hand icon',
            items: [
                { text: 'Personal' },
                { text: 'Trabajo' }
            ]
        },
        {
            text: 'Aplicaciones',
            iconCss: 'icon-bell-alt icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        },
        {
            text: 'Educacion',
            iconCss: 'icon-tag icon',
            items: [
                { text: 'Message' },
                { text: 'Facebook' },
                { text: 'Twitter' }
            ]
        },
        {
            text: 'Recursos',
            iconCss: 'icon-comment-inv-alt2 icon',
            items: [
                { text: 'Category1' },
                { text: 'Category2' },
                { text: 'Category3' }
            ]
        },
        {
            text: 'Directorios',
            iconCss: 'icon-bookmark icon',
            items: [
                { text: 'All Comments' },
                { text: 'Add Comments' },
                { text: 'Delete Comments' }
            ]
        },
        {
            text: 'Publicaciones',
            iconCss: 'icon-picture icon',
            items: [
                { text: 'Add Name' },
                { text: 'Add Mobile Number' }
            ]
        },
        /*{
            text: 'Users ',
            iconCss: 'icon-user icon',
            items: [
                { text: 'Mobile User' },
                { text: 'Laptop User' },
                { text: 'Desktop User' }
            ]
        },*/
        {
            text: 'Configuraciones',
            iconCss: 'icon-eye icon',
            items: [
                { text: 'Change Profile' },
                { text: 'Add Name' },
                { text: 'Add Details' }
            ]
        }
    ];
    const enableDock: boolean = true;
    const dockSize: string = '50px';
    const width: string = '220px';
    const target: string = '.main-menu-content';
    let folderEle: string = '<div class= "e-folder"><div class= "e-folder-name">Navigation Pane</div></div>';

    useEffect(() => {
        sidebarobj.current?.toggle();
        setTimeout(() => {
            setCambios(state => !state);    
        }, 800);
    }, [trogle])
    

    return (
        <div id="menu-wrapper">
            <div id="sidebarmenu">
                <div >
                    
                    {/* <ToolbarComponent id="menuToolbar" clicked={toolbarCliked.bind(this)}>
                        <ItemsDirective>
                            <ItemDirective prefixIcon="icon-menu" tooltipText="Menu"></ItemDirective>
                            <ItemDirective template={folderEle}></ItemDirective>
                        </ItemsDirective>
                    </ToolbarComponent> */}
                </div>
                {/* main content declaration */}
                
                {/* end of main content declaration
                sidebar element declaration */}
                <SidebarComponent id="menuSidebar" className="sidebar-menu" ref={sidebarobj} enableDock={enableDock} dockSize={dockSize} width={width} target={target} isOpen={false} type="Auto">
                        <div className="main-menu" >
                            <div className="" style={{ marginTop:'20px' }}>
                                <MenuComponent id="dockMenu" items={menuItems} orientation='Vertical' cssClass='dock-menu'></MenuComponent>
                            </div>
                        </div>
                </SidebarComponent>
                <div style={{overflow:'hidden'}}>
                <SEODashboard/>
                </div>
            </div>
        </div>
    );
}
export default SidebarWithMenu;