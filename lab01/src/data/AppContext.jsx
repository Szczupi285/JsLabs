import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 
import { data } from "../lab1/module-data"; 

const initialState = {
    items: data,
};


const AppContext = createContext({
    items: [],
    dispatch: null,
});


export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ items: state.items, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
