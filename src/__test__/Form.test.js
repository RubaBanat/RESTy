import { render } from '@testing-library/react';
import Form from '../Form';

describe('Testing the Form', () => {
  test('the button should be rendered', async () => {
    let clickHandler = jest.fn();
    let form = render(<Form clickHandler={clickHandler} />);
    let button = form.getByText(/GO!/i);
    expect(button).toBeInTheDocument();
  });
});