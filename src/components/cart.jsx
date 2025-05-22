function Cart({ cartItems }) {

  const limitedCartItems = cartItems;

  return (
    <div className="cart">
      {limitedCartItems.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="cart-container">
          {limitedCartItems.map((item, index) => (
            <div key={index} className="card">
              <img
                src={item.image}
                alt={item.title}
                width={50}
                height={50}
              />
              <div className="card-body-type">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price}</p>
                <button className="btn btn-danger">Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;