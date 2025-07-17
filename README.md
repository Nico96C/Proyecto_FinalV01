# Entrega Final - Talento Tech 25021

Esta es la entrega del proyecto final y sus respectivos objetivos.
Sera presentado como un sitio web en el que se representa un E-commerce en este caso basado en un restaurante Sevillano donde se aplican todas las opciones diferentes de un comercio dando un agregado de pedidos a domicilio como reservas online.

Continuando, los objetivos del proyecto y los que se implementaran en el mismo.

________________________________________________________

Partes a tener en cuenta.
- Home con varios apartados, manejado por el navBar (inicio, historia, menu, agenda y contacto) con su debido inicio de sesion y registro.
- Tendra apartados separados donde podras ver cada sección en detalle.
- Uso de carrito, login, sección admin y compra de productos aparte de poder reservar el servicio.
- Gestion de usuarios, reservas y pedidos con Firebase Auth ademas de Database.
- Sistema responsivo para dispositivos moviles.

# Objetivos

#### Requerimiento #1: Gestión del Carrito y Autenticación de Usuarios.

Implementar un carrito de compras funcional y restringir el acceso a secciones privadas mediante autenticación de usuarios.

```bash

# Carrito de Compras con Context API ✅
 \_ Implementado un CarritoContext que gestione los productos agregados.
  \_ Permitir agregar, eliminar y vaciar el carrito.
   \_ Mantener el estado global con Context API.

# Se implemento tanto un contexto para el carrito, como el CRUD correspondiente para su funcionamiento y que este a nivel global al estar en el Contexto.

# Autenticación de Usuarios ✅
 \_ Crear un AuthContext para manejar el estado de autenticación.
  \_ Implementar un login simulado con localStorage.
   \_ Restringir el acceso al carrito y otras secciones a usuarios autenticados con rutas protegidas.

# Tiene su propio contexto para manejar los usuarios como tambien en este caso la complementación de Firebase Auth, hago uso del guardado del UserData como tambien hay rutas protegidas si hay sesión inicia o no, hasta de administrador

```

#### Requerimiento #2: CRUD de Productos con MockAPI

Permitir la administración completa del catálogo de productos mediante operaciones de creación, lectura, actualización y eliminación.

```bash

# Formulario para Agregar Productos ✅
 \_ Implementar un formulario controlado con useState.
  \_ Validar que los campos sean correctos {Nombre obligatorio, Precio mayor a 0, Descripción mínima de 10 caracteres}
   \_ Enviar los datos a MockAPI mediante una solicitud POST.

# Formularios implementados en varios sectores del sitio web, el uso de verificacion para campos y tambien el envio de datos.

# Edición y Eliminación de Productos ✅
 \_ Permitir la edición de productos utilizando MockAPI y Context API.
  \_ Mostrar mensajes de error y confirmaciones al usuario.
   \_ Implementar un modal de confirmación antes de eliminar un producto.

# Seguimos con los ultimos manejos en MockAPI y su archivo, muestra de errores para interacción con el usuario y modal para confirma eliminación de item.

# Manejo de Errores ✅
 \_ Mostrar mensajes de error en pantalla si hay problemas con la API.
  \_ Manejar estados de carga y error al obtener los productos.

# Manejo de errores sencillo con algunas validaciones y carteles con Toastify.

```

#### Requerimiento #3: Optimización de Diseño y Responsividad

Mejorar la apariencia y la accesibilidad del sitio utilizando herramientas modernas de diseño y estilización.

```bash

# Diseño Responsivo con Bootstrap y Styled-components ✅
 \_ Implementar el sistema de grillas de Bootstrap para adaptar el contenido a distintos dispositivos.
  \_ Usar styled-components para personalizar los estilos y hacer el código más modular.

# Diseño agregado entre Bootstrap y CSS puro, control para otros dispositivos mediante @MediaQuerys.

# Interactividad Mejorada con React Icons y React Toastify ✅
 \_ Agregar iconos en botones y elementos interactivos con React Icons.
  \_ Implementar React Toastify para mostrar notificaciones de éxito y error.

#Variedad de botones con iconos y demas con diferentes metedos, Toastify utilizado para muestra de errores, información o aceptación.

# SEO y Accesibilidad con React Helmet ✅
 \_ Modificar el "title" y "meta" con React Helmet para mejorar el SEO.
  \_ Asegurar que los elementos interactivos tengan etiquetas ARIA para accesibilidad.

# SEO modificado manualmente en Index.html, Problemas con React Helmet hizo que no lo pudiera aplicar.

```

#### Requerimiento #4: Funcionalidades de Búsqueda y Paginación

Mejorar la usabilidad y navegación del catálogo de productos.

```bash

#  Barra de Búsqueda ✅
 \_ Implementar una barra de búsqueda que permita a los usuarios filtrar los productos por nombre o categoría.
  \_ Asegurar que la búsqueda sea rápida y eficiente, mostrando los resultados conforme el usuario escribe.

# Implementado barra de busqueda y filtro especial de alergenos para comidas.

# Paginador de Productos ✅
 \_ Implementar un paginador que divida los productos en varias páginas.
  \_ Asegurar que los usuarios puedan navegar entre las páginas sin problemas, mejorando la experiencia de usuario.

# Paginacion simple en pagina Home para los productos de pedidos y el moverse entre paginas.

```

#### Requerimiento #5: Preparación para el Despliegue

Ajustar los últimos detalles para que la aplicación esté lista para ser publicada en un servidor.

```bash

# Pruebas de Compatibilidad ✅
 \_ Verificar el funcionamiento en móviles, tablets y escritorios.
  \_ Revisar tiempos de carga y experiencia de usuario.

# Funcionamiento para dispositivos correctamente implementada y los tiempos de carga controlados.

# Optimización del Código ✅
 \_ Revisar el código y eliminar elementos innecesarios.
  \_ Asegurar que el estado global esté bien gestionado.

# Gestión del codigo, lo mas prolijo posible al momento se aceptan sugerencias y el estado global de variables o contextos en funcionamiento.

# Documentación Básica ✅
 \_ Incluir instrucciones en el README.md sobre instalación y uso de la aplicación.

# Readme completamente accesible y visible desde GitHub.

```