import React from 'react';
import './Filters.scss';

interface Props {}

export default function Filters(props: Props) {
  return (
    <div className="filters d-flex flex-row flex-lg-column">
      <div className="filters__cart">
        <h4 className="filters__cart__title">CART</h4>
        <div className="filters__cart__books-list">
          
        </div>
      </div>
      <div className="filters__price-filter">
        <h4 className="filters__price-filter__title">FILTER BY PRICE</h4>
        <div>

        </div>
      </div>
      <div className="filters__categories">
        <h4 className="filters__categories">PRODUCT CATEGORIES</h4>
      </div>
    </div>
  );
}
