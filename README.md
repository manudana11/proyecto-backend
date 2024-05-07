
# Projecto Back-End e-commerce

## Descripción general

En este proyecto de backend, hemos creado una robusta base de datos para un e-commerce, combinando el uso de Node.js y Express con MySQL y Sequelize. La API resultante permite a los usuarios realizar pedidos y ofrece funcionalidades completas como registro, autenticación, gestión de productos y categorías, así como la creación y seguimiento de pedidos.

## Tecnologías

Nodo.js

Expresar

MySQL con Sequelize

Bcrypt para autenticación de usuario

Fichas web JSON (JWT)

y más...

## Características

Registro de usuario con hash de contraseña segura (Bcrypt).

Inicio de sesión de usuario con autenticación basada en JWT.

Gestión de productos con operaciones CRUD.

Relaciones de muchos a muchos y de uno a muchos entre usuarios, productos, categorías y pedidos.

Verificaciones para la configuración inicial de datos en usuarios y productos.

Gestión por categorías.

Creación y seguimiento de pedidos.

Perfil de usuario con información de pedido y producto.

Cerrar sesión de usuario.

## Endpoints

El proyecto ofrece los siguientes endpoints para diversas funcionalidades, como la gestión de productos, categorías, pedidos y usuarios.

## Instalación

Para comenzar su proyecto de e-commerce, siga estos pasos de instalación:

Clona este repositorio.

Instale las dependencias requeridas usando npm install.

Configure su base de datos MySQL y configure la conexión en el proyecto.

Ejecute la aplicación con npm start.

## Modo de uso

Para utilizar la API tienes que interactuar con ella a través de solicitudes HTTP. Asegúrese de estar autenticado para realizar determinadas acciones, como crear o modificar productos y usuarios.

## Diagrama SQL

![App Screenshot](./assets/diagram-ecommerce.png)
