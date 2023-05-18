import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/ProductSlice";

const rootState = combineReducers({
    productSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootState
    })
}

export type rootState = ReturnType<typeof rootState>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']