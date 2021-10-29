import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";


const NavBar= () =>{
    return(
        <nav className = "navBar">
           
            <div className = "itemNav">
            
                <ul>
               
                <h1>
                Techno Stuff         
                </h1>
                
                    <li>
                        <a href= "">Productos</a>
                    
                    </li>
					
				    <li>
                    <a href= "">Accesorios</a>
                    </li>
					<li>
                    <a href= "">Contacto</a>
                    </li>
					<CartWidget />
                </ul>
            
                
            </div>
            
              
            
        </nav>
    )

}
export default NavBar