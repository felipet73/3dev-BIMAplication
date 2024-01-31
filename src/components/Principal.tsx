import React from 'react'
import Color from './AppBar'
import SidebarWithMenu from './SideBarC'

interface Prps{
    setCambios:React.Dispatch<React.SetStateAction<boolean>>;
}

export const Principal = ({setCambios}:Prps) => {
  return (
    <div>
        <Color setCambios={setCambios}/>
    </div>
  )
}
