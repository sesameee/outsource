import React from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartItemList from '@/components/Cart/CartItemList'
import { ShoppingCartListSelectors, UserLoginSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { HandleGetAmount, useShoppingCartList } from '@/hooks/ShoppingCart'
import PromoCode from '@/components/Cart/PromoCode'
import Link from 'next/link'
import { useTranslation } from '@/I18n'
import { NextPage } from 'next'
import { UseLoginDialog } from '@/hooks/LoginDialog'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'

const Cart: NextPage<any> = (): JSX.Element => {
    useBackBtnDetect()
    const { t } = useTranslation()
    const navMock = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: t('shopping_cart'),
            link: '',
        },
    ]
    useShoppingCartList()
    const promoCodeName = useSelector(ShoppingCartListSelectors.getPromoCodeName)
    const { finalAmount, disCountamount, amount, sum, setSum } = HandleGetAmount()
    const getUser = useSelector(UserLoginSelectors.getUserLoginData)
    const { setIsOpenMember } = UseLoginDialog()
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
                            {t('shopping_cart')}
                            <span></span>
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
                                                <th>{t('commodity_name')}</th>
                                                <th>{t('commodity_price_2')}</th>
                                                <th>{t('amount')}</th>
                                                <th>{t('commodity_amount')}</th>
                                                <th>{t('after_discount_price')}</th>
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
                                        <h3 className="summary-title">{t('cart_detail')}</h3>

                                        <table className="table table-summary">
                                            <tbody>
                                                <tr className="summary-shipping">
                                                    <td>{t('commodity_amount')}:</td>
                                                    <td>${amount}</td>
                                                </tr>
                                                {disCountamount != 0 && (
                                                    <tr className="summary-new">
                                                        <td>{t('promo_code_discount')}:</td>
                                                        <td>- ${disCountamount}</td>
                                                    </tr>
                                                )}
                                                {promoCodeName && (
                                                    <tr className="summary-new">
                                                        <td
                                                            colSpan={2}
                                                            style={{ textAlign: 'left', fontSize: '1.2rem' }}
                                                        >
                                                            {promoCodeName}
                                                        </td>
                                                    </tr>
                                                )}
                                                <tr className="summary-shipping">
                                                    <td>{t('delivery_type_text_only')}:</td>
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
                                                                checked={true}
                                                                onChange={() => {
                                                                    return true
                                                                }}
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="free-shipping"
                                                            >
                                                                {t('home_delivery')}
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
                                                    <td>{t('checkout_price')}:</td>
                                                    <td>${finalAmount}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {!getUser.accessToken ? (
                                            <a
                                                onClick={() => setIsOpenMember(true)}
                                                className="btn btn-outline-primary-2 btn-order btn-block"
                                            >
                                                {t('go_to_checkout')}
                                            </a>
                                        ) : (
                                            <Link href="/checkout">
                                                <a className="btn btn-outline-primary-2 btn-order btn-block">
                                                    {t('go_to_checkout')}
                                                </a>
                                            </Link>
                                        )}
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
