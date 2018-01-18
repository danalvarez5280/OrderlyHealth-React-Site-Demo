import React, { Component } from "react";
import Iframe from "react-iframe";
import MainContainer from "../../Containers/MainContainer";
import './MyMap.css';

export class MyMap extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: "Denver, CO",
      userLocation: ""
    };
  }
  // const { currentLocation, userLocation} = this.state

  grabLocation() {
    if (this.state.currentLocation === "" && this.state.userLocation === "") {
      alert("Please enter something to search");
    } else {
      this.userInfo();
    }
  }

  resetSearch() {
    this.getPosition();
    this.props.setLocation({ currentLocation: undefined, userLocation: undefined });
    this.setState({
      currentLocation: "",
      userLocation: ""
    });
  }

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    });
  }

  render() {
    const { currentLocation, userLocation } = this.state;
    const location = userLocation ? userLocation : currentLocation;
    // const url =`https://www.google.com/maps/embed/v1/view?key=AIzaSyDAOPlM-JOakw3AcI0FwW23r6L-Rhgc-lI&q&center=-33.8569,151.2152&zoom=18&maptype=satellite`;
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDTMGz8GoyDpUQU7Z2vjvevQE07VD7jO6g&q=Doctor+Office,${location}`;

    return (
      <div className="map-area">
        <p>{location}</p>
        <div className="forms">
          <form className="main-form">
            <input
              className="input-field"
              title="userLocation"
              type="text"
              value={this.state.userLocation}
              placeholder="location"
              onChange={e => this.grabInfo(e)}
            />
            <div className="search-area">
              <input
                className="input-field form-button"
                type="button"
                onClick={e => this.grabLocation()}
                value="Search"
              />
              <button
                onClick={() => this.resetSearch()}
                className="input-field form-button refresh"
              >
                Reset Search
              </button>
            </div>
          </form>
        </div>
        <Iframe
          className="map-window"
          url={url}
          width="450px"
          height="250px"
          position="relative"
          margin="200px"
          allowFullScreen
        />
      </div>
    );
  }
}

export default MainContainer(MyMap);
