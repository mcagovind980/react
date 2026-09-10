import books from "../Data/LongBook1"
function LongBook()
{
    return (
<div className="container">
<div className="card">
{books.map((books)=>
    (
   <div className="item" key={books.id}>
    <img src={books.image} alt={books.title}/>
    <h3>{books.title}</h3>
<a href={books.Link}
target="_blank">
    View Pdf
</a>
</div>

))}




</div>

</div>





    )
}
export default LongBook