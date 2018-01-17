import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";

// import "./Reorder.css";
// import PrescriptionPage from "../PrescriptionPage/PrescriptionPage";

class Reorder extends Component {
  constructor() {
    super();
    this.state = {
      medications: []
    };
  }

  render() {
    return (
      <div className="med-info">
        <div className="new-order">
          <div className="cancel-button">CANCEL</div>
          <h3>ReOrder</h3>
        </div>
        {/* <div>{medPages}</div> */}
      </div>
    );
  }
}

export default MainContainer(Reorder);
