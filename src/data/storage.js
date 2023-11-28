const {
  cart: _cart,
  orders: _orders,
  bookings: _bookings,
} = JSON.parse(localStorage.getItem('store') ?? '{}');
const cart = [
  {
    name: 'Salmon Fillet',
    quantity: 3,
    price: 5.25,
  },
  {
    name: 'Greek Meatball Soup',
    quantity: 4,
    price: 7.25,
  },
  {
    name: 'Beef & Veg',
    quantity: 2,
    price: 1.25,
  },
  {
    name: 'Chicken Caesar Salad',
    quantity: 1,
    price: 8.99,
  },
  {
    name: 'Vegetarian Pizza',
    quantity: 2,
    price: 12.5,
  },
  {
    name: 'Chocolate Brownie',
    quantity: 3,
    price: 4.75,
  },
  {
    name: 'Iced Latte',
    quantity: 2,
    price: 3.5,
  },
  {
    name: 'Fruit Smoothie',
    quantity: 1,
    price: 6.75,
  },
  {
    name: 'Spaghetti Bolognese',
    quantity: 2,
    price: 9.25,
  },
  {
    name: 'Cheeseburger',
    quantity: 1,
    price: 5.99,
  },
];

const orders = [
  {
    name: 'Salmon Fillet',
    quantity: 3,
    price: 5.25,
  },
  {
    name: 'Fruit Smoothie',
    quantity: 1,
    price: 6.75,
  },
  {
    name: 'Spaghetti Bolognese',
    quantity: 2,
    price: 9.25,
  },
  {
    name: 'Cheeseburger',
    quantity: 1,
    price: 5.99,
  },
];

const bookings = [];

export default { cart, orders, bookings };
