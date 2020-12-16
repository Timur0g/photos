import { applyMiddleware, combineReducers, createStore } from "redux";
import { imagesReducer } from "./imagesReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
    images: imagesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));