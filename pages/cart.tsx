import React from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartItemList from '@/components/Cart/CartItemList'

// import { withTranslation, i18n } from '@/I18n'
const cart = (): JSX.Element => {
    const navMock = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'Shopping Cart',
            link: '',
        },
    ]
    return (
        <div className="page-wrapper">
            <Header isIndex={false} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            Shopping Cart<span>Shop</span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navMock} />
                <div className="page-content">
                    <div className="cart">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>商品名稱</th>
                                                <th>商品售價</th>
                                                <th>數量</th>
                                                <th>商品總額</th>
                                                <th>折扣後金額</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <CartItemList />
                                    </table>

                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            <form action="#">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        required
                                                        placeholder="coupon code"
                                                    />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary-2" type="submit">
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <aside className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className="summary-title">購物車明細</h3>

                                        <table className="table table-summary">
                                            <tbody>
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>$160.00</td>
                                                </tr>
                                                <tr className="summary-shipping">
                                                    <td>Shipping:</td>
                                                    <td>&nbsp;</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="free-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="free-shipping"
                                                            >
                                                                Free Shipping
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$0.00</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="standart-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="standart-shipping"
                                                            >
                                                                Standart:
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$10.00</td>
                                                </tr>

                                                <tr className="summary-shipping-row">
                                                    <td>
                                                        <div className="custom-control custom-radio">
                                                            <input
                                                                type="radio"
                                                                id="express-shipping"
                                                                name="shipping"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="express-shipping"
                                                            >
                                                                Express:
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$20.00</td>
                                                </tr>

                                                <tr className="summary-shipping-estimate">
                                                    <td>
                                                        Estimate for Your Country
                                                        <br /> <a href="dashboard.html">Change address</a>
                                                    </td>
                                                    <td>&nbsp;</td>
                                                </tr>

                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>$160.00</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <a
                                            href="checkout.html"
                                            className="btn btn-outline-primary-2 btn-order btn-block"
                                        >
                                            PROCEED TO CHECKOUT
                                        </a>
                                    </div>

                                    <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3">
                                        <span>CONTINUE SHOPPING</span>
                                        <i className="icon-refresh"></i>
                                    </a>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default cart
