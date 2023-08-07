import { Link } from "react-router-dom";
const Navbar=()=>{

return(
    <>
   
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand"><span className="text-info">Grow</span>With<span className="text-info">Us</span> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        
        </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Detail">Detail</Link>
                </li> 
              </ul>
            </div>
      </div>
  </nav>


    
    </>
)
}
export default Navbar;