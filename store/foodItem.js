import {createSlice} from '@reduxjs/toolkit';
import {food} from '../demoData/demoFood';

const initialState = {
    data : food,
    cart : [],
    price : 0
};

export const foodItem = createSlice({
    name: 'foodItem',
    initialState,
    reducers : {
        cart_action : (state , {payload}) => {
            state.data[payload.id] = {
                ...state.data[payload.id],
                checked: payload.checked
            };


            function filterByID(item) {
                if (Number.isFinite(item.id) && item.checked === true) {
                    return true
                };
                return false;
            }

            state.cart = state.data.filter(filterByID);
            
            state.price = 0;
            if(state.cart.length > 0) {
                for (let i = 0; state.cart.length > i; i++){
                    state.price = state.price + state.cart[i].price
                };
            };
        }
    }
});

export const {cart_action}  = foodItem.actions;
export default foodItem.reducer;