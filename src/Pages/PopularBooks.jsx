import books from "../Data/PopularBooks1"

function Popular()
{
    return(

        <>
        <div className="Container">
            <div className="card">

                {books.map((books)=>
                (
                    <div className="item" key={books.id} >
                        <h1>{books.title}</h1>
                        <img src={books.image} placeholder={books.title}/>
                        <a href={books.Link} target="_blank">View pdf</a>
                        </div>
                ))}
            </div>
        </div>
        
        
        </>
    )
}

export default Popular