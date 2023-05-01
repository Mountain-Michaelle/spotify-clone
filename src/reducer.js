export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    //Remove after development!
    token: 'BQBfMbCCv56eVsTCxEka_wiWKAaY1GYmz2poyXGfcWyChgBcHjs53jSXqkPyc6kEhK1gmUb_LYVCcPbtnm24jYrobHJg5AbIaskcxZuwseflwRYngQY9tIc0Z2SPX1fB4r0jB3IS6wzBPzY-QhEvwhgjzuH70hRReTnfGfi3pZ853HlE6noaS7S75ToquUJ6VkbR',
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
    default:
        return state;
}
}