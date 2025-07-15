import Logo from "/imgs/Logo.png";

function HeadTop() {

  return (
    <div className="container">
      <div className="fullscreen-container"></div>

      <div></div>
      <div className="logo-center">
        <img src={Logo} alt="Logo-Restaurant" className="logo-img" />
      </div>
      <div className="scroll-down">
        <h5 className="scroll-down-text">Desliza hacia abajo</h5>
      </div>
    </div>
  );
}

export default HeadTop;
