import React, { createContext, useContext, useReducer, useState } from "react";
import { beginLoading, clickCloseModal, clickOpenModal, CloseSideBar, finishLoading, getYearData, openModal, OpenSideBar } from "../action";
import { reducer } from "../reducers/appReducer";
import axios from "axios";

const liberzenEndPoint =`/.netlify/functions/liberzen`

const initState ={
    isSidebarOpen :false,
    isLoading:true,
    yearData:[],
    isModalOpen:false,
    monthData:[]
}

const AppContext = createContext();
const AppProvider = ({children})=>{
    const [state,dispatch]=useReducer(reducer,initState)
    const [showPhoto,setShowPhoto]=useState({})
    const [currentPath,setCurrentPath]=useState(null)
    const openSidebar = ()=>{
        dispatch({type:OpenSideBar})
    }
    const closeSidebar = ()=>{
        dispatch({type:CloseSideBar})
    }
    const fetchData = async (data) => {
        dispatch({type:beginLoading,payload:data})
        const pathYear = data.substr(6);
        try {
            const { data: getData } = await axios(`${liberzenEndPoint}${pathYear}`);
            const yearData = getData.sort((a, b) => {
                return a.desc - b.desc;
            });
            dispatch({type:getYearData,payload:yearData})
            dispatch({type:finishLoading})
        } catch {
            console.log("okay bye");
            dispatch({type:finishLoading})
        }
    };
    const openModal = (id,idx,month)=>{
        setShowPhoto({id,idx,month})
        dispatch({type:clickOpenModal,payload:{id,month}})
    }
    const closeModal = ()=>{
        dispatch({type:clickCloseModal})
    }
    const handleClick = (event)=>{
        const {nodeName}=event.target;
        if(nodeName ==="IMG"){return}
        closeModal()
    }
    return (
        <AppContext.Provider value={{handleClick,showPhoto,closeModal,openModal,currentPath,setCurrentPath,fetchData,closeSidebar,openSidebar,...state}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider