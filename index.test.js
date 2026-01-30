const request = require('supertest');
const app = require('./index');

describe('Pruebas del servidor Express', () => {

    test('GET / debe devolver mensaje de bienvenida', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toContain('Bienvenido al proyecto CI/CD');
    });

    test('GET /health debe devolver estado OK', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body.message).toBeDefined();
    });

    test('GET /info debe devolver información del proyecto', async () => {
        const response = await request(app).get('/info');
        expect(response.status).toBe(200);
        expect(response.body.proyecto).toBe('grupo04-cicd');
        expect(response.body.version).toBe('1.0.0');
    });

    test('GET /ruta-inexistente debe devolver 404', async () => {
        const response = await request(app).get('/ruta-inexistente');
        expect(response.status).toBe(404);
    });

});
