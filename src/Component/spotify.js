

export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "http://localhost:3000/"
const clientId = "67f2721f5b5b487daf76cdb24fecbb70";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce( (initial, item) => {
        let parts=item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;
    }, {})
} 
export const loginUrl =  `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;


