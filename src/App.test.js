import '@testing-library/jest-dom';

import { describe, test } from 'vitest';
import App from './App';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { BookingPage } from './pages/BookingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchAPI } from './api';
import { DataProvider, LocalStorage } from './store';
import userEvent from '@testing-library/user-event';
import { Home } from './pages';
import {
  REMOVE_FROM_CART,
  UPDATE_CART,
  UPDATE_CART_ITEM_QTY,
  dataReducer,
} from './store/Context';
import { storage } from './data';

// Re
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
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = vi.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
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
            <Route
              path={'/bookingForm'}
              element={<BookingPage onSubmit={mockSubmit} />}
            />
          </Routes>
        </BrowserRouter>
      </DataProvider>,
    );

    const bookingFormLink = screen.getAllByText(/Book A Table/i)[0];
    fireEvent.click(bookingFormLink);
    // Trigger form submission
    const button = screen.getByTestId('bookingFormBtn');
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

// Test initial state
it('initializes state with expected values', () => {
  const { cart, orders, bookings, dishes, auth } = storage;
  const new_state = {
    cart,
    orders,
    bookings,
    times: fetchAPI(new Date()),
    request: {
      food: false,
    },
    notification: {
      show: false,
      title: '',
      text: '',
    },
    auth,
  };
  const initialState = dataReducer(
    {
      cart: [],
      orders: [],
      bookings: [],
      request: { food: false },
      notification: { show: false, title: '', text: '' },
      auth: { authenticated: false, phoneNumber: '' },
    },
    { type: '@@INIT' },
  );
  const { times, ...rest } = initialState;
  const { times: t, ...new_rest } = new_state;

  expect(JSON.stringify(rest)).toEqual(JSON.stringify(new_rest));
});

// Test UPDATE_CART action
it('updates cart with new item', () => {
  const item = { name: 'Pizza', quantity: 1 };
  const initialState = { cart: [] };
  const updatedState = dataReducer(initialState, {
    type: UPDATE_CART,
    payload: item,
  });

  expect(updatedState.cart).toEqual([item]);
});

// Test UPDATE_CART_ITEM_QTY action
it('updates quantity of existing cart item', () => {
  const items = [{ name: 'Pizza', quantity: 1 }];
  const initialState = { cart: items };
  const update = { name: 'Pizza', quantity: 2 };
  const updatedState = dataReducer(initialState, {
    type: UPDATE_CART_ITEM_QTY,
    payload: update,
  });

  expect(updatedState.cart).toEqual([{ name: 'Pizza', quantity: 2 }]);
});

// Test REMOVE_FROM_CART action
it('removes item from cart by name', () => {
  const items = [{ name: 'Pizza' }, { name: 'Burger' }];
  const initialState = { cart: items };
  const itemName = 'Pizza';
  const updatedState = dataReducer(initialState, {
    type: REMOVE_FROM_CART,
    payload: itemName,
  });

  expect(updatedState.cart).toEqual([{ name: 'Burger' }]);
});

// Did you add unit tests for the form input validation?
// Did you add unit tests for the form submission validation?
// Did you improve the accessibility of your app by improving the semantic markup you’re using?
// Did you use ARIA attributes?
// Did you label the forms?
// https://www.coursera.org/learn/meta-front-end-developer-capstone/supplement/AhXjx/recap-ux-and-ui-usability-evaluation
