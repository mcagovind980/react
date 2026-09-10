import { Link } from "react-router-dom";
function Homepage({book})
    {
        return(
<div className="contianer" key={book.id}>

    <img src={book.image} alt={book.title}/>
    <h3>{book.title}</h3>
    <Link to={book.path} >
        view page   </Link>
</div>
        )
    }
export default Homepage