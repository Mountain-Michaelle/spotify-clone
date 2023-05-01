import React from 'react'; 
import '../css/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/HomeSharp';
import SearchIcon from '@mui/icons-material/Search';
import LibraryIcon from '@mui/icons-material/LibraryMusic';


const Sidebar =()=> {
    return(
        <div className='sidebar'>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                className='spotify__logo' />
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryIcon} title="Your Library" />

        <br />
        <strong className='sidebar__title'>PLAYLIST</strong>
        <hr />

        <SidebarOption title='HIp-Hop' />
        <SidebarOption title='Blues' />
        <SidebarOption title='Reggea' />
        </div>
    )
}
export default Sidebar;