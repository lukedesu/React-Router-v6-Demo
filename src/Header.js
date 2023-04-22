import Auth from "./Auth";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    Auth.login(() => {
      navigate("/myprofile");
    });
  };

  const handleSignOut = () => {
    Auth.logout(() => {
      navigate("/signin");
    });
  };

  return (
    <header
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        backgroundColor: "#eee",
      }}
    >
      <Link
        style={{ fontSize: "1.6rem", color: "black", textDecoration: "none" }}
        to="/"
      >
        My App
      </Link>
      <div>
        {Auth.isAuthenticated() ? (
          <ul className="menu-list">
            <li>welcome back</li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/myprofile"}>My Profile</Link>
            </li>
            <li>
              <button type="button" onClick={handleSignOut}>
                Sign Out
              </button>
            </li>
          </ul>
        ) : (
          <ul className="menu-list">
            <li>hi guest</li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <button type="button" onClick={handleSignIn}>
                Sign In
              </button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
