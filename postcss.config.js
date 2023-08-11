module.exports = {
  plugins: {
    'tailwindcss/nesting': {}, // must come before tailwindcss
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};
