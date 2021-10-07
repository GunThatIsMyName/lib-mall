export const getTotalNumber = (data)=>{
    const itemNumber = data.map(item=>{
        if(item ===undefined){
            return 0;
        }
        return item;
    })
    const totalNumber = itemNumber.reduce((item,curr)=>item+curr)
    return totalNumber;
}