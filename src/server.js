import app from './app';
import Database from './database';

new Database().init().then(() => {
  app.listen(process.env.PORT || 3535);
});
