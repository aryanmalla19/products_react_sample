import { Link } from "react-router-dom"

export const Nav = ()=>{
    return(
        <header>
            <nav>
                <Link to={'/'} className="mx-4">Home</Link>
                <Link to={'/products'} className="mx-4">Products</Link>
            </nav>  
        </header>
    )
}