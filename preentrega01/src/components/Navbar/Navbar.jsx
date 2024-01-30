 
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import CartWidget from "./CartWidget";
 
const Navbar = () =>{

return(
<>

 
 
    <nav className="navbar navbar-expand-lg bg-primary navbar-secondary sticky-top p-0">
        <NavLink to={"/"} className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            <h3 className="m-0"><img src={logo} alt="logo" width={40}/> Librería Colores</h3>
        </NavLink>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <NavLink to={"/"} className="nav-item nav-link">Inicio</NavLink>
                <NavLink to={"#"} className="nav-item nav-link">Nosotros</NavLink>
               
                <div className="nav-item dropdown">
                    <NavLink to={"/"} className="nav-link dropdown-toggle" data-bs-toggle="dropdown"  >Productos</NavLink>
                    <div className="dropdown-menu bg-light m-0">
                        <NavLink to={"/category/oficina"} className="dropdown-item">Oficina</NavLink>
                        <NavLink to={"/category/cuaderno"} className="dropdown-item">Cuadernos</NavLink>
                        <NavLink to={"/category/escolar"} className="dropdown-item">Escolar</NavLink>
                        <NavLink to={"/category/regalo"} className="dropdown-item">Regalos</NavLink>
                       
                    </div>
                </div>
                <NavLink to={"#"} className="nav-item nav-link ">Contacto</NavLink>
            </div>
             
            <CartWidget/>
            
        
        </div>

        

    </nav>
   

</>



)


}
export default Navbar;