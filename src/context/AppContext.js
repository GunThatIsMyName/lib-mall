import React, { createContext, useContext, useReducer } from "react";
import { CloseSideBar, OpenSideBar } from "../action";
import { initState, reducer } from "../reducers/appReducer";

const AppContext = createContext();
const AppProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initState)
    const openSidebar = ()=>{
        dispatch({type:OpenSideBar})
    }
    const closeSidebar = ()=>{
        dispatch({type:CloseSideBar})
    }
    return (
        <AppContext.Provider value={{closeSidebar,openSidebar,...state}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider