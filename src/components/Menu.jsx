import productos from "../products.json";

function Menu(){

    const arrayProductos = productos.products;

    return(
        <div className="container-products">
          {arrayProductos.map((producto) => (
            <div key={producto.id} className="cards">
              <a
                href="#!"
                tabIndex="0"
                className="btn btn-lg popover-dismiss"
                role="button"
                data-bs-placement="bottom"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                data-bs-content={producto.description}
                title={producto.title}
              >
                info
              </a>
              <img
                src={producto.thumbnail}
                alt={producto.title}
                width={100}
                height={100}
              />
              <h5>{producto.title}</h5>
              <p>{producto.description}</p>
              <p>${producto.price}</p>
              <div className="btn-space"></div>
              <button id={producto.id} className="btn-buy" onClick={addCart}>
                Agregar Pedido +
              </button>
            </div>
          ))}
        </div>
    )
}