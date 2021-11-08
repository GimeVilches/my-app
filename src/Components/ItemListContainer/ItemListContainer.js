import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";



const ItemListContainer= (props) =>{
    return(
        <div className="contenedor">
            <h1 style={{color:`${props.color}`}}>{props.greeting}</h1>
            <ItemCount inicial ="0" stock = "10" /> 
           
        </div>
    )

}
export default ItemListContainer