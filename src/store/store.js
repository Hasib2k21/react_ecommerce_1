import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './slices/userSlice'
import { userAdreessSlice } from './slices/userAdreessSlice'
import { homeSlice } from '../app/pages/home/store/homeSlice'

export default configureStore({
    reducer: {
        homeSlice: homeSlice.reducer,
        userSlice: userSlice.reducer,
        userAdreessSlice: userAdreessSlice.reducer,
    },
})