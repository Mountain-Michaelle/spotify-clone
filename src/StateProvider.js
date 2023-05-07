import React, {createContext, useContext, useReducer} from 'react';


export const ContextProviderLayer = createContext();

export const StateProvider = ({initialState, reducer, children}) => (
    <ContextProviderLayer.Provider value={useReducer(reducer, initialState)}>
    {children}
    </ContextProviderLayer.Provider>
)
export const useStateProvider =()=> useContext(ContextProviderLayer) 
 