import { combineReducers } from "redux";
import {
  addMed,
  submitOrder,
  saveUserDocInfo,
  saveUserInsurance,
  saveUserMedicalInfo
} from "./reducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    addMed,
    submitOrder,
    saveUserDocInfo,
    saveUserInsurance,
    saveUserMedicalInfo,
    router: routerReducer
});

export default rootReducer;
