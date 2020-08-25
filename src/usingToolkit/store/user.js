import { createSlice } from '@reduxjs/toolkit'

let id = 0;
const slice = createSlice({
    initialState: [],
    name: 'user',
    reducers: {
        addUser: (state, action) => {
            state.push({
                userName: action.payload.userName,
                userId: ++id
            });
        }
    }
});
export const userReducer = slice.reducer;
export const addUser = slice.actions.addUser;
