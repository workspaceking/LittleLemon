import { fetchAPI } from '@app/api';
import { storage } from '@app/data';
import React, { createContext, useReducer } from 'react';
import LocalStorage from './LocalStorage';

// Step 1: Create a Context
const DataContext = createContext();
const UPDATE_CART = 'UPDATE_CART';
const UPDATE_ORDERS = 'UPDATE_ORDERS';
const UPDATE_BOOKINGS = 'UPDATE_BOOKINGS';
const INIT_TIME = 'INIT_TIME';

/**
 *
 * @param {object} state
 * The state to be mutated
 * @param {object} action
 *  Action object with type and payload
 * @returns
 */
const dataReducer = (state, action) => {
  const { type, payload } = action;
  LocalStorage.remove('store');
  let _state = state;

  switch (type) {
    case UPDATE_CART:
      _state = { ...state, cart: [...state.cart, payload] };
      LocalStorage.set('store', JSON.stringify(_state));
      return _state;
    case UPDATE_ORDERS:
      _state = { ...state, orders: [...state.orders, payload] };
      LocalStorage.set('store', JSON.stringify(_state));
      return _state;
    case UPDATE_BOOKINGS:
      _state = { ...state, bookings: [...state.bookings, payload] };
      console.log('_state', _state);
      LocalStorage.set('store', JSON.stringify(_state));
      return _state;
    case INIT_TIME:
      _state = {
        ...state,
        times: [...state.times, ...fetchAPI(payload ?? new Date())],
      };
      LocalStorage.set('store', JSON.stringify(_state));
    default:
      _state = state;
  }
  console.log('_state,payload', _state, payload);
  return _state;
};

// Step 3: Create a Provider
const DataProvider = ({ children }) => {
  const { cart, orders, bookings } = storage;

  const [data, dispatch] = useReducer(dataReducer, {
    cart,
    orders,
    bookings,
    times: fetchAPI(new Date()),
  });

  const actions = {
    update: {
      cart: (payload) => {
        dispatch({ type: UPDATE_CART, payload });
      },
      orders: (payload) => {
        dispatch({ type: UPDATE_ORDERS, payload });
      },
      bookings: (payload) => {
        dispatch({ type: UPDATE_BOOKINGS, payload });
      },
    },
    initializeTimes: (payload) => {
      dispatch({ type: INIT_TIME, payload });
    },
  };

  return (
    <DataContext.Provider value={{ data, actions }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
