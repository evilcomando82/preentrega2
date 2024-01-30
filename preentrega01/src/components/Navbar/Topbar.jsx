import { Link } from "react-router-dom";

const Topbar = ()=>{


return(

<>

    <div className="container-fluid bg-dark text-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Avenida Pedro Montt 123, Valparaíso, Chile</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Lunes a Viernes : 09:00  - 19.00 hrs.</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+56 961364452</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <Link to={"/"} className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"><i className="fab fa-facebook-f"></i></Link>
                    <Link to={"/"} className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"><i className="fab fa-twitter"></i></Link>
                    <Link to={"/"} className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary"><i className="fab fa-linkedin-in"></i></Link>
                    <Link to={"/"} className="btn btn-square btn-link rounded-0"><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    </div>
 



</>

)


}

export default Topbar;