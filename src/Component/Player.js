import React from 'react';
import { useStateProvider } from '../StateProvider';
import Body from './Body';
import Sidebar from './Sidebar';
import '../css/Player.css';
import Footer from './Footer';

const Player =({ spotify })=> {
    const [{user, token}] = useStateProvider()
    return(
        <div>
            <div className='player_body'>
            <Sidebar />
            <Body />
            </div>
            

            {/* footer */}
            <Footer />
        </div>
    )}
    export default Player;