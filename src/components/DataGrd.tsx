import React from 'react'
import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Inject, Page, PageSettingsModel, Sort } from '@syncfusion/ej2-react-grids';
//import { data } from '../datasource';

export const DataGrd = () => {
  const pageSettings: PageSettingsModel = { pageSize: 100 }
  return (
    <GridComponent style={{height:'100%'}} dataSource={[]} allowPaging={true} pageSettings={ pageSettings }>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Orden' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]} />
    </GridComponent>
  )
}
