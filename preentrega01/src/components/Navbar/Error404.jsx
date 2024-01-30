import { Link } from "react-router-dom";

const Error404 = () =>{

return(

<>

<div className="container my-5">

<div className="row">
<div className="col text-center"> 
<h1 className="display-1">Error 404</h1>
<h3 className="display-5">La página no existe 😍</h3>



<Link to={"/"} class="btn btn-primary py-3 px-5" >Volver al inicio</Link>
</div>
</div>
</div>

</>


)



}

export default Error404;