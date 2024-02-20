import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="header" data-aos="fade-down">
      <div id="menu-btn" className="fas fa-bars"></div>
    <Link to="/" className="logo">
      {" "}
      APP<i className="fas fa-mug-hot"></i>{" "}
      </Link>

      {/**<nav className="navbar">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#review">review</a>
        <a href="#book">book</a>
      </nav> */}
<ul className="menus">
<li><Link to="/getUser" className="btn">GetUser</Link></li><li>
<Link to="/register" className="btn">SignUp</Link></li>
</ul>
     
    </header>
  );
};

export default NavBar;
