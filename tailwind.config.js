/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: '#606c38',
        secondary: '#283618',
        tertiary: '#fefae0',
        error: '#dda15e',
        success: '#bc6c25',
        warning: '#F6AA1C',
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#474747',
        'dark-gray-3': '#666666',
        'light-gray': '#8F8F8F',
        'light-gray-2': '#CCCCCC',
        'light-gray-3': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

