import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
import App from '../App';


describe('testing the App', () => {
  test('the header should be rendered', () => {
    render(<App />);
    const headerElement = screen.getByText(/RESTy/i);
    expect(headerElement).toBeInTheDocument();
  });
  test('the Footer should be rendered', () => {
    render(<App />);
    const footerElement = screen.getByText(/&copy; 2021 Ruba Banat/i);
    expect(footerElement).toBeInTheDocument();
  });
});