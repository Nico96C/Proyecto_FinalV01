import { useState } from "react";
import { agregarProducto } from "../assets/request";

function FormProducts() {
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
    category: "",
  });

  const validarFormulario = () => {
    if (!producto.name.trim()) {
      return "El nombre es obligatorio.";
    }
    if (!producto.price || producto.price <= 0) {
      return "El precio debe ser mayor a 0.";
    }
    console.log(producto.description.trim());
    if (!producto.description.trim() || producto.description.length < 10) {
      return "La descripción debe tener al menos 10 caracteres.";
    }
    if (!producto.img.trim()) {
      return "La url de la imagen no debe estar vacía";
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const validarForm = validarFormulario();
    if (validarForm) {
      agregarProducto(producto)
        .then(() => {
          setProducto({
            name: "",
            price: "",
            description: "",
            img: "",
            category: "",
          });
        })
        .catch((error) => {
          console.error("Error al agregar el producto:", error);
          alert("Error al agregar el producto. Inténtalo de nuevo.");
        });
    } else {
      alert("Validar formulario");
    }
  };

  return (
    <form onSubmit={handleSubmit2}>
      <h2>Agregar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={producto.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>URL de la img</label>
        <input
          type="text"
          name="img"
          value={producto.img}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          value={producto.price}
          onChange={handleChange}
          required
          min="0"
        />
      </div>
      <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Category</label>
        <select
          name="category"
          value={producto.category}
          onChange={handleChange}
          required
        >
            <option value="">Selecciona una categoría</option>
            <option value="Entrante">Entrante</option>
            <option value="Principal">Principal</option>
            <option value="Postre">Postre</option>
            <option value="Bebida">Bebida</option>
        </select>
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormProducts;
