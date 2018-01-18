import { combineReducers } from "redux";
import {addMed, submitOrder} from "./reducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    addMed,
    submitOrder,
    router: routerReducer
});

export default rootReducer;
