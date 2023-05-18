import {IBasket, IProduct} from "../../types/IProduct";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IProductSlice {
    product: IProduct[];
    basket: IBasket[];
    loading: boolean;
    error: string;
}


const initialState: IProductSlice = {
    product: [],
    basket: [],
    loading: false,
    error: ""
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        productFetching(state) {
            state.loading = true
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.loading = false
            state.product.push(action.payload)
            state.error = ""
        },
        newProduct: (state, action: PayloadAction<IProduct>) => {
            state.loading = false
            state.product.push(action.payload)
            state.error = ""
        },
        productFetchingError(state, action: PayloadAction<string>) {
            state.loading = false
            state.error = action.payload
        },
        basket(state, action: PayloadAction<IBasket>) {
            const find = state.basket.find(el => el.id === action.payload.id);
            if (find) {
                state.basket = state.basket.map(el => el.id === action.payload.id ? {...el, quantity: el.quantity + 1} : el)
            } else {
                state.basket.push({...action.payload, quantity: 1});
            }
        },
        removeProduct (state, action: PayloadAction<any>) {
            state.basket = state.basket.filter(el => el.id !== action.payload)
        }
    }
})

export const {addProduct, newProduct, productFetchingError, basket} = productSlice.actions
export default productSlice.reducer