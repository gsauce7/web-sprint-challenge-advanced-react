import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', async () => {
  render(<CheckoutForm />);

  const firstName = screen.getByLabelText('First Name:');
  userEvent.type(firstName, 'Gabriel');

  const lastName = screen.getByLabelText('Last Name:');
  userEvent.type(lastName, 'Henton');

  const address = screen.getByLabelText('Address:');
  userEvent.type(address, '12720 SW Moreno Drive');

  const city = screen.getByLabelText('City:');
  userEvent.type(city, 'Gaston');

  const state = screen.getByLabelText('State:');
  userEvent.type(state, 'OR');

  const zip = screen.getByLabelText('Zip:');
  userEvent.type(zip, '97119');

  const button = screen.getByRole('button');
  userEvent.click(button);

  const success = screen.queryByText(/You have ordered some plants! Woo-hoo!/i);
  expect(success).toBeInTheDocument();
});
