import iconCart from "../../assets/icons/cart-fill.svg"

const CartWidget = () =>{

    return (
    <>

<div>
<button type="button" className="btn btn-primary position-relative ms-5 me-4">
<img src={iconCart} alt = "Carro" width={40} />
<span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">99+</span>
</button>

</div>


</>
)
}

export default CartWidget;