import { useState } from "react";


const Buscador = ({tienda, setTienda}) => {
    const [buscar, setBuscar] = useState('');

    const listaAntigua = tienda
    const busqueda = (b) => { 
      if(b === ''){
        setTienda(listaAntigua);
      }else{
      const tiendaFiltrada = tienda.filter((articulo) =>
        articulo.title.toLowerCase().includes(b.toLowerCase())
      );
  
      setTienda(tiendaFiltrada);
      }
    };

  return (
    <div className="buscador">
    <h6>Buscar Producto</h6>
    <input
      type="text"
      name="again"
      className="form-control"
      onChange={(e) => {setBuscar(e.target.value); busqueda(e.target.value)}}
      value={buscar}
      placeholder="Ingresar Datos de busqueda"
    />
  </div>
  )
}

export default Buscador