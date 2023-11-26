import '@testing-library/jest-dom';
import { describe, test } from 'vitest';
import App from './App';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './pages/BookingForm';
import { BrowserRouter } from 'react-router-dom';

const inDoc = (testId) => {
  expect(screen.getByTestId(testId)).toBeInTheDocument();
};
afterEach(() => {
  cleanup();
});
beforeEach(() => {
  render(<App />);
});
describe('App Rendering', () => {
  test('has navigation', () => inDoc('_primaryNav'));
  test('has hero', () => inDoc('_hero'));
  test('home page has top recipes section', () => inDoc('_top_recipes'));
  test('home page has about section', () => inDoc('_about'));
  test('home page has testimonials section', () => inDoc('_testimonials'));
  test('home page has footer', () => inDoc('_footer'));
});

describe('Booking Form', () => {
  test('form submitted', () => {
    const mockFunct = vi.fn();
    // Render the component with the mocked function inside BrowserRouter
    render(
      <BrowserRouter>
        <BookingForm onSubmit={mockFunct} />
      </BrowserRouter>,
    );

    // Trigger form submission
    const Form = screen.getByTestId('_bookingForm');
    fireEvent.submit(Form);

    // Check if the form submission function was called
    expect(mockFunct).toHaveBeenCalledOnce();
  });
});
