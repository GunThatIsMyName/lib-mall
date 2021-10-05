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
            const id = action.payload;
            const getItem = state.yearData.find(items=>{
                let getID = items.image.filter(item=>{
                    return item.id === id;
                })
                return getID
            })
            const monthPhoto = getItem.image;
            return{
                ...state,isModalOpen:true,monthData:monthPhoto
            }
        case clickCloseModal:
            return{
                ...state,isModalOpen:false,monthData:[]
            }
        default:
            throw new Error();
    }
}