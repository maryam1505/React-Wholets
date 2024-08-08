import { createAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://dummyjson.com/products";

export const featureData    = createAsyncThunk("product",async ()=>{
    const response          = await fetch(URL);
    const data              = await response.json();

    try {
      return data;  
    } catch (error) {
        console.log(error);
        
    }
});

const pending   = createAction(featureData.pending);
const fulfilled = createAction(featureData.fulfilled);
const rejected  = createAction(featureData.rejected);

const featureSlice = createSlice({
    name: "featureSlice",
    initialState: {
        loading: false,
        data: [],
        error: null,
    },
    extraReducers: (builder)=>{
        builder.addCase(pending,(state)=>{
            state.loading = true;
        }).addCase(fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        }).addCase(rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    },

});

export default featureSlice.reducer;