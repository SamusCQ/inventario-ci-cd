const request = require('supertest');
const app = require('./app');

test('GET /inventory responde correctamente', async () => {
    const response = await request(app).get('/inventory');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
});