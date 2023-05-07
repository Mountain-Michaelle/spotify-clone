import React from 'react';
import '../css/Footer.css';
import Album from '../images/Album.jpg';
import SearchIcon from '@mui/icons-material/Search';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@mui/material';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';


const Footer = () => {
    return(
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__albumlogo" src={Album} alt="" />
                    
                <div className='footer__albumlogo__title'>
                    <h4>Yaweh</h4>
                  <p>
                    Lil Wayne of the hight artist
                    </p>  
                </div>
                    
            </div>
            <div className="footer__center">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon className="footer__icon" />
            <PlayCircleIcon fontSize="large" className="footer__" />
            <SkipNextIcon className="footer__icon" />
            <RepeatIcon className="footer__green" />
            </div>
            
            <div className="footer__right">

                <Grid container spacing={2}>
                <Grid item>
                    <PlaylistPlay />
                </Grid>
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid  style={{color: 'white'}}item xs>
                    <Slider />
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;

