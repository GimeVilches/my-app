import { useState } from 'react';
import "./ItemCount.css"

const ItemCount= (props) =>{
    const [stock, setStock] = useState (parseInt(props.stock));

    const [contador,setContador] = useState (parseInt(props.inicial));

    const aumentar = () => {
        if (stock ===0){
            alert( "No hay mas Stock")
          
        }
        else {
            setContador (contador + 1 )
            setStock ( stock - 1 )
        }

    };
    const disminuir = () => {
        if (contador === 0){
            alert ("No hay productos en el carrito para descontar")
            

        }
        else {
            setContador ( contador - 1 )
            setStock (stock + 1 )
        }
    };
    
    const onAdd = () =>{
        if(contador === 0){
            alert("No hay unidades en el carrito para comprar")
        }
        else{
            alert (`Se han agregado ${contador} unidades al carrito `)
        }
       
    }

    return(
        
       <div className="contenedorCount">
           
       <p className="contadorInicial"> { contador } </p>
           <button className="botonCount" onClick = {disminuir}> - </button>
          <button className="botonAgregar" onClick = {onAdd}>Agregar</button>
           <button className="botonCount" onClick = {aumentar}> + </button>

       </div>
            
            
    )

}
export default ItemCount