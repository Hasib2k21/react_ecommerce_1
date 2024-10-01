import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getProducts = createAsyncThunk(
    'homeSlice/getProducts',
    async () => {
        const response = await fetch('https://etek.com.bd/api/v1/get-all-featured-products?get_all=1&limit=24&fields[0]=id&fields[1]=title&fields[2]=customer_sales_price&fields[3]=discount_type&fields[4]=discount_amount&fields[5]=product_brand_id&fields[6]=sku&fields[7]=type&fields[8]=slug&fields[9]=is_available');
        let data = await response.json();
        return data.data
    }
)

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {
        status: 'loading',
        products: [],
    },
    reducers: {

    },
    extraReducers: function (builder) {
        builder
            .addCase(getProducts.pending, state => {
                state.status = 'loading'
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = 'idle'
                state.products = action.payload
            })
            .addCase(getProducts.rejected, state => {
                state.status = 'failed'
            })
    }
});

export default homeSlice.reducer