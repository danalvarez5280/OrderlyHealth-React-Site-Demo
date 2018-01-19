import { combineReducers } from "redux";
import {
  addMed,
  submitOrder,
  saveUserProfile,
  saveUserDocInfo,
  saveUserInsurance,
  saveUserMedicalInfo,
} from "./reducers";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
    addMed,
    submitOrder,
    saveUserProfile,
    saveUserDocInfo,
    saveUserInsurance,
    saveUserMedicalInfo,
    router: routerReducer
});

export default rootReducer;
