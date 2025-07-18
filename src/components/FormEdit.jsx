import { useEffect, useState } from "react";
import { editarProducto, todosLosProductos } from "../assets/request";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import { toast } from "react-toastify";

function FormEdit() {
  const { id } = useParams();
  const [productsEncontrado, setproductsEncontrado] = useState([]);
  const { reloadProducts } = useProducts();

  const Productos = todosLosProductos();

  /* Lista de alérgenos */
  const ALERGENOS = [
    "Contiene gluten",
    "Crustáceos",
    "Huevos",
    "Pescado",
    "Cacahuetes",
    "Soja",
    "Lácteos",
    "Frutos de cáscara",
    "Apio",
    "Mostaza",
    "Granos de sésamo",
    "Dióxido de azufre y sulfitos",
    "Moluscos",
    "Altramuces",
    "Sin alérgenos",
  ];

  useEffect(() => {
    if (Productos) {
      Productos.then((data) => {
        const producto = data.find((item) => item.id === id);
        if (producto) {
          setproductsEncontrado({
            id: producto.id,
            name: producto.name,
            price: producto.price,
            description: producto.description,
            img: producto.img,
            category: producto.category,
            alergeno: producto.alergeno || [],
          });
        } else {
          console.error("Producto no encontrado");
        }
      }).catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
    }
  }, []);

  const validarFormulario = () => {
    if (!productsEncontrado.name.trim()) {
      return "El nombre es obligatorio.";
    }
    if (!productsEncontrado.price || productsEncontrado.price <= 0) {
      return "El precio debe ser mayor a 0.";
    }
    console.log(productsEncontrado.description.trim());
    if (
      !productsEncontrado.description.trim() ||
      productsEncontrado.description.length < 10
    ) {
      return "La descripción debe tener al menos 10 caracteres.";
    }
    if (!productsEncontrado.img.trim()) {
      return "La url de la imagen no debe estar vacía";
    } else {
      return true;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductsEncontrado({ ...productsEncontrado, [name]: value });
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (!productsEncontrado.id) {
      toast.error("No se encontró el ID del producto.");
      return;
    }
    const validarForm = validarFormulario();
    if (validarForm === true) {
      editarProducto(productsEncontrado.id, productsEncontrado)
        .then(() => {
          toast.success("¡Producto Modificado con exito!");
          reloadProducts();
        })
        .catch((error) => {
          toast.error("Error al modificar el producto!");
        });
    } else {
      alert("Validar formulario");
    }
  };

  return (
    <div className="form-edit-container">
      <form className="form-edit" onSubmit={handleSubmit2}>
        <h2>Editar Producto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={productsEncontrado.name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>URL de la img:</label>
          <input
            type="text"
            name="img"
            value={productsEncontrado.img || ""}
            onChange={handleChange}
            required
          />
          <img
            className="img-edit-form"
            src={productsEncontrado.img}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={productsEncontrado.price || ""}
            onChange={handleChange}
            required
            min="0"
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={productsEncontrado.description || ""}
            onChange={handleChange}
            required
          />
        </div>
        <section>
          <label>Alérgenos:</label>
          <div className="alergenos-list">
            {ALERGENOS.map((nombre, idx) => (
              <label key={nombre} className="alergeno-item">
                <input
                  type="checkbox"
                  name="alergeno"
                  value={nombre}
                  checked={productsEncontrado.alergeno?.includes(nombre)}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setproductsEncontrado((prev) => {
                      let nuevosAlergenos = prev.alergeno || [];
                      if (checked) {
                        nuevosAlergenos = [...nuevosAlergenos, nombre];
                      } else {
                        nuevosAlergenos = nuevosAlergenos.filter((a) => a !== nombre);
                      }
                      return { ...prev, alergeno: nuevosAlergenos };
                    });
                  }}
                />
                {nombre}
              </label>
            ))}
          </div>
        </section>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={productsEncontrado.category || ""}
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
        <button className="default-btn" type="submit">Modificar Producto</button>
      </form>
    </div>
  );
}

export default FormEdit;
