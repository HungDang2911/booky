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
import _ from 'lodash';
import { searchItem } from '../../../api/searchAPI';
import { Book } from '../../../models/Book';
import { Link } from 'react-router-dom';

interface Props {}

// eslint-disable-next-line no-redeclare
export const NavigationBar = (props: Props) => {
  const mockBook: Book = {
    _id: '5f9d90741445af2e1c3c5aa8',
    imgLink:
      'https://images-na.ssl-images-amazon.com/images/I/41DXJAP4E5L._SX290_BO1,204,203,200_.jpg',
    name: 'Men are from Mars, women are from Venus',
    price: 0,
    author: 'Dale Carnegie',
    rating: 5.0,
    reviews: 0,
  };

  const [collapsed, setCollapsed] = useState(true);

  const [isSearching, setSearching] = useState(false);
  const [isViewingCart, setViewingCart] = useState(false);

  const cart = useSelector((state: RootState) => state.cart.books);

  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState({});
  const [dataList, setDataList] = useState<Book[]>([
    mockBook
  ]);

  // const search = _.debounce(sendQuery, 300);

  const handleCartClick = () => {
    setViewingCart(!isViewingCart);
  };

  const handleSearchClick = () => {
    setSearching(!isSearching);
  };

  const toggleNavbar = () => setCollapsed(!collapsed);

  // const onChange = ({ target: { value } }) => {
  //   setQuery(value);

  //   const search = _.debounce(sendQuery, 300);

  //   setSearchQuery(prevSearch => {
  //     if (prevSearch.cancel) {
  //       prevSearch.cancel();
  //     }
  //     return search;
  //   });

  //   search(value);
  // };

  /**
   * In charge to send the value
   * to the API.
   * @param {*} value
   */
  // const sendQuery = async (value: any) => {
  //   const { cancelPrevQuery, result } = await searchItem(value);

  //   if (cancelPrevQuery) return;
  // };

  return (
    <Container>
      <Navbar color="faded" light expand="md">
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Link to="/">
          <NavbarBrand className="mr-auto playfair">Booky</NavbarBrand>
        </Link>
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
            <NavItem className="position-relative" onClick={handleSearchClick}>
              <NavLink href="#">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
              <ul
                className={`${
                  isSearching ? '' : 'd-none'
                } position-absolute navbar__search-result-list p-0`}
              >
                {dataList.map((book) => {
                  return (
                    <Link to={`/books/${book._id}`} key={book.name} className="text-decoration-none">
                      <li className="d-flex navbar__search-result-list__item p-2">
                        <div className="navbar__search-result-list__item__img-wrapper">
                          <img
                            className="navbar__search-result-list__item__img"
                            src={book.imgLink}
                            alt={book.name}
                          />
                        </div>
                        <div className="navbar__search-result-list__item__detail pl-3">
                          <p className="navbar__search-result-list__item__detail__name mb-0">
                            {book.name}
                          </p>
                          <p>{book.author}</p>
                        </div>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </NavItem>
            <NavItem className="position-relative">
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
