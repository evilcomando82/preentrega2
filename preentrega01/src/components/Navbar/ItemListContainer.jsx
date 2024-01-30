import { useState , useEffect} from "react";
 
import arrayProductos from "../json/productos.json";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import Topbar from "./Topbar";
 

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams(); //hamburguesas
    

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000);
        })
        promesa.then(data => {
            setItems(data);
         //   console.log(data);
        })
    }, [id]);

    return (
        <>
        {id ? "" : <Carrousel/> }
        <Topbar/>
        <ItemList items={items} />
    
           
        </>
    )
}

export default ItemListContainer;