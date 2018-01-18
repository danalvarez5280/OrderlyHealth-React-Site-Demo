import { connect } from "react-redux";
import {
  addMed,
  submitOrder
} from "../Actions/index";

const mapStateToProps = store => {
  return {
   medications: store.addMed,
   recentOrders: store.submitOrder
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMed: (obj) => dispatch(addMed(obj)),
    submitOrder: (obj) => dispatch(submitOrder(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
