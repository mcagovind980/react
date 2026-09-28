import books from "../Data/Home1"
import "../css/App.css";
import Loader from "../Component/Loader";
import Footer from "../Component/Footer";

function Brain()
 {
    
    return(
        <><div className="container">
    <div className="card">
{ books.map((book)=>(
    <div className="item" key={book.id}>
<img src={book.image} alt={book.title}>
</img>
<h3>{book.title}</h3>

<Link to={`${book.path}`}>
  View Pdf
</Link>
    </div>
)) }
</div>
</div>
<Loader/>
<Footer/>

</>

)
}
export default Brain