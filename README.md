# Sistema de Gestión de Pedidos - Backend

Este proyecto contiene una API basada en microservicios creada con NestJS. El objetivo es gestionar usuarios y pedidos en un e-commerce ficticio.

## 🛠 Tecnologías
- NestJS
- PostgreSQL
- Prisma
- RabbitMQ (mensajería)
- Docker
- Jest (pruebas unitarias)
- Swagger (documentación)

## 📦 Servicios

### 1. user-service
- Registro y autenticación de usuarios
- JWT
- Prisma + PostgreSQL

### 2. order-service
- CRUD de pedidos
- Gestión de estados
- Vinculación con usuarios

## 🚀 Instalación

```bash
git clone <repositorio>
cd project-root
docker-compose up --build
```

Accede a:
- API Usuarios: http://localhost:3000
- API Pedidos: http://localhost:3001
- Swagger: http://localhost:3000/api / http://localhost:3001/api

## 🧪 Tests

```bash
# En cada servicio
npm run test
```
