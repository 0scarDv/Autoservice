# React + Vite
# 🛒 Autosevicio - Sistema de Gestión de Inventario y Ventas

**Autoservicio** es una aplicación web que permite registrar productos, gestionar el stock y registrar ventas. Está desarrollada con **React**, **Node.js (express)**, **Tailwind CSS** y usa **MongoDB** como base de datos NoSQL.

---

## 📦 Funcionalidades

- ✅ Registrar nuevos productos
- 📝 Editar y eliminar productos
- 📊 Visualizar lista de productos y su stock
- 🛍️ Registrar ventas (y disminuir stock automáticamente)
- 🔒 Conexión segura con MongoDB
- ⚙️ API RESTful para operaciones CRUD

---

## 🧪 Tecnologías utilizadas

| Frontend       | Backend       | Base de datos |
|----------------|---------------|----------------|
| React          | Node.js       | MongoDB        |
| Tailwind CSS   | Express        | Mongoose       |
| Axios          | dotenv         |                |

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar el repositorio

git clone https://github.com/0scarDv/Autoservice.git
cd autoservicio

### 2. Instalar dependencias
npm install


### 3. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
MONGO_URI=mongodb://localhost:27017/autoservicio
PORT=5000
### 4. Ejecutar la aplicación
Ejecular el cliente:
npm run start 
###
Ejecular el servidor:
npm run dev 