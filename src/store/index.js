import {applyMiddleware, combineReducers, createStore} from "redux";
import userReducer from "./userReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import { commentsReducer } from "./commentsReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    commentsReducer,
    userReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)

