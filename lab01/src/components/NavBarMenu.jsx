import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavBarMenu({ items }) {
  return (
    <Nav>
      {items.map(item => (
        <LinkContainer to={item.url} key={item.id}>
          <Nav.Link>{item.label}</Nav.Link>
        </LinkContainer>
      ))}
    </Nav>
  )};

  export default NavBarMenu;