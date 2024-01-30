import Carrousel from "./components/Navbar/Carrousel";
import Error404 from "./components/Navbar/Error404";
import ItemDetailContainer from "./components/Navbar/ItemDetailContainer";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
 
 

  return (
    <>
  <BrowserRouter>
<Navbar/>
 
  
  <Routes>
  <Route path={"/"} element={<ItemListContainer/>} />
  <Route path={"/category/:id"} element={<ItemListContainer/>} />
  <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
  <Route path={"*"} element={<Error404/>} />
 

  </Routes>
  

  </BrowserRouter>
      
      
     

    </>
  )
}

export default App
