import React, { Component } from "react";
import ISSLocationContext from "./ISSLocationContext";
import { getCurrentISSLocation } from "../services/issAPI";

export default class ISSLocationProvider extends Component {

  state = {
    latitude: 0,
    longitude: 0,
    isFetching: false,
    error: '',
  };

  fetchISSLocation = async () => {
    this.setState({ isFetching: true });
  
      try {
        const response = await getCurrentISSLocation();
        this.setState({
          latitude: response.iss_position.latitude,
          longitude: response.iss_position.longitude,
          isFetching: false,
        })
      } catch (error) {
        this.setState({ 
          isFetching: false,
          error: error,
         })
      }
    }

  render() {
    const { children } = this.props;
    const contextType = {
      ...this.state,
      fetchISSLocation: this.fetchISSLocation,
    }  
    return ( 
    <ISSLocationContext.Provider value={ contextType }>
      { children }
    </ISSLocationContext.Provider>
    );
  }
}