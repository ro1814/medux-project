# medux-project
ENUNCIADO PRUEBA TÉCNICA

Se pide desarrollar una API REST, que implemente un sencillo CRUD, para ser consumida por un frontend (aplicación web) en el que se visualizarán los cambios que se realicen sobre los datos.

Requisitos:

1) Backend (API Rest)

-El backend (API Rest) tiene que estar desarrollado con Node.js.

-Total libertad en el uso de librerías/frameworks

-CRUD: al menos GET, POST, PUT y DELETE

  -No obligatorio (se valorará):
  
    -Manejo de errores
    
    -Validación de los datos
    
    -Conexión a una BBDD
    
2) Frontend

-Total libertad en el framework elegido

-Total libertad en el modelo de datos elegido para las pruebas

 -Tendrá al menos:
 
    -Un formulario para añadir datos
    -Una lista/tabla para visualizar los datos
    -Permitir editar y eliminar datos
    
-Otras cosas a valorar:

  -Bundle y compilación
  -CSS

# ¿Cómo levantar el proyecto?

Una vez el repositorio clonado y el proyecto abierto en VisualStudioCode (u otro editor de código) tiene que:

Para levantar el front:

    1)En el terminal o powerShell debe situarse en la carpeta frontend.
    2)Debe hacer el comando npm install el cual instalará las dependencias del proyecto.
    3)Una vez finalizada la instalación de las dependencias proceda a levantar el proyecto con el comando npm start
    4)Una vez el front está levantado se abre de forma automática el explorador de internet que tenga por defecto. De no hacerlo, debe acceder copiando el siguiente link: http://localhost:3000/
    5)Abra otra terminal/powerShell
    
Para levantar el backend:

    1)En el terminal o powerShell debe situarse en la carpeta backend.
    2)Debe hacer el comando npm install el cual instalará las dependencias del proyecto.
    3)Una vez finalizada la instalación de las dependencias proceda a renombrar el archivo "renameThisFileTo.env" a ".env" (este se encuentra dentro de la carpeta backend). Es importante renombrar este archivo a .env debido a que están las variables de entorno (Variables a base de datos y demás).
    4)Proceda a levantar el proyecto con el comando npm start.
