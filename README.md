# Proyecto CI/CD - Grupo 4

## 📋 Descripción

Implementación completa de un flujo de CI/CD (Integración Continua y Despliegue Continuo) utilizando GitHub Actions para un proyecto Node.js con Express.

## 🚀 Características

- **Servidor Express**: API REST con endpoints básicos
- **Pruebas Automatizadas**: Suite de pruebas con Jest y Supertest
- **Integración Continua**: Workflow de CI que se ejecuta en cada push/PR a main
- **Despliegue Continuo**: Workflow de CD que simula el despliegue automático

## 📦 Endpoints Disponibles

- `GET /` - Mensaje de bienvenida
- `GET /health` - Estado del servidor
- `GET /info` - Información del proyecto

## 🛠️ Tecnologías

- **Runtime**: Node.js 18
- **Framework**: Express.js
- **Testing**: Jest + Supertest
- **CI/CD**: GitHub Actions

## 📝 Scripts Disponibles

```bash
# Instalar dependencias
npm install

# Ejecutar el servidor
npm start

# Ejecutar pruebas
npm test
```

## 🔄 Flujo de Trabajo CI/CD

### Integración Continua (CI)
El workflow de CI se ejecuta automáticamente cuando:
- Se hace push a la rama `main`
- Se crea un Pull Request hacia `main`

**Pasos del CI:**
1. Checkout del código
2. Configuración de Node.js 18
3. Instalación de dependencias
4. Ejecución de pruebas
5. Verificación de sintaxis

### Despliegue Continuo (CD)
El workflow de CD se ejecuta automáticamente cuando:
- Se hace push a la rama `main`

**Pasos del CD:**
1. Checkout del código
2. Configuración de Node.js 18
3. Instalación de dependencias
4. Preparación de la aplicación
5. Verificación de la aplicación
6. Simulación del despliegue
7. Notificación de estado

## 📊 Estado de los Workflows

Los workflows se pueden visualizar en la pestaña **Actions** del repositorio de GitHub.

## 🌿 Estrategia de Ramas

- `main`: Rama principal de producción
- `develop`: Rama de desarrollo

**Flujo de trabajo:**
1. Desarrollar en la rama `develop`
2. Crear Pull Request hacia `main`
3. El CI se ejecuta automáticamente
4. Una vez aprobado, hacer merge a `main`
5. El CD se ejecuta automáticamente

## 👥 Autores

Grupo 4

## 📄 Licencia

MIT