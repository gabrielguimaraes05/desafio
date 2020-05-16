import Sequelize from 'sequelize';

import Equipment from '../app/models/Equipment';

import databaseConfig from '../config/database';

const models = [Equipment];

class Database {
  async init() {
    this.connection = new Sequelize(databaseConfig);

    try {
      await this.connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  async close() {
    return this.connection.close();
  }
}

export default Database;
