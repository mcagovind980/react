import Home from "../Pages/Home";
import "../css/AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-page">

      {/* Home background */}
      <div className="auth-home">
        <Home />
      </div>

      {/* Transparent layer + login card */}
      <div className="auth-overlay">
        <div className="auth-card">
          {children}
        </div>
      </div>

    </div>
  );
}

export default AuthLayout;