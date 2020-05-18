/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../src/app';

describe('EquipmentPOST', () => {
  it('it is possible to register equipment', async () => {
    const response = await request(app).post('/equipments').send({
      model: 'WHSJ-80',
      category: 'cartucho',
      ppm: 60,
      wifi: false,
      consumption: 70.5,
    });
    expect(response.body).toHaveProperty('model');
  });
  it('is not possible to register equipment without a model', async () => {
    const response = await request(app).post('/equipments').send({
      category: 'cartucho',
      ppm: 60,
      wifi: false,
      consumption: 70.5,
    });
    expect(response.statusCode).toEqual(400);
  });
  it('is not possible to register existing equipment', async () => {
    const response = await request(app).post('/equipments').send({
      model: 'WHSJ-80',
      category: 'cartucho',
      ppm: 60,
      wifi: false,
      consumption: 70.5,
    });
    expect(response.statusCode).toEqual(400);
  });
});
describe('EquipmentPUT', () => {
  it('do not update equipment, invalid information', async () => {
    const response = await request(app).put('/equipments/1').send({
      ppm: 150.485,
    });
    expect(response.statusCode).toEqual(400);
  });
  it('equipment does not exist to be updated', async () => {
    const response = await request(app).put('/equipments/10000').send({
      model: 'O-789',
    });
    expect(response.statusCode).toEqual(400);
  });
  it('cannot update equipment already exists', async () => {
    const response = await request(app).put('/equipments/1').send({
      model: 'WHSJ-80',
    });
    expect(response.statusCode).toEqual(400);
  });
  it('update equipment', async () => {
    const response = await request(app).put('/equipments/1').send({
      model: 'WHSJ-90',
    });
    expect(response.body).toHaveProperty('model');
  });
});
describe('EquipmentGET', () => {
  it('get equipment', async () => {
    const response = await request(app).get('/equipments').send({});
    expect(response.statusCode).toEqual(200);
  });
});
describe('EquipmentDELETE', () => {
  it('equipment does not exist to be delete', async () => {
    const response = await request(app).delete('/equipments/1000').send({});
    expect(response.statusCode).toEqual(400);
  });
  it('delete equipment', async () => {
    const response = await request(app).delete('/equipments/1').send({});
    expect(response.statusCode).toEqual(200);
  });
});
