import {
    combineReducers,
    configureStore
} from '@reduxjs/toolkit';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    news: newsReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;