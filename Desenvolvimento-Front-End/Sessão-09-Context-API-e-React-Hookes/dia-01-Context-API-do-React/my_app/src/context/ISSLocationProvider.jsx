import ISSLocationContext from "./ISSLocationContext";
import { getCurrentISSLocation } from "../services/issAPI";
import { useState } from 'react';

export default function ISSLocationProvider({ children }) {

  const state = {
    latitude: 0,
    longitude: 0,
    isFetching: false,
    error: '',
  };

  const [ISSLocationInfos, setIssLocationInfos] = useState(state)

  const fetchISSLocation = async () => {
    setIssLocationInfos((prevState) => ({
      ...prevState,
      isFetching: true,
    }));
  
      try {
        const response = await getCurrentISSLocation();
        setIssLocationInfos((prevState) => ({
          ...prevState,
          latitude: response.iss_position.latitude,
          longitude: response.iss_position.longitude,
          isFetching: false,
        }));
      } catch (error) {
        setIssLocationInfos((prevState) => ({ 
          ...prevState,
          isFetching: false,
          error: error,
         }));
      }
    }

    const contextType = {
      ...ISSLocationInfos,
      fetchISSLocation: fetchISSLocation,
    }  
    return ( 
    <ISSLocationContext.Provider value={ contextType }>
      { children }
    </ISSLocationContext.Provider>
    );
}