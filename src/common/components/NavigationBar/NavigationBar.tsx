import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import "./NavigationBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer";
import _ from "lodash";
import { Book } from "../../../models/Book";
import { Link } from "react-router-dom";
import { removeBook } from "../../../features/Cart/cartSlice";
import { searchBook } from "../../../api/bookAPI";

interface Props {}

// eslint-disable-next-line no-redeclare
export const NavigationBar = (props: Props) => {
  //Bootstrap navbar state
  const [collapsed, setCollapsed] = useState(true);

  //Navbar state
  const [isSearching, setSearching] = useState(false);
  const [isViewingCart, setViewingCart] = useState(false);

  const cart = useSelector((state: RootState) => state.cart);

  //search results
  const [dataList, setDataList] = useState<Book[]>([]);

  //dispatcher
  const dispatch = useDispatch();

  const handleCartClick = () => {
    setViewingCart(!isViewingCart);
  };

  const handleSearchClick = () => {
    setSearching(!isSearching);
    setDataList([]);
  };

  const toggleNavbar = () => setCollapsed(!collapsed);

  const search = _.debounce(async (query) => {
    const response = await searchBook(query);
    setDataList(response.data);
    console.log(response.data);
  }, 1000);

  const onSearchChange = (event: any) => {
    const queryString = event.target.value;
    search(queryString);
  };

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
              <NavLink href="/components/">
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                <Link to="/books" className="text-decoration-none">
                  BOOKS
                </Link>
              </NavLink>
            </NavItem>
            <NavItem className="d-lg-none">
              <NavLink href="/components/">
                <Link to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </NavLink>
            </NavItem>
            <NavItem
              className="position-relative mr-2 d-none d-lg-block"
              onClick={handleCartClick}
            >
              <NavLink href="#">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
              <div className="position-absolute navbar__cart-count">
                {cart.books.length}
              </div>
              <ul
                className={`${
                  isViewingCart ? "" : "d-none"
                } position-absolute navbar__cart-list p-0`}
              >
                {cart.books.map((book) => {
                  return (
                    <>
                      <Link
                        to={`/books/${book._id}`}
                        key={book.name}
                        className="text-decoration-none"
                      >
                        <li className="d-flex navbar__cart-list__item p-2 position-relative">
                          <div className="navbar__cart-list__item__img-wrapper">
                            <img
                              className="navbar__cart-list__item__img"
                              src={book.imgLink}
                              alt={book.name}
                            />
                          </div>
                          <div className="navbar__cart-list__item__detail pl-3">
                            <p className="navbar__cart-list__item__detail__name playfair font-weight-bold grey-text mb-0">
                              {book.name}
                            </p>
                          </div>
                          <div
                            className="position-absolute navbar__cart-list__item__delete-btn text-center"
                            onClick={() => {
                              dispatch(removeBook(book));
                            }}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </div>
                        </li>
                      </Link>
                    </>
                  );
                })}
                <li className="text-right p-4">
                  <p className="navbar__cart-list__subtotal font-we">
                    Subtotal: $<span>{cart.subtotal}</span>
                  </p>
                  <Link to="/cart">
                    <button className="navbar__cart-list__view-cart-btn font-weight-bold">
                      VIEW CART
                    </button>
                  </Link>
                </li>
              </ul>
            </NavItem>
            <NavItem
              className="position-relative d-none d-md-block"
              onClick={handleSearchClick}
            >
              <NavLink href="#">
                <FontAwesomeIcon icon={faSearch} />
              </NavLink>
              <ul
                className={`${
                  dataList.length ? "" : "d-none"
                } position-absolute navbar__search-result-list p-0`}
              >
                {dataList.map((book) => {
                  return (
                    <Link
                      to={`/books/${book._id}`}
                      key={book.name}
                      className="text-decoration-none"
                    >
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
                          <p className="grey-text">{book.author.name}</p>
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
                    ? "navbar__search-input--active"
                    : "navbar__search-input"
                }
                placeholder="Search"
                onChange={onSearchChange}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};
