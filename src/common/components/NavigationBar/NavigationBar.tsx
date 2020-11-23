import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import './NavigationBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/rootReducer';

interface Props {}

// eslint-disable-next-line no-redeclare
export const NavigationBar = (props: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  const [isSearching, setSearching] = useState(false);
  const [isViewingCart, setViewingCart] = useState(false);

  const cart = useSelector((state: RootState) => state.cart.books);

  const handleCartClick = () => {
    setViewingCart(!isViewingCart);
  };

  const handleSearchClick = () => {
    setSearching(!isSearching);
  };

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Container>
      <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto playfair">
          Booky
        </NavbarBrand>
        <Collapse isOpen={!collapsed} navbar className="justify-content-end">
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem
              className="position-relative mr-2"
              onClick={handleCartClick}
            >
              <NavLink href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
              <div className="position-absolute navbar__cart-count">
                {cart.length}
              </div>
            </NavItem>
            <NavItem onClick={handleSearchClick}>
              <NavLink href="#">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
            </NavItem>
            <NavItem>
              <input
                className={
                  isSearching
                    ? 'navbar__search-input--active'
                    : 'navbar__search-input'
                }
                placeholder="Search"
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};
