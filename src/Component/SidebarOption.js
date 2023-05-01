import React from 'react';
import '../css/SidebarOption.css';

const SidebarOption = ({Icon, title}) => {
    return(
        <div className='sidebarOption'>
        {Icon && <Icon className='sidebarOption__Icon' />} 
        {Icon ? <h4>{title}</h4>: <p>{title}</p>}
        </div>
    )
}
export default SidebarOption;