import { useContext } from 'react';
import ISSLocationContext from '../context/ISSLocationContext';

function Header() {
  const { latitude, longitude, isFetching, error } = useContext(ISSLocationContext);
    return (
      <header>
      <h1>
        Space Station Tracker {isFetching && "⌛️" }
      </h1>
      <div>
        <p><strong>Latitude:</strong> { latitude }</p>
        <p><strong>Longitude:</strong> { longitude }</p>
        {error && <p>Erro: {error}</p>}
      </div>
    </header> 
    );
};

export default Header;

 