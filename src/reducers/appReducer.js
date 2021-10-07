import { beginLoading, clickCloseModal, clickOpenModal, CloseSideBar, finishLoading, getYearData, OpenSideBar } from "../action";


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
        case getYearData :
            return{
                ...state,yearData:action.payload
            }
        case beginLoading:
            return{
                ...state,isLoading:true
            }
        case finishLoading:
            return{
                ...state,isLoading:false
            }
        case clickOpenModal:
            const {id,month} = action.payload;
            const {image} = state.yearData.find(items=>{
                return items.month === month
            })
            return{
                ...state,isModalOpen:true,monthData:image
            }
        case clickCloseModal:
            return{
                ...state,isModalOpen:false,monthData:[]
            }
        default:
            throw new Error();
    }
}