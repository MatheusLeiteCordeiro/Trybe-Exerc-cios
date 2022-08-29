import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

// PASSO A PASSO:
// ACESSAR OS ELEMENTOS DA TELA
// INTERAGIR COM OS ELEMENTOS (SE NECESSÁRIO)
// FAZER OS TESTES

test('Verifições do campo Email', () => {
  render(<App />);

  const inputEmail = screen.getByLabelText(/email/i);
  // const inputEmail = screen.getByRole('textbox');
  expect(inputEmail).toBeInTheDocument();
});

test('Verificações Button', () => { 
  render(<App />);

  const buttons = screen.getAllByRole('button');
  const btnSend = screen.getByTestId('id-send')
  expect(btnSend).toBeInTheDocument();
  expect(btnSend).toHaveValue('Enviar')
  expect(buttons).toHaveLength(2);
 });

 test('Verifica funcionamento do input e botão', () => {
  render(<App />);

  const userEmail = 'test@test.com'

  const inputEmail = screen.getByLabelText(/email/i);
  const btnSend = screen.getByTestId('id-send');
  const emailUserValue = screen.getByTestId('id-email-user');

  expect(inputEmail).toHaveTextContent('');
  expect(emailUserValue).toHaveTextContent('Valor:');

  userEvent.type(inputEmail, userEmail)
  userEvent.click(btnSend);

  expect(inputEmail).toHaveValue('');
  expect(emailUserValue).toHaveTextContent(`Valor: ${userEmail}`);

 });
