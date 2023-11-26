/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    spacing: {
      sm_vh: 720,
      sm_vw: 428,
      xs_vw: 375,
      sm: 6,
      base: 8,
      md: 10,
      lg: 12,
      xl: 18,
      '2xl': 24,
      '3xl': 36,
      '4xl': 48,
      '5xl': 60,
      '5.25xl': 64,
      '6xl': 72,
      '7xl': 84,
      '8xl': 96,
      '9xl': 108,
      '10xl': 120,
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    colors: {
      primary: '#495E57',
      secondary: '#F4CE14',
      surface: '#EDEFEE',
      gray: '#DDDDDD',
      dark: '#333333',
      pink: '#FE6D1A',
      pink_light: '#FBDABB',
      success: '#9ADE7B',
      danger: '#D80032',
    },
    fontSize: {
      base: 16,
      sm: 12,
      lg: 18,
      title: 64,
      subtitle: 40,
      sectiontitle: 36,
      leadtext: 18,
      specialsection: 16,
      cardtitle: 16,
      paragraph: 16,
      highlight: 16,
      '1.5xl': 24,
      '2.25xl': 36,
      '3xl': 48,
      '4xl': 64,
      '6xl': 96,
      '9xl': 144,
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['Markazi Text', 'serif'],
    },
  },
  plugins: [],
};