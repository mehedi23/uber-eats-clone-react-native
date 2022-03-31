import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cart_data: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cart_item: (state, actions) => {
            const sdf = state.cart_data.find( (e , i) => {
                if(e.id === actions.payload.id){
                    state.cart_data.splice(i, 1);
                }else{
                    state.cart_data = [...state.cart_data, actions.payload];
                };
            });
            
            console.log(sdf)
        }
    },
})

export const {cart_item} = cartSlice.actions

export default cartSlice.reducer