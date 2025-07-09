import { useState } from "react";
import { agregarProducto } from "../assets/request";
import { useProducts } from "../contexts/ProductsContext";
import { toast } from "react-toastify";

function FormProducts() {
  const [imgError, setImgError] = useState(false);
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
    category: "",
  });
  const { reloadProducts } = useProducts();

  const validarFormulario = () => {
  if (!producto.name.trim()) {
    return "El nombre es obligatorio.";
  }
  if (!producto.img.trim()) {
    return "La url de la imagen no debe estar vacía.";
  }
  const imgRegex = /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)(\?.*)?$/i;
  if (!imgRegex.test(producto.img.trim())) {
    return "La url de la imagen debe ser una imagen válida (jpg, png, etc).";
  }
  if (imgError) {
    return "La imagen no se pudo cargar. Verifica la URL.";
  }
  if (!producto.price || isNaN(producto.price) || Number(producto.price) <= 0) {
    return "El precio debe ser mayor a 0.";
  }
  if (!producto.description.trim() || producto.description.trim().length < 10) {
    return "La descripción debe tener al menos 10 caracteres.";
  }
  if (!producto.category) {
    return "Debes seleccionar una categoría.";
  }
  return true;
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
    if (name === "img") {
      setImgError(false);
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const validarForm = validarFormulario();
  if (validarForm === true) {
    agregarProducto(producto)
      .then(() => {
        setProducto({
          name: "",
          price: "",
          description: "",
          img: "",
          category: "",
        });
        toast.success("¡Producto Agregado con éxito!");
        reloadProducts();
      })
      .catch((error) => {
        console.error("Error al agregar el producto:", error);
        toast.error("Error al agregar el producto. Inténtalo de nuevo.");
      });
  } else {
    toast.error(validarForm);
  }
};

  return (
    <>
      <div className="formProducts">
        <h1>Formulario de Productos</h1>
        <p>Agrega un nuevo producto al menú</p>
      </div>
      <div className="formProducts-addContainer">
        <form className="formAdd" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={producto.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>URL de la img</label>
            <input
              type="text"
              name="img"
              value={producto.img}
              onChange={handleChange}
              
            />
          </div>
          <div className="form-group">
            <label>Precio:</label>
            <input
              type="number"
              name="price"
              value={producto.price}
              onChange={handleChange}
              
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={producto.description}
              onChange={handleChange}
              
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={producto.category}
              onChange={handleChange}
              
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

        <div className="formExample">
          {producto.img && !imgError && (
            <img
              className="formExampleImg"
              src={producto.img}
              alt="Vista previa"
              onError={() => setImgError(true)}
              onLoad={() => setImgError(false)}
            />
          )}
          {producto.img && imgError && (
            <div className="formExampleImg2">
              Imagen no válida
            </div>
          )}
          <p className="formAdd-text">
            *Recuerda que la url de la imagen debe ser una url válida y que el precio debe ser mayor a 0.
          </p>
        </div>
      </div>
    </>
  );
}

export default FormProducts;
