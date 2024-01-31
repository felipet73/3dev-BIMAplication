import './App.css';


import * as React from 'react';

import { L10n, setCulture } from '@syncfusion/ej2-base';
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import { DataGrd } from './components/DataGrd';
import SEODashboard from './components/DashBoardP';
import { Principal } from './components/Principal';
//import { enableRipple } from '@syncfusion/ej2-base';

//import "/node_modules/@syncfusion/ej2/tailwind.css";
//import "/node_modules/@syncfusion/ej2/tailwind-dark.css";

//const Dark = React.lazy(() => import('/node_modules/@syncfusion/ej2/tailwind-dark.css'));

//const Theme1 = React.lazy(() => import("./node_modules/@syncfusion/ej2/tailwind-dark.css"));
//const Theme2 = React.lazy(() => import("./Theme2"));

//const Theme1 = React.lazy(() => import('./tailwind-dark.css'));
//const Theme2 = React.lazy(() => import('./tailwind.css'));
//enableRipple(true);

L10n.load({
  'es': {
      'grid': {
          'EmptyRecord': 'Registro vacio',
          'GroupDropArea': 'Grupo',
          'UnGroup': 'Desagrupar',
          'EmptyDataSourceError': 'No se encontraron datos',
          'Item': 'Ariculo',
          'Items': 'Articulos'
      },
      'pager':{
          'currentPageInfo': '{0} de {1} Paginas',
          'totalItemsInfo': '({0} registros)',
          'firstPageTooltip': 'Primera pagina',
          'lastPageTooltip': 'Ultima Pagina',
          'nextPageTooltip': 'Siguiente pagina',
          'previousPageTooltip': 'Pagina previa',
          'nextPagerTooltip': 'Siguente pagina',
          'previousPagerTooltip': 'Pagina previa'
      }
  }
});

function App() {
    const [selectedTheme, setSelectedTheme] = React.useState('material3-dark');
    const [cambios, setCambios] = React.useState(true);
    const selectCSS = () => {
        if (selectedTheme){
            /*document.body.classList.add('dark');
            document.body.classList.add('e-dark-mode');
            */
            //Theme1();
         // require('/node_modules/@syncfusion/ej2/tailwind-dark.css');
          //alert('dark')
          //window.location.reload();
          const el = document.getElementById('theme') as HTMLAnchorElement;
          el.href = 'tailwind-dark.css';
          setCambios(!cambios);
          

        } else {
            //document.getElementById('theme')!.href = 'https://cdn.syncfusion.com/ej2/material.css';
            const el = document.getElementById('theme') as HTMLAnchorElement;
            //el.href = '/node_modules/@syncfusion/ej2/tailwind.css';
            el.href = 'tailwind.css';
            setCambios(!cambios);
            /*document.body.classList.remove('dark');
            document.body.classList.remove('e-dark-mode');            

            document.body.classList.add('light');
            document.body.classList.add('e-light-mode');*/
            //setCambios(!cambios);
            //require('/node_modules/@syncfusion/ej2/tailwind.css');
          //alert('light')
          //window.location.reload();
        }
      }

     /* React.useEffect(() => {
        selectCSS();
      }, [selectedTheme]);*/

      React.useEffect(() => {
        //const el = document.getElementById('theme') as HTMLLinkElement;
        //document.getElementById("input1").checked = "true";
        //setTheme("material3-dark");
        //setSelectedTheme('material3-dark');
      });      
      
      const setTheme = (selectedTheme:string) => {
        const el = document.getElementById(selectedTheme) as HTMLLinkElement;
        //alert(selectedTheme);
        el.disabled = false;
        const otherTheme = selectedTheme == "material3" ? "material3-dark" : "material3";
        const el1 = document.getElementById(otherTheme) as HTMLLinkElement;
        el1.disabled = true;
        //alert(otherTheme);
        setSelectedTheme(selectedTheme);

      };

    //import "/node_modules/@syncfusion/ej2/tailwind-dark.css";
    setCulture('es');
    
    return (<>
    <FabComponent id='fab' iconCss={selectedTheme==='material3' ? 'e-icons e-contrast':'e-icons e-brightness'} cssClass= 'custom-position' content='' onClick={()=> {
        if (selectedTheme==='material3')
            //setSelectedTheme('material3-dark'); 
            setTheme('material3-dark');
        else
            setTheme('material3');
            //setSelectedTheme('material3'); 
        }} target='#targetElement'></FabComponent>



        <Principal setCambios={setCambios}/>
        {/* <DataGrd/> */}

      

    </>)
};
export default App;
