export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    //Remove after development!
    token: 'BQCTN2LFgkclskhjos3_RvobUDvny6vvha1rnFlg_FJHUSkinxhSA_3spfH_cuYNbidVYce_PKEYDXx4K4OUFtYcpaw2m3Jt0L-QU1FMh7tHnhjAkPzTUm7KrZi-9Lyg25ku0F132padB-7jd9jnKiv98cSw3KhOkKhjY59ux7SedfWsVRi06jhv9jpzdyK7An2V',
};

export const reducer = (state, action) => {
console.log('See action here ', action);
// Action -> Type and Payload
switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user 
        };
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token,
        }
    case 'SET_PLAYLISTS':
        return{
            ...state, 
            playLists: action.playLists
        }
    default:
        return state;
}
}