import { getBlobFromDataTransferItem } from "@testing-library/user-event/dist/types/utils";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div>
        <h1>NavBar</h1>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
