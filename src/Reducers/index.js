import { combineReducers } from "redux";
import {addMed, submitOrder, saveUserDocInfo, saveUserInsurance} from "./reducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    addMed,
    submitOrder,
    saveUserDocInfo,
    saveUserInsurance,
    router: routerReducer
});

export default rootReducer;
