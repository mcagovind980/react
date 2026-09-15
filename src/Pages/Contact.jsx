function Contact()
{
 const Link=[
"📧 Email: support@ebook.com","📱 Phone: +91 XXXXX XXXXX","GitHub","📍 India"
 ]
    return (
        <>
        <div className="Contact">
            <div className="card">
        <ul >
        { Link.map((item)=>(
         
          <li key={item}>{item}</li>
         
         ))}
        </ul>

        </div>
        </div>
        </>
    )
}

export default Contact
 
