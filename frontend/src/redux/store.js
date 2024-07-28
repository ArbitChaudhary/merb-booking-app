import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import authReducer from "./reducers/authSlice"
import userReducer from "./reducers/userSlice"

const rootReducer = combineReducers({
    auth : authReducer,
    user : userReducer,
})

const persistConfig = {
    key : "root",
    storage,
    version : 1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    })
})

export const persistor = persistStore(store);