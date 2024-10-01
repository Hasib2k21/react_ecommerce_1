import { createSlice } from '@reduxjs/toolkit'

export const userAdreessSlice = createSlice({
    name: 'userAdreessSlice',
    initialState: {
        user_address: {
            street: 'lane 1, banani 1'
        },
    },
    reducers: {
        set_user_address: (state, action) => {
            state.user_address = action.payload
        },
    },
});

export default userAdreessSlice.reducer