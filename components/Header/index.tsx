import React, { memo } from 'react'
import ItemList from './ItemList'
// import Link from 'next/link'

const Header: React.FC = () => {
    return (
        <header className="header header-9">
            <div className="header-middle sticky-header">
                <div className="container">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <a href="index.html" className="logo">
                            <img src="/images/demos/demo-12/logo.png" alt="Molla Logo" width="82" height="25" />
                        </a>
                    </div>

                    <div className="header-right">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <ItemList />
                                <ItemList />
                                <ItemList />
                                <ItemList />
                                <ItemList />
                            </ul>
                        </nav>

                        <div className="header-search">
                            <a href="#" className="search-toggle" role="button">
                                <i className="icon-search"></i>
                            </a>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label htmlFor="q" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        name="q"
                                        id="q"
                                        placeholder="Search in..."
                                        required
                                    />
                                </div>
                            </form>
                        </div>

                        <a href="wishlist.html" className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">3</span>
                        </a>

                        <div className="dropdown cart-dropdown">
                            <a
                                href="#"
                                className="dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                data-display="static"
                            >
                                <i className="icon-shopping-cart"></i>
                                <span className="cart-count">2</span>
                                <span className="cart-txt">$ 164,00</span>
                            </a>

                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-cart-products">
                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Beige knitted elastic runner shoes</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>x $84.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="/images/products/cart/product-1.jpg" alt="product" />
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product">
                                            <i className="icon-close"></i>
                                        </a>
                                    </div>

                                    <div className="product">
                                        <div className="product-cart-details">
                                            <h4 className="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span className="cart-product-info">
                                                <span className="cart-product-qty">1</span>x $76.00
                                            </span>
                                        </div>

                                        <figure className="product-image-container">
                                            <a href="product.html" className="product-image">
                                                <img src="/images/products/cart/product-2.jpg" alt="product" />
                                            </a>
                                        </figure>
                                        <a href="#" className="btn-remove" title="Remove Product">
                                            <i className="icon-close"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className="dropdown-cart-total">
                                    <span>Total</span>

                                    <span className="cart-total-price">$160.00</span>
                                </div>

                                <div className="dropdown-cart-action">
                                    <a href="cart.html" className="btn btn-primary">
                                        View Cart
                                    </a>
                                    <a href="checkout.html" className="btn btn-outline-primary-2">
                                        <span>Checkout</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default memo(Header)
