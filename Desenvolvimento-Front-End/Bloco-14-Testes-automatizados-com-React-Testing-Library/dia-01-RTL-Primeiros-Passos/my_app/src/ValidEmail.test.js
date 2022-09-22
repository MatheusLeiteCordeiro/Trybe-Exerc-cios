import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  render(<ValidEmail email={ 'emailerrado' } />);
  const isInvalid = screen.getByText('Email Inválido');
  expect(isInvalid).toBeInTheDocument();
});

test('Testando se a mensagem não é exibida caso o email ainda n fora enviado', () => {
  render(<ValidEmail email={ '' } />);
  const isValidText = screen.queryByTestId('id-is-email-valid');;
  expect(isValidText).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um email válido', () => {
  const EMAIL_USER = 'email@email.com';

  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'green-text')
})

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido', () => {

  render(<ValidEmail email={'xxxxxx'} />);
  const isValidText = screen.getByTestId('id-is-email-valid');
  expect(isValidText).toHaveAttribute('class', 'red-text')
})