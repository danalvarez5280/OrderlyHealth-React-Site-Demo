import { connect } from "react-redux";
import {
  addMed,
  addChat,
  login,
  submitOrder,
  saveUserProfile,
  saveUserDocInfo,
  saveUserInsurance,
  saveUserMedicalInfo,
} from "../Actions/index";

const mapStateToProps = store => {
  return {
   medications: store.addMed,
   conversation: store.addChat,
   userLogin: store.login,
   recentOrders: store.submitOrder,
   userInfo: store.saveUserProfile,
   userDoc: store.saveUserDocInfo,
   userInsurance: store.saveUserInsurance,
   userMedicalInfo: store.saveUserMedicalInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMed: (obj) => dispatch(addMed(obj)),
    addChat: (str) => dispatch(addChat(str)),
    login: (obj) => dispatch(login(obj)),
    saveUserProfile: (obj) => dispatch(saveUserProfile(obj)),
    saveUserDocInfo: (obj) => dispatch(saveUserDocInfo(obj)),
    saveUserInsurance: (obj) => dispatch(saveUserInsurance(obj)),
    saveUserMedicalInfo: (obj) => dispatch(saveUserMedicalInfo(obj)),
    submitOrder: (obj) => dispatch(submitOrder(obj)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps);
