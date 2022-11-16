import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import ISSLocationContext from '../context/ISSLocationContext';
import { Component } from 'react';

class ISSLocation extends Component {

  componentDidMount() {
    const { fetchISSLocation } = this.context;
    this.timer = setInterval(() => (fetchISSLocation()), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const { longitude, latitude } = this.context
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
  }

ISSLocation.contextType = ISSLocationContext;

export default ISSLocation;
