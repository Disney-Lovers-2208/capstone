import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Navbar, Nav } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRecommend } from "react-icons/md";
import { GrLogout } from "react-icons/gr";

const NavigationBar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          <Navbar expand="sm">
            <SearchBar />
            <Navbar.Brand>Name</Navbar.Brand>
            <Nav.Link as={Link} to="/home">
              <FiHome />
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <CgProfile />
            </Nav.Link>
            <Nav.Link as={Link} to="/recommendations">
              <MdOutlineRecommend />
            </Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={handleClick}>
              <GrLogout />
            </Nav.Link>
          </Navbar>
        </div>
      ) : null}
    </nav>
  </div>
);

export default NavigationBar;
