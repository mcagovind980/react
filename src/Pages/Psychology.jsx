import books from "../Data/Psychology1"
function psychology()
{
    return (
        <div className="container">
        <div className="card">
            {books.map((book)=>
            (
               <div className="item" key={book.id}>
            <img src={book.image} alt={book.title}/>
            <h3>{book.title}</h3>
             <a href={book.viewLink} target="_blank" >
                view Pdf
             </a>
             </div> 
            ))}
            </div></div>
    )
}
export default psychology
