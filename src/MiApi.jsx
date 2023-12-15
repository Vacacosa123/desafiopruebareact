import { useEffect, useState } from "react";
import Buscador from "./Buscador";


const MiApi = () => {

    const [tienda, setTienda] = useState([])
    const [loading, setLoading] = useState(true)
  
    const getTienda = async () =>{
        try{
      const res = await fetch("https://api.escuelajs.co/api/v1/products")
      const data = await res.json();
      
      if(Array.isArray(data)){
      setTienda(data);
      data.sort(function(a, b) {
        const tituloA = a.title.toUpperCase(); 
        const tituloB = b.title.toUpperCase(); 
        if (tituloA < tituloB) {
          return -1;
        }
        if (tituloA > tituloB) {
          return 1;
        }})}
    } catch(error){
        console.log(error)
    } finally {
        setLoading(false);
    }

  
    };
    
    useEffect(() => {
      getTienda();
  
    },[])

  return (
    <div>  
      
      <Buscador tienda={tienda} setTienda={setTienda}/>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      {loading ? (
        <h2>Cargando...</h2>
        ) : ( 
          
        tienda.map(day => (
        <div className="col" key={day.id}>
          <div className="card">
          <img src={day.images? day.images : day.img} className="card-img-top" alt="..."/>
          <h2>{day.title}</h2>
        <h3>Precio: {day.price}</h3>
        <h4> {day.description}</h4></div></div>
     ))

    )}
    </div>
  </div>
  )
}

export default MiApi