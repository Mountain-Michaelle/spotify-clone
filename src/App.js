import { useEffect, useState} from 'react';
import './App.css';
import Login from './Component/Login';
import Player from './Component/Player';
import { getTokenFromUrl } from './Component/spotify';
import SpotifyWebApi from 'spotify-web-api-js'; 
import { useStateProvider } from './StateProvider';


const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useStateProvider();

useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash = "";
  const _token = hash.access_token;
  if(_token){
    //setToken(token)
    dispatch({
      type: 'SET_TOKEN',
      token: _token,
    })
    spotify.setAccessToken(_token);
    spotify.getMe().then((user) => {
      //Dispatch, is like a gun that shoot the users and co. to the data layer  
      dispatch({
        type: 'SET_USER',
        user: user,
      });
    });

    spotify.getUserPlaylists().then((playlists) => {
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: playlists,
      });
    });
  }
}, [])
console.log('Your profile is ' + user)
console.log('Your token is ', token)
  return (
    <div className="App">
    {token ? 
    <div>
      <Player spotify={spotify} />
    </div>: 
    <Login/>}
    </div>
  );
}

export default App;
