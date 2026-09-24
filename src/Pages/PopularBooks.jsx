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
                      
                        <img src={books.image} placeholder={books.title}/>
                        <h4>{books.title}</h4>
                        <a href={books.viewLink} target="_blank">View pdf</a>
                        </div>
                ))}
            </div>
        </div>
        
        
        </>
    )
}

export default Popular