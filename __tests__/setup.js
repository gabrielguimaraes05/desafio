import chalk from 'chalk';
import Database from '../src/database';

const db = new Database();
let isConnected = false;

beforeAll(async () => {
  if (!isConnected) {
    console.log(chalk.yellow('Estabilizing database connection...'));
    await db.init();
    console.log(chalk.bgGreen.white('Database is connected'));
    isConnected = true;
  }
});
