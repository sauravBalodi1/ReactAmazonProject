export const inititalState={
    basket:[],
};
export const getBasketTotal=(basket)=>{
    //console.log(basket)
    let total=0;
 
 for(let i=0;i<basket.length;i++)
 {
     total=basket[i].price+total;
    
 }
 return total;
 
}
const reducer=(state,action)=>{
      switch(action.type)
    {
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
            default:
                return state;
    }
}
export default reducer