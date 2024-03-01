# INSTRUCCIONES PARA INSTALAR EL API REST

## 1. Creación de la base de datos

Para crear la base de datos peliculas_db se debe ejecutar el siguiente comando:

```sh
CREATE DATABASE peliculas_db
    WITH 
    OWNER = postgres
    TEMPLATE = template0
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;
```

## 2. Configuración del API-REST

Para configurar los datos de conexión del proyecto con la Base de Datos y otros parámetros de configuración abrir el archivo .env:

```sh
PORT=3001
DB_HOST='localhost'
DB_DIALECT='postgres'
DB_BASEDEDATOS='peliculas_db'
DB_USUARIO='postgres'
DB_PASSWORD='12345678'
LLAVE_ENCRIPTACION='secretKey'
```

El archivo .env permite establecer los datos de conexión con la Base de Datos, el tipo de gestor de base de datos, el nombre y el puerto del servidor web además de la cadena de encriptación usada por jwt para la generación del token de autenticación.

## 3. Ejecución del Proyecto

Para ejecutar el proyecto desde línea de comandos ingresar a la carpeta backend_peliculas y ejecutar el siguiente comando

```sh
npm run dev
```

## 4. Generación del Token de autenticación

Haciendo uso de un cliente que consuma el servico API-REST del proyecto (Postman o similar) y usando el verbo POST abrir la siguiente URL

```sh
URL: http://localhost:3001/api/login
```

En el body mediante un objeto JSON enviar credenciales de acceso válidas similares a las siguientes:

```sh
{
    "correo": "mario@mail.com",
    "contrasena": "123"
}
```

El API responderá devolviendo un Token de Autenticación similar al siguiente:

```sh
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjo3LCJub21icmUiOiJNYXJpbyIsImNvcnJlbyI6Im1hcmlvQG1haWwuY29tIiwiY29udHJhc2VuYSI6IjEyMyIsImVzdGFkbyI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOS0xOFQwMDowMzoyMS4xODBaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0xOFQwMDowMzoyMS4xODBaIn0sImlhdCI6MTY5NTAwMzM4Mn0.y3va1V53EDaI5UasXvMB77tFXr-jshjubvXQi0_paHU"
}
```

Mismo que servirá de llave para acceder al resto de las APIs del proyecto