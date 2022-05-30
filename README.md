# ECOMMERCE ADMIN INTERFACE REACT

Interfaz de control de productos y tiendas para adminitrador. 

## Estructura de carpetas

En la raiz se encuentran las carpetas, db con la base de datos de producto, la carpeta public donde se encuentra el index.html, en donde se inyecta toda la aplicacion, en la carpeta src esta la carpeta assets, components, context, hooks, pages, y routes.

## Tecnologias
 * [prop-type]: Version 0.0.1
 *  [axios]: Version 0.27.2
 *  [json-server]: Version 0.17.0
 *  [react-dom]: Version 18.1.0
 * [react-router-dom]: Version 6.3.0

## Instalacion 
    npm install 

## Levantar servidor
    npm run dev

### Pages

El proyecto esta conformado por :

1. Inicio .
2. Productos.
3. Tiendas. (no esta implementado)
4. Producto. (informacion editable de cada producto)
5. Error 404 page.

### Rutas

* / --- pagina de inicio
* /products --- obtiene la lista de productos
* /products/new --- agrega producto
* /products/id --- obtiene un producto por su ID