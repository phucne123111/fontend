import { Link } from "react-router-dom";



function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top nsvj ">
        <div className="container-fluid">
          <img
            src="https://i.gifer.com/RrVB.gif" width="90vh="
            style={{
              marginTop: "10px",
              marginBottom: "10px",
              marginRight: "20px"
            }}
          />


          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-12 col-sm-6 collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nv navbar-nav justify-content-center">              
              <li className="lnv nav-item">
                <Link to="/" className="lnv" style={{ textDecoration: "none", fontSize: "20px" }}>Home</Link>
              </li>
              <li className="lnv nav-item">
                <Link to="/about" className="lnv" style={{ textDecoration: "none", fontSize: "20px" }}>About</Link>
              </li>
              <li className="lnv nav-item">
                <Link to="/login" className="lnv" style={{ textDecoration: "none", fontSize: "20px" }}>Login</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;



