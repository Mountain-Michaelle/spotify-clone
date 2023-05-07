import React from 'react';
import Search from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import '../css/Header.css';


const Header = () => {
    return(
        <div className='header'>
            <div className="header__left">
                <Search />
                <input placeholder='Search for Artist, songs or...' 
                text="text"
                />
            </div>
            
            <div className='header__right'>
                <Avatar  src="" alt="Mountain Michael" /> 
                <h4>Moutain Mikel</h4>
            </div>
        </div>
    )
}
export default Header;