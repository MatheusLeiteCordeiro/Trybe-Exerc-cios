import { useContext } from 'react';
import ISSLocationContext from '../context/ISSLocationContext';
import useInterval from '../hooks/useInterval';

function Header() {
  const { latitude, longitude, isFetching, error, peopleInSpace, fetchPeapleInSpace } = useContext(ISSLocationContext);

  useInterval(fetchPeapleInSpace, 2000)

  const modifyPageTitle = () => {
    document.title = new Date().toLocaleTimeString();
  }

  useInterval(modifyPageTitle, 1000);

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
      {`Existem ${peopleInSpace.length} no espaço altuamente`}
    </header> 
    );
};

export default Header;

 