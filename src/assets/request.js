/* eslint-disable no-async-promise-executor */

export const todosLosProductos = () => {
  return new Promise((resolve, reject) => {
    try {
      fetch("https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos")
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        });
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });
};

export const agregarProducto = (producto) => {
  return new Promise(async (resolve, reject) => {
    try {
      const respuesta = await fetch(
        "https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al agregar el producto.");
      }
      const data = await respuesta.json();
      console.log("Producto agregado:", data);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });
};

export const obtenerProducto = (id) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos`)
        .then((res) => res.json())
        .then((data) => {
          const producto = data.find((item) => item.id === id);
          if (!producto) {
            throw new Error("Producto no encontrado.");
          }
          console.log("Producto obtenido:", producto);
          resolve(producto);
        });
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });
};

export const eliminarProducto = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const respuesta = await fetch(
        `https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al eliminar el producto.");
      }
      const data = await respuesta.json();
      console.log("Producto eliminado:", data);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });
};

export const editarProducto = (id, producto) => {
  return new Promise(async (resolve, reject) => {
    try {
      const respuesta = await fetch(
        `https://682219c0b342dce8004d1dd0.mockapi.io/SevApi/productos/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(producto),
        }
      );

      if (!respuesta.ok) {
        throw new Error("Error al editar el producto.");
      }
      const data = await respuesta.json();
      console.log("Producto editado:", data);
      resolve(data);
    } catch (error) {
      console.error(error.message);
      reject(error);
    }
  });
};
