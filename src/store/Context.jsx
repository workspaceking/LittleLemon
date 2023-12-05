import { fetchAPI } from '@app/api';
import { storage } from '@app/data';
import React, { createContext, useReducer } from 'react';
import LocalStorage from './LocalStorage';

// Step 1: Create a Context
const DataContext = createContext();
export const UPDATE_CART = 'UPDATE_CART';
export const UPDATE_CART_ITEM_QTY = 'UPDATE_CART_ITEM_QTY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

export const UPDATE_ORDERS = 'UPDATE_ORDERS';
export const UPDATE_BOOKINGS = 'UPDATE_BOOKINGS';
export const REMOVE_FROM_ORDERS = 'REMOVE_FROM_ORDERS';
export const INIT_TIME = 'INIT_TIME';
export const UPDATE_FOOD_REQUEST = 'UPDATE_FOOD_REQUEST';
export const NOTIFY = 'NOTIFY';
export const SET_AUTH = 'SET_AUTH';

/**
 *
 * @param {object} state
 * The state to be mutated
 * @param {object} action
 *  Action object with type and payload
 * @returns
 */
export const dataReducer = (state, action) => {
  const { type, payload } = action;
  let _state = state;

  switch (type) {
    case NOTIFY:
      _state = {
        ...state,
        notification: { ...state.notification, ...payload },
      };
      break;
    case UPDATE_CART:
      _state = { ...state, cart: [...state.cart, payload] };
      break;
    case UPDATE_CART_ITEM_QTY:
      _state = {
        ...state,
        cart: state.cart.map((item) =>
          item.name === payload.name
            ? { ...item, quantity: payload.quantity }
            : item,
        ),
      };
      break;
    case REMOVE_FROM_CART:
      _state = {
        ...state,
        cart: state.cart.filter(({ name }, i) => name !== payload),
      };
      break;
    case EMPTY_CART:
      _state = {
        ...state,
        cart: [],
      };
      break;
    case UPDATE_ORDERS:
      _state = { ...state, orders: [...state.orders, ...payload] };
      break;
    case UPDATE_BOOKINGS:
      _state = { ...state, bookings: [...state.bookings, payload] };
      break;
    case REMOVE_FROM_ORDERS:
      _state = {
        ...state,
        orders: state.orders.filter(({ name }, i) => name !== payload),
      };

      break;
    case INIT_TIME:
      _state = {
        ...state,
        times: [...state.times, ...fetchAPI(payload ?? new Date())],
      };
      break;
    case UPDATE_FOOD_REQUEST:
      _state = {
        ...state,
        request: {
          ...state.request,
          food: payload,
        },
      };
      break;
    case SET_AUTH:
      _state = {
        ...state,
        auth: {
          ...state.auth,
          ...payload,
        },
      };

      break;
    default:
      _state = state;
      break;
  }
  console.log('_state', _state);
  LocalStorage.set('store', JSON.stringify(_state));
  return _state;
};

// Step 3: Create a Provider
const DataProvider = ({ children }) => {
  const { cart, orders, bookings, auth } = storage;

  const [data, dispatch] = useReducer(dataReducer, {
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
    auth: {
      ...auth,
    },
  });

  const actions = {
    update: {
      auth: (payload) => {
        dispatch({ type: SET_AUTH, payload });
      },
      cart: (payload) => {
        dispatch({ type: UPDATE_CART, payload });
      },
      cartQty: (payload) => {
        dispatch({ type: UPDATE_CART_ITEM_QTY, payload });
      },
      orders: (payload) => {
        dispatch({ type: UPDATE_ORDERS, payload });
      },
      bookings: (payload) => {
        dispatch({ type: UPDATE_BOOKINGS, payload });
      },
      requestFood: (payload) => {
        dispatch({ type: UPDATE_FOOD_REQUEST, payload });
      },
    },
    remove: {
      cartItem: (payload) => {
        dispatch({ type: REMOVE_FROM_CART, payload });
      },
      cart: () => {
        dispatch({ type: EMPTY_CART, payload: '' });
      },
      orderItem: (payload) => {
        dispatch({ type: REMOVE_FROM_ORDERS, payload });
      },
    },
    initializeTimes: (payload) => {
      dispatch({ type: INIT_TIME, payload });
    },
    notify: (payload) => {
      dispatch({ type: NOTIFY, payload });
    },
  };

  return (
    <DataContext.Provider value={{ data, actions }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
