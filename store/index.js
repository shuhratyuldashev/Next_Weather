import { configureStore } from "@reduxjs/toolkit";
import historyReducer from './weatherSlice'
import fetchDaysWeatherReducer from './weatherFetchSlice'

const store = configureStore({
    reducer: {
        history: historyReducer,
        data: fetchDaysWeatherReducer
    }
})

export default store;