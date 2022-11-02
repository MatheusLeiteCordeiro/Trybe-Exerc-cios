import ISSLocationContext from '../context/ISSLocationContext';

function Header() {
    return (
      <ISSLocationContext.Consumer>
        {({ latitude, longitude, isFetching, error }) => (
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
        )}
      </ISSLocationContext.Consumer>
    );
};

export default Header;

 