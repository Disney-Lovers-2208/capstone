import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Navbar , Nav } from 'react-bootstrap';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineRecommend } from 'react-icons/md';
import { GrLogout } from 'react-icons/gr';



const NavigationBar = ({ handleClick, isLoggedIn }) => (
  <div>
    {/* <h1>FS-App-Template</h1> */}
    <nav>
      {isLoggedIn ? (
        <div>
          <Navbar expand="sm">
            <SearchBar />
            <Nav.Link as={Link} to="/home"><FiHome /></Nav.Link>
            <Nav.Link as={Link} to="/profile"><CgProfile /></Nav.Link>
            <Nav.Link as={Link} to="/recommendations"><MdOutlineRecommend /></Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={handleClick}><GrLogout /></Nav.Link>
          </Navbar>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          {/* <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link> */}
        </div>
      )}
    </nav>
    <hr />
  </div>
);

export default NavigationBar;
