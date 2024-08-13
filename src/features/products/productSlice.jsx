import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = "https://dummyjson.com/products";


const shuffleArray = (array) => {
  let shuffledArray = array.slice(); 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; 
  }
  return shuffledArray;
};

export const productData = createAsyncThunk("product", async () => {
  const response = await fetch(URL);
  const data = await response.json();
  
  try {
    return shuffleArray(data.products);
  } catch (error) {
    console.log(error);
  }
});

/* Fetching Product by ID */
export const fetchProductById = createAsyncThunk(
  "product/fetchProductById",
  async (id) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const pending = createAction(productData.pending);
const fulfilled = createAction(productData.fulfilled);
const rejected = createAction(productData.rejected);

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    loading: false,
    data: [],
    selectedProduct: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(pending, (state) => {
        state.loading = true;
      })
      .addCase(fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* addCase for fetchProduct by id */
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
