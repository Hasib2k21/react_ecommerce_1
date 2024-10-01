import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user_info: {
            name: 'hasib',
        },
        user_contact: [
            '0164979865',
            '0189744566',
        ]
    },
    reducers: {
        set_user_info: (state, action) => {
            console.log(action);
            
            state.user_info = action.payload
        },
    },
});

export default userSlice.reducer