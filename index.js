const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint básico que devuelve un mensaje de texto
app.get('/', (req, res) => {
  res.status(200).send('¡Bienvenido al proyecto CI/CD del Grupo 4!');
});

// Endpoint de salud para verificar que el servidor está funcionando
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'El servidor está funcionando correctamente',
    timestamp: new Date().toISOString()
  });
});

// Endpoint de información del proyecto
app.get('/info', (req, res) => {
  res.status(200).json({
    proyecto: 'grupo04-cicd',
    version: '1.0.0',
    descripcion: 'Implementación de CI/CD con GitHub Actions'
  });
});

// Solo iniciar el servidor si no estamos en modo de prueba
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
}

// Exportar la app para pruebas
module.exports = app;
