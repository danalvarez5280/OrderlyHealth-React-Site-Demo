import { combineReducers } from "redux";
import {medicationInfo} from "./reducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    medicationInfo,
    router: routerReducer
});

export default rootReducer;
