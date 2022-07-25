import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const renderArray = (element) => {
       return (
        <ul key={element.bloco}>
        <li>{`O conteúdo é: ${element.conteudo}`}</li>
        <li>{`Status: ${element.status}`}</li>
        <li>{`Bloco: ${element.bloco}`}</li>
        </ul> 
       );
  };

class Content extends React.Component {
    render() {
        return (
            conteudos.map(element => renderArray(element))
    );
}
}

export default Content;