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
  const [peopleInSpace, setPeapleInSpace] = useState([]);

  const fetchISSLocation = async () => {
    console.log('fetchISSLocation');

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

    const fetchPeapleInSpace = async() => {
      console.log('fetchPeapleInSpace');
      
      try {
        const response = await fetch('http://api.open-notify.org/astros.json');
        const { people } = await response.json();
        setPeapleInSpace(people);
        setIssLocationInfos((prevState) => ({
          ...prevState,
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
      peopleInSpace,
      fetchISSLocation,
      fetchPeapleInSpace,
    }  
    return ( 
    <ISSLocationContext.Provider value={ contextType }>
      { children }
    </ISSLocationContext.Provider>
    );
}