import { Link, matchPath, useNavigate, useLocation } from "react-router-dom";
import classnames from "classnames";

import userService from "../services/user.service";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isArticlesPage = ["/articles/:id"].find(route =>
    matchPath(route, pathname)
  );

  const handleSignOut = () => {
    userService.signOut(() => {
      navigate("/signin");
    });
  };

  const isAuthenticated = userService.isAuthenticated();

  const renderNavBar = () => {
    if (isAuthenticated) {
      return (
        <ul className="list-none flex gap-4">
          <li>hi user</li>
          <li>
            <Link
              className={classnames({
                underline: pathname !== "/",
                "text-blue-600": pathname !== "/"
              })}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classnames({
                underline: pathname !== "/myprofile",
                "text-blue-600": pathname !== "/myprofile"
              })}
              to={"/myprofile"}
            >
              My Profile
            </Link>
          </li>
          <li>
            <Link
              className={classnames({
                underline: !isArticlesPage,
                "text-blue-600": !isArticlesPage
              })}
              to={"/articles/10283"}
            >
              My Articles
            </Link>
          </li>
          <li>
            <button
              className={classnames("underline", "text-blue-600")}
              type="button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </li>
        </ul>
      );
    }

    return (
      <ul className="list-none flex gap-4">
        <li>
          <Link
            className={classnames({
              underline: pathname !== "/",
              "text-blue-600": pathname !== "/"
            })}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={classnames({
              underline: pathname !== "/signin",
              "text-blue-600": pathname !== "/signin"
            })}
            to={"/signin"}
          >
            Sign In
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <header className="p-4 flex justify-between items-center bg-slate-200 border-b border-slate-300">
      <Link className="text-2xl" to="/">
        My App
      </Link>
      {renderNavBar()}
    </header>
  );
};

export default Header;
