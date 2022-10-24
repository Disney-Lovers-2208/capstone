import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRecommend } from "react-icons/md";
import { GrLogout } from "react-icons/gr";

const NavigationBar = ({ handleClick, isLoggedIn }) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${fixed ? "sticky" : ""}`}>
      <nav>
        {isLoggedIn ? (
          <div>
            <Navbar>
              <Row lg={12} className="stats-row">
                <Col lg={3} sm={12}>
                  <Link to="/home">
                    <img src="/images/logo.png" style={{ width: "300px" }} />
                  </Link>
                </Col>

                <Col lg={6} sm={12} style={{ paddingTop: "1.5rem" }}>
                  <SearchBar />
                </Col>

                <Col lg={3} sm={12} className="navbar-icons">
                  <Nav.Link as={Link} to="/home">
                    <FiHome size={30} color="#03045E" />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/profile">
                    <CgProfile size={30} color="#03045E" />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/recommendations">
                    <MdOutlineRecommend size={30} color="#03045E" />
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login" onClick={handleClick}>
                    <GrLogout size={30} color="#03045E" />
                  </Nav.Link>
                </Col>
              </Row>
            </Navbar>
          </div>
        ) : (
          <Col>
            <img src="/images/logo.png" style={{ width: "300px" }} />
          </Col>
        )}
      </nav>
    </div>
  );
};

export default NavigationBar;
