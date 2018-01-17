import { connect } from "react-redux";
import {
  addMed
} from "../Actions/index";

const mapStateToProps = store => {
  return {
   medications: store.addMed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMed: (obj) => dispatch(addMed(obj))
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
