import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('testando funcionamento dos inputs', () => {
  test('verifica se inputemail está na tela', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText(/Email/i);
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  test('verifica se os buttons estão na tela', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    // expect(buttons[0]).toBeInTheDocument();
    // expect(buttons[1]).toBeInTheDocument();
    buttons.forEach((button) => {
      expect(button).toBeInTheDocument();
    })
    
  });

  test('verifica se cada button individualmente está na tela', () => {
    render(<App />);
    const buttonEnviar = screen.getByRole('button', {name: /enviar/i});
    const buttonVoltar = screen.getByRole('button', {name: /voltar/i});

    expect(buttonEnviar).toBeInTheDocument();
    expect(buttonVoltar).toBeInTheDocument();
    });

    test('Verificando se o botão e o campo email estão funcionando', () => {
      render(<App />);

      const EMAIL_USER = 'email@email.com';

      const inputEmail = screen.getByLabelText(/Email/i);
      const buttonEnviar = screen.getByRole('button', {name: /enviar/i});
      
      // const textEmail = screen.getByTestId('id-email-user');
      // const textEmail = screen.getByRole('heading', {name: `Valor:`});
      // expect(textEmail).toBeInTheDocument();
      // expect(textEmail).toHaveTextContent('Valor:');

      userEvent.type(inputEmail, EMAIL_USER);
      expect(inputEmail).toHaveValue(EMAIL_USER);

      userEvent.click(buttonEnviar);
      // expect(textEmail).toHaveTextContent(`Valor: ${ EMAIL_USER }`);
      expect(inputEmail).toHaveValue('');

    });

});

