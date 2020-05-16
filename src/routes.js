import { Router } from 'express';
import equipmentController from './app/controllers/EquipmentController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ response: 'UP' });
});

routes.post('/equipments', equipmentController.store);
routes.put('/equipments/:id', equipmentController.update);
routes.delete('/equipments/:id', equipmentController.delete);
routes.get('/equipments', equipmentController.show);

export default routes;
