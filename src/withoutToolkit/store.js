import { createStore, applyMiddleware } from "redux"
import reducer from "./todo"
import { logger } from "../MiddleWare/logge";

const store = createStore(reducer,applyMiddleware(logger));

export default store;