import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget= () =>{
    return(
        <div className="carrito">
            <ShoppingCartIcon fontSize="large" />
            <p>0</p>
        
        
        </div>
    )

}
export default CartWidget
