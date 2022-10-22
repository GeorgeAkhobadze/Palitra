import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const RegisterRedirect = () => {
    navigate("/signup");
  };

  const LoginRedirect = () => {
    navigate("/login");
  };

  return (
    <header>
      <Link to="/posts" className="header-posts-btn">
        Posts
      </Link>
      <div className="header-buttons">
        <button className="header-btn" onClick={() => RegisterRedirect()}>
          Register
        </button>
        <button className="header-btn" onClick={() => LoginRedirect()}>
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;
