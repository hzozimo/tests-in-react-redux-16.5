import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App'
import renderWithRedux from '../helpers/renderWithRedux'


describe('Verifica se os elementos são renderizados na tela', () => {
  test('verifica se os carros estão na tela', () => {
    renderWithRedux(<App />)
    const numberCars = screen.getAllByRole('img');
    expect(numberCars.length).toBe(3)
  })

})