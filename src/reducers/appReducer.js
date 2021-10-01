import { CloseSideBar, OpenSideBar } from "../action";

export const initState={
    isSidebarOpen :false
}

export const reducer = (state,action)=>{
    switch (action.type){
        case OpenSideBar:
            return{
                ...state,isSidebarOpen:true
            }
        case CloseSideBar:
            return{
                ...state,isSidebarOpen:false
            }
        default:
            throw new Error();
    }
}