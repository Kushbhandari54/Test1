// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./reducers";

export default configureStore(
    {
    reducer: {
        counter:rootReducer,
    },
});


