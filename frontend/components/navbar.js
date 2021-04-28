import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">GameStore</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/store">
                <a className="nav-link">Store</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/inbox">
                <a className="nav-link">Inbox</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin">
                <a className="nav-link">Manage</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
		      <li className="nav-item">
              <Link href="/help">
                <a className="nav-link">Help</a>
              </Link>
              </li>
              <li className="nav-item">
	      	<Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
              </li>
              <li className="nav-item">
		      <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
              </li>
              <li className="nav-item">
	      	<Link href="/logout">
                <a className="nav-link">Logout</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
