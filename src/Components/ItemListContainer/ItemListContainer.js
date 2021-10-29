import "./ItemListContainer.css";



const ItemListContainer= (props) =>{
    return(
        <div className="contenedor">
            <h1 style={{color:`${props.color}`}}>{props.title}</h1>
             
           
        </div>
    )

}
export default ItemListContainer