import '@testing-library/jest-dom';

import { describe, test } from 'vitest';
import App from './App';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './pages/BookingForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchAPI } from './api';
import { DataProvider, LocalStorage } from './store';
import userEvent from '@testing-library/user-event';
import { Home } from './pages';
// setup function
function setup(jsx) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...render(jsx),
  };
}
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
  // Mock function for form submission
  const mockSubmit = () => {};

  test('form submitted', () => {
    // Render the component with the mocked function inside BrowserRouter
    render(
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route
              path={'/bookingForm'}
              element={<BookingForm onSubmit={mockSubmit} />}
            />
          </Routes>
        </BrowserRouter>
      </DataProvider>,
    );

    const bookingFormLink = screen.getAllByText(/Book A Table/i)[0];
    fireEvent.click(bookingFormLink);
    // Trigger form submission
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // Check if the form submission function was called
    expect(mockSubmit.call.length).to.equals(1);
  });
});

describe('Api Test', () => {
  test('fetchApi is working', () => {
    const time = fetchAPI(new Date());
    expect(time.length).greaterThan(1);
  });
});
describe('local storage Test', () => {
  test('can add to localstorage', () => {
    const added = LocalStorage.set('count', '10');
    expect(added).toBeTruthy;
  });
  test('can retrive from  localstorage', () => {
    const count = +LocalStorage.get('count');
    expect(count).toEqual(10);
  });
});
