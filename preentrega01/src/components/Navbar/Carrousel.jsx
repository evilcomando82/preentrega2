const Carrousel = ()=>{


return(
<>


 
    <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="src/assets/img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <h1 className="display-1 text-light mb-5 animated slideInDown">OFICINA</h1>
                                    <h3 className="display-8 alert alert-success mb-5 animated slideInDown">Descubrelos todos!!!</h3>
                                    <a href="" className="btn btn-primary py-sm-3 px-sm-5">Leer más</a>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="src/assets/img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <h1 className="display-1 text-light mb-5 animated slideInDown ">ARTE</h1>
                                    <h3 className="display-8 alert alert-danger mb-5 animated slideInDown">Inspirate con nuestros productos!!!</h3>
                                    <a href="" className="btn btn-primary py-sm-3 px-sm-5">Leer más</a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    

</>


)


}

export default Carrousel