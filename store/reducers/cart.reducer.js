import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart.action'


const initialState ={
    items: [],
    total: 0,
}

const sumTotal = (list) =>list
    .map(item => item.quantity * item.price)
    .reduce((a,b)=>a+b, 0)

const CartReducer = (state= initialState, action)=>{
    switch (action.type) {
        case ADD_ITEM:
            let updateCart = [];

            if (state.items.find(item=>item.id === action.item.id)){
                updateCart=state.items.map(item=>{
                    if (item.id === action.item.id) item.quantity++;
                    return item;
                })
            } else {
                const item = {...action.item, quantity: 1};
                updateCart= [...state.items, item]
            }
            
            return {
                ...state,
                items: updateCart,
                total: sumTotal(updateCart)
            }
        case REMOVE_ITEM:
            const filteredCart = state.items.filter(item => item.id !== action.itemID)
            return {
                ...state,
                items :filteredCart,
                total: sumTotal(filteredCart)
            }
            default:
                return state
    }
}
export default CartReducer;