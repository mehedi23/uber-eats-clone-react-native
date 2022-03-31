import {createSlice} from '@reduxjs/toolkit';
import {food} from '../demoData/demoFood'

const initialState = {
    data : food
};

export const foodItem = createSlice({
    name: 'foodItem',
    initialState
})

export default foodItem.reducer;