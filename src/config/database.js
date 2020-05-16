require('dotenv/config');

module.exports = {
  database: process.env.BD_DATABASE,
  dialect: 'sqlite',
  storage: process.env.BD_STORAGE,
  define: {
    timestamps: true,
  },
};
