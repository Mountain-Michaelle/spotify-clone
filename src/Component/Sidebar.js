import React from 'react'; 
import '../css/Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/HomeSharp';
import SearchIcon from '@mui/icons-material/Search';
import LibraryIcon from '@mui/icons-material/LibraryMusic';
import { useStateProvider } from '../StateProvider';


const Sidebar =()=> {
    const [{playLists}, dispatch] = useStateProvider();
    console.log("Playlists are ", playLists);
    return(
        <div className='sidebar'>
            <img alt="images" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                className='spotify__logo' />
        <SidebarOption Icon={HomeIcon} title="Home"/>
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryIcon} title="Your Library" />

        <br />
        <strong className='sidebar__title'>PLAYLIST</strong>
        <hr />

        {playLists?.items?.map(playlist => (
            <SidebarOption title={playlist.title} />
        ))}
        </div>
    )
}
export default Sidebar;