// import React from "react"
import {Link} from "react-router-dom";

function Footer()
{
    return(

        <>
<div className="Footer">
 <div className="contant">
<div className="about">
<h3>Ebook Library</h3>
<p>Explore Ebook and Discover New <br/>Ideas and Enjoy reading anyWhere</p>
</div>
<div className="about">
<h3>Quiks Links</h3>
<Link to="/AllBooks">
  All Books
 </Link>   <br/>  
 <Link to="">
 Popular Book
 </Link><br/>
 <Link to="/Contact">
 Contact
 </Link><br/>

</div>
<div className="about">
<h3>Account</h3>
 <Link to="/login">
 User Login
 </Link><br/>
 <Link to="/register">
 User Sign Up
 </Link><br/>
 <Link to="/admin/login">
 Admin Login
 </Link><br/>
 <Link to="/admin/register">
 Admin Sign Up
 </Link>
</div>
<div className="about">
  <h3>📞 Contact Us</h3>

  <p>📧 Email: support@ebook.com</p>
  <p>📱 Phone: +91 XXXXX XXXXX</p>
  <p>📍 India</p>
</div>

<div className="footer-bottom">
  <p>
    © 2026 Ebook Library. All Rights Reserved.
  </p>
</div>
    </div>
    </div>
        </>
    )
}
export default Footer