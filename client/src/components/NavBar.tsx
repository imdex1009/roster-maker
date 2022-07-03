import { getBlobFromDataTransferItem } from "@testing-library/user-event/dist/types/utils";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div>
        <nav>
          <Link to="/">
            <div className="navLogo">roster-maker</div>
          </Link>
          <div className="navigation">
            <Link to="/home">
              <span>HOME</span>
            </Link>
            <Link to="/manage">
              <span>MANAGE</span>
            </Link>
            <Link to="/roster">
              <span>ROSTER</span>
            </Link>
            <Link to="/mypage">
              <span>MY PAGE</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
