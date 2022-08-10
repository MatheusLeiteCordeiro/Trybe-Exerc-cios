import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <h4>Curso</h4>
        <nav>
          {/* Agenda, aula ao vivo, trybe talks, gabaritos */}
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/calendar">Agenda</Link>
          <br></br>
          <Link to="/live-lectures">Aulas ao Vivo</Link>
          <br></br>
          <Link to="/solutions">Gabaritos</Link>
          <br></br>
          <br></br>
        </nav>
      </section>
    );
  }
}

export default Sidebar;