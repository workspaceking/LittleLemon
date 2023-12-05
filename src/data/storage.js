const { cart, orders, bookings, auth } = JSON.parse(
  localStorage.getItem('store') ??
    ' {"cart":[],"orders":[],"bookings":[],"auth":{"authenticated":false,"phoneNumber":""}}',
);
const dishes = [
  {
    title: 'Spaghetti Bolognese',
    image: 'https://source.unsplash.com/360x240/?spaghetti%20bolognese%20dish',
    excerpt: 'Classic Italian pasta with rich meat sauce.',
    ratings: 4.5,
    price: 12.99,
  },
  {
    title: 'Margherita Pizza',
    image: 'https://source.unsplash.com/360x240/?pizza%20dish',
    excerpt: 'Fresh tomato, mozzarella, and basil pizza.',
    ratings: 4.8,
    price: 10.99,
  },
  {
    title: 'Grilled Salmon',
    image: 'https://source.unsplash.com/360x240/?Grilled%20Salmon%20dish',
    excerpt: 'Juicy grilled salmon with lemon and herbs.',
    ratings: 4.7,
    price: 16.99,
  },
  {
    title: 'Caesar Salad',
    image: 'https://source.unsplash.com/360x240/?Caesar%20Salad%20dish',
    excerpt: 'Fresh romaine lettuce, croutons, and parmesan.',
    ratings: 4.6,
    price: 8.99,
  },
  {
    title: 'Chicken Tikka Masala',
    image: 'https://source.unsplash.com/360x240/?Chicken%20dish',
    excerpt: 'Creamy and flavorful Indian chicken curry.',
    ratings: 4.9,
    price: 14.99,
  },
  {
    title: 'Sushi Platter',
    image: 'https://source.unsplash.com/360x240/?sushi%20platter%20dish',
    excerpt: 'Assorted sushi rolls with soy sauce and wasabi.',
    ratings: 4.7,
    price: 18.99,
  },
  {
    title: 'Vegetarian Burrito',
    image: 'https://source.unsplash.com/360x240/?Vegetarian%20Burrito%20dish',
    excerpt: 'Spicy black bean and vegetable burrito.',
    ratings: 4.4,
    price: 9.99,
  },
  {
    title: 'Caprese Sandwich',
    image: 'https://source.unsplash.com/360x240/?Caprese%20Sandwich%20dish',
    excerpt: 'Fresh mozzarella, tomatoes, and basil on ciabatta.',
    ratings: 4.6,
    price: 7.99,
  },
  {
    title: 'Beef Tacos',
    image: 'https://source.unsplash.com/360x240/?Beef%20Tacos%20dish',
    excerpt: 'Savory beef tacos with salsa and guacamole.',
    ratings: 4.8,
    price: 11.99,
  },
  {
    title: 'Chocolate Cake',
    image: 'https://source.unsplash.com/360x240/?Chocolate%20Cake%20dish',
    excerpt: 'Decadent chocolate cake with rich frosting.',
    ratings: 4.9,
    price: 6.99,
  },
  {
    title: 'Avocado Toast',
    image: 'https://source.unsplash.com/360x240/?Avocado%20Toast%20dish',
    excerpt: 'Sliced avocado on toasted whole grain bread.',
    ratings: 4.5,
    price: 9.99,
  },
  {
    title: 'Chicken Caesar Wrap',
    image:
      'https://source.unsplash.com/360x240/?Chicken%20Caesar%20Wrap%20dish',
    excerpt: 'Grilled chicken with caesar dressing in a wrap.',
    ratings: 4.7,
    price: 10.99,
  },
  {
    title: 'Chicken Caesar Wrap',
    image:
      'https://source.unsplash.com/360x240/?Chicken%20Caesar%20Wrap%20dish',
    excerpt: 'Garlic butter shrimp served over pasta.',
    ratings: 4.6,
    price: 14.99,
  },
  {
    title: 'Mango Smoothie',
    image: 'https://source.unsplash.com/360x240/?Mango%20Smoothie%20dish',
    excerpt: 'Refreshing mango smoothie with yogurt.',
    ratings: 4.5,
    price: 5.99,
  },
  {
    title: 'Vegetable Stir-Fry',
    image: 'https://source.unsplash.com/360x240/?Vegetable%20dish',
    excerpt: 'Assorted vegetables stir-fried to perfection.',
    ratings: 4.4,
    price: 12.99,
  },
  // Add more items as needed
];

export default { cart, orders, bookings, dishes, auth };
