import logo from "../assets/react.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="left">
        <img src={logo}></img>
        <h3>ReactFacts</h3>
      </div>
      <h4 className="right">React Course - Project 1</h4>
    </div>
  );
};
export default Navbar;
