import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartItemList from '@/components/Cart/CartItemList'
import { ShoppingCartListSelectors, PromoCodeSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import PromoCode from '@/components/Cart/PromoCode'
// import { withTranslation, i18n } from '@/I18n'
const Cart: React.FC = () => {
    const navMock = [
        {
            title: '首頁',
            link: '/',
        },
        {
            title: '購物車',
            link: '',
        },
    ]
    useShoppingCartList()
    const promoData = useSelector(PromoCodeSelectors.promoCode)
    const priceArr = useSelector(ShoppingCartListSelectors.getShoppingCartPriceList)
    const discountArr = useSelector(ShoppingCartListSelectors.getShoppingCartDisCountPriceList)
    const [sum, setSum] = React.useState([0])
    const [amount, setAmount] = React.useState(0)
    const [disCountamount, setDisCountamount] = React.useState(0)
    useEffect(() => {
        setSum(priceArr)
        if (sum) {
            const num = sum.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0)
            setAmount(num)
            const disNum = discountArr.reduce(
                (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
                0,
            )
            setDisCountamount(disNum)
        }
    }, [sum, priceArr, discountArr])
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
                            購物車<span></span>
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
                                        <CartItemList sum={sum} setSum={setSum} />
                                    </table>

                                    <div className="cart-bottom">
                                        <div className="cart-discount">
                                            <PromoCode />
                                        </div>
                                    </div>
                                </div>
                                <aside className="col-lg-3">
                                    <div className="summary summary-cart">
                                        <h3 className="summary-title">購物車明細</h3>

                                        <table className="table table-summary">
                                            <tbody>
                                                <tr className="summary-shipping">
                                                    <td>商品總額:</td>
                                                    <td>${amount}</td>
                                                </tr>
                                                {disCountamount != 0 && (
                                                    <tr className="summary-new">
                                                        <td>折扣碼優惠:</td>
                                                        <td>- ${disCountamount}</td>
                                                    </tr>
                                                )}
                                                {disCountamount != 0 && (
                                                    <tr className="summary-new">
                                                        <td
                                                            colSpan={2}
                                                            style={{ textAlign: 'left', fontSize: '1.2rem' }}
                                                        >
                                                            {promoData.name}
                                                        </td>
                                                    </tr>
                                                )}
                                                <tr className="summary-shipping">
                                                    <td>配送方式:</td>
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
                                                                一般宅配
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>$0.00</td>
                                                </tr>
                                                {/* <tr className="summary-shipping-estimate">
                                                    <td>
                                                        Estimate for Your Country
                                                        <br /> <a href="dashboard.html">Change address</a>
                                                    </td>
                                                    <td>&nbsp;</td>
                                                </tr> */}

                                                <tr className="summary-total">
                                                    <td>結帳金額:</td>
                                                    <td>${Number(sum) - disCountamount}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <a
                                            href="checkout.html"
                                            className="btn btn-outline-primary-2 btn-order btn-block"
                                        >
                                            前往結帳
                                        </a>
                                    </div>

                                    {/* <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3">
                                        <span>CONTINUE SHOPPING</span>
                                        <i className="icon-refresh"></i>
                                    </a> */}
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
export default Cart
