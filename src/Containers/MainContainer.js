import { connect } from "react-redux";
import {
  addMed,
  submitOrder,
  saveUserDocInfo,
  saveUserInsurance,
  saveUserMedicalInfo,
} from "../Actions/index";

const mapStateToProps = store => {
  return {
   medications: store.addMed,
   recentOrders: store.submitOrder,
   userDoc: store.saveUserDocInfo,
   userInsurance: store.saveUserInsurance,
   userMedicalInfo: store.saveUserMedicalInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMed: (obj) => dispatch(addMed(obj)),
    saveUserDocInfo: (obj) => dispatch(saveUserDocInfo(obj)),
    saveUserInsurance: (obj) => dispatch(saveUserInsurance(obj)),
    saveUserMedicalInfo: (obj) => dispatch(saveUserMedicalInfo(obj)),
    submitOrder: (obj) => dispatch(submitOrder(obj)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps);
