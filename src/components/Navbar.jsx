import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
            <Link className="title" to={"/"}> C r e a t o r V e r s e</Link>
            <Link className="title" to={"/add"}>Add Creator</Link>
        </div>
    )
}