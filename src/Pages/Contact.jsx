import "../css/Contact.css";

function Contact() {
  const links = [
    {
      icon: "📧",
      label: "Email",
      value: "govindkumar5267388@gmail.com",
      href: "mailto:govindkumar5267388@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "+91XXXXXXX",
      href: "tel:+91XXXXXXX",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "github.com/mcagovind980",
      href: "https://github.com/mcagovind980",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/govind-kumar-a38ba3357/",
      href: "https://www.linkedin.com/in/govind-kumar-a38ba3357/",
    },
  ];

  return (
    <div className="Contact">

      <div className="contact-card">

        <h1>Contact Me</h1>

        <p className="contact-subtitle">
          Feel free to connect with me
        </p>

        <div className="contact-list">

          {links.map((item) => (

            <div className="contact-box" key={item.label}>

              <div className="contact-icon">
                {item.icon}
              </div>

              <div className="contact-content">

                <h3>{item.label}</h3>

                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.value}
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Contact;