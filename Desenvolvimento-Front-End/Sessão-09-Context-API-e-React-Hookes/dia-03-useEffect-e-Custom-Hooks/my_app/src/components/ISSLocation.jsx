import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import ISSLocationContext from '../context/ISSLocationContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import useInterval from '../hooks/useInterval';

function ISSLocation() {

  const { fetchISSLocation, latitude, longitude } = useContext(ISSLocationContext);

  useInterval(fetchISSLocation, 1000)

    return (
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={450}
          height={450}
          minZoom={1.5}
          maxZoom={8}
          zoom={1.5}
        >
          <Marker anchor={[latitude, longitude]} />
        </Map>
      </div>
      )
  }

export default ISSLocation;
