import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer"; 
import { data } from "../lab1/module-data"; 

// Initial State
const initialState = {
    items: data,
};

// Create Context
const AppContext = createContext({
    items: [],
    dispatch: null,
});

// AppProvider Component
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ items: state.items, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
