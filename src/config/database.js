require('dotenv/config');

if (process.env.NODE_ENV === 'test') {
  process.env.BD_DATABASE = 'test';
  process.env.BD_STORAGE = './__tests__/test.sqlite';
}

module.exports = {
  database: process.env.BD_DATABASE,
  dialect: 'sqlite',
  storage: process.env.BD_STORAGE,
  define: {
    timestamps: true,
  },
};
