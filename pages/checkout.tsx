import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
// import CartItemList from '@/components/Cart/CartItemList'
import { ShoppingCartListSelectors, PromoCodeSelectors, AddressInfoSelectors, VerifyInvBarCodeSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { useAddressInfo } from '@/hooks/AddressInfo'
//import PromoCode from '@/components/Cart/PromoCode'
import { accAdd, accSubtr } from '@/utils'
//import ProductDetail from '@/components/Checkout/ProductDetail'
import BuyNotice from '@/components/commons/BuyNotice'
import { NextPage, NextPageContext } from 'next'
import cookies from 'next-cookies'
import { CheckoutReqData } from '@/types/apis/checkout'
import { useForm } from 'react-hook-form'
import { useCheckoutHandler, useSetupTabPay } from '@/hooks/Checkout'
// import { withTranslation, i18n } from '@/I18n'
enum InvoiceFromType {
    MemberDriver = 1,
    PhoneBarcode = 2,
    Donate = 3,
}

type InvoiceFromProps = {
    type: InvoiceFromType
    register: any
}

const InvoiceFrom: React.FC<InvoiceFromProps> = ({ type, register }: InvoiceFromProps) => {
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [city, setCity] = React.useState(0)
    const { handleVerifyInvBarCodeSubmit, handleReset } = useVerifyInvBarCodeHandler()
    const [barcode, setBarcode] = React.useState('')
    const handleBarcode = () => {
        handleVerifyInvBarCodeSubmit(barcode)
    }
    const barcodeData = useSelector(VerifyInvBarCodeSelectors.getVerifyInvBarCode)
    switch (type) {
        case InvoiceFromType.PhoneBarcode:
            return (
                <>
                    <label htmlFor="invoice_info.carrierCode" className="barcode-label">
                        請輸入手機條碼 * <span> {barcodeData} </span>
                    </label>
                    <div className="checkout-custom-btn">
                        <input
                            type="text"
                            name="invoice_info.carrierCode"
                            defaultValue={barcode}
                            onChange={(e) => {
                                setBarcode(e.target.value)
                                barcodeData && handleReset()
                            }}
                            className="form-control"
                            ref={register({ required: true })}
                            required
                        />
                        <button type="button" className="btn btn-outline-primary-2" onClick={() => handleBarcode()}>
                            檢查
                        </button>
                    </div>
                </>
            )
        case InvoiceFromType.MemberDriver:
            return (
                <>
                    <label htmlFor="invoiceInfo.invoiceName">姓名 *</label>
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="invoiceInfo.invoiceName"
                        className="form-control"
                        required
                    />
                    <label htmlFor="invoiceInfo.carrierCode">電話 *</label>
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="invoiceInfo.carrierCode"
                        className="form-control"
                        required
                    />
                    <label htmlFor="invoiceInfo.invoiceEmail">email *</label>
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="invoiceInfo.invoiceEmail"
                        className="form-control"
                        required
                    />
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="invoiceInfo.invoiceCityCode">縣市 *</label>
                            <div className="select-custom">
                                <select
                                    name="invoiceInfo.invoiceCityCode"
                                    id="invoiceCityCode"
                                    className="form-control"
                                    onChange={(e) => setCity(Number(e.target.value))}
                                    defaultValue=""
                                    ref={register({ required: true })}
                                >
                                    <option value="" selected={true}>
                                        請選擇縣市
                                    </option>
                                    {AddressInfo.map((item, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {item.cityName}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="invoiceInfo.invoiceAreaCode">區域 *</label>
                            <div className="select-custom">
                                <select
                                    name="invoiceInfo.invoiceAreaCode"
                                    id="invoiceAreaCode"
                                    className="form-control"
                                    defaultValue=""
                                    ref={register({ required: true })}
                                >
                                    <option value="" selected={true}>
                                        請選擇區域
                                    </option>
                                    {AddressInfo[city] &&
                                        AddressInfo[city].areas.map((item, index) => {
                                            return (
                                                <option key={`a${index}`} value={item.zipCode}>
                                                    {item.areaName}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                        </div>
                    </div>

                    <label htmlFor="invoiceInfo.carrierCode">地址 *</label>
                    <input type="text" name="invoiceInfo.carrierCode" className="form-control" required />
                </>
            )
        case InvoiceFromType.Donate:
            return (
                <>
                    <label htmlFor="invoice_info.donateId">捐贈 *</label>
                    <div className="select-custom">
                        <select
                            name="invoice_info.donateId"
                            id="donate"
                            className="form-control"
                            ref={register({ required: true })}
                            defaultValue=""
                        >
                            <option value="" selected={true}>
                                請選擇
                            </option>
                            <option value="321">財團法人中華民國唐氏症基金會</option>
                            <option value="531">財團法人董氏基金會</option>
                            <option value="5959">社團法人中華民國視障者家長協會</option>
                        </select>
                    </div>
                </>
            )
        default:
            return null
    }
}

type CheckoutProps = {
    token: string
}
const Checkout: NextPage<any> = ({ token }: CheckoutProps): JSX.Element => {
    const navMock = [
        {
            title: '首頁',
            link: '/',
        },
        {
            title: '購物車',
            link: '/cart',
        },
        {
            title: '結帳頁面',
            link: '',
        },
    ]
    useAddressInfo()
    useShoppingCartList()
    const promoData = useSelector(PromoCodeSelectors.promoCode)
    const priceArr = useSelector(ShoppingCartListSelectors.getShoppingCartPriceList)
    const discountArr = useSelector(ShoppingCartListSelectors.getShoppingCartDisCountPriceList)
    const cartArr = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const [sum, setSum] = React.useState([0])
    const [amount, setAmount] = React.useState(0)
    const [disCountamount, setDisCountamount] = React.useState(0)
    const finalAmount = promoData.name ? accSubtr(amount, disCountamount) : amount
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [invoice, setInvoice] = React.useState(InvoiceFromType.PhoneBarcode)

    const [city, setCity] = React.useState(0)
    const [openBuyNotice, setOpenBuyNotice] = React.useState(false)

    const { register, handleSubmit } = useForm<CheckoutReqData>()
    const { handleCheckoutSubmit } = useCheckoutHandler()
    const onSubmit = (data: any) => {
        const cartData = cartArr.map((item) => {
            const amount = (item?.qty || 0) * (item?.price || 0) || 0
            return {
                pid: item.pid,
                cid: item.cid,
                sizeName1: item.spec1,
                sizeName2: item.spec2,
                payInfo: {
                    qty: item.qty,
                    price: item.price,
                    amount: amount,
                },
            }
        })
        data = { ...data, totalAmount: finalAmount, data: cartData, shippingAmount: 60 }
        handleCheckoutSubmit(data)
    }

    useEffect(() => {
        setSum(priceArr)
        if (sum) {
            const num = sum.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0)
            setAmount(num)
            const disNum = discountArr.reduce(
                (accumulator, currentValue) => accAdd(Number(accumulator), Number(currentValue)),
                0,
            )
            setDisCountamount(disNum)
        }
    }, [sum, priceArr, discountArr])
    useSetupTabPay()

    return (
        <div className="page-wrapper">
            <BuyNotice openBuyNotice={openBuyNotice} setOpenBuyNotice={setOpenBuyNotice} />
            <Header isIndex={false} token={token} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            付款確認<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navMock} />
                <div className="page-content">
                    <div className="checkout">
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <h2 className="checkout-title">配送資訊</h2>
                                        <label htmlFor="shipInfo.receiveName">姓名 *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="shipInfo.receiveName"
                                            ref={register({ required: true })}
                                        />

                                        <label htmlFor="shipInfo.receiveMobile">手機號碼 *</label>
                                        <input
                                            name="shipInfo.receiveMobile"
                                            type="text"
                                            className="form-control"
                                            required
                                            ref={register({ required: true })}
                                        />

                                        <label htmlFor="shipInfo.receiveEmail">電子郵件 *</label>
                                        <input
                                            name="shipInfo.receiveEmail"
                                            type="text"
                                            className="form-control"
                                            required
                                            ref={register({ required: true })}
                                        />

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="shipInfo.receiveAreaCode">收件人縣市 *</label>
                                                <div className="select-custom">
                                                    <select
                                                        ref={register}
                                                        name="shipInfo.receiveAreaCode"
                                                        id="receiveAreaCode"
                                                        className="form-control"
                                                        defaultValue=""
                                                        onChange={(e) => setCity(Number(e.target.value))}
                                                    >
                                                        <option value="" selected={true}>
                                                            請選擇收件人縣市
                                                        </option>
                                                        {AddressInfo.map((item, index) => {
                                                            return (
                                                                <option key={index} value={index}>
                                                                    {item.cityName}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="shipInfo.receiveCityCode">收件人區域 *</label>
                                                <div className="select-custom">
                                                    <select
                                                        ref={register}
                                                        name="shipInfo.receiveCityCode"
                                                        id="receiveCityCode"
                                                        className="form-control"
                                                        defaultValue=""
                                                    >
                                                        <option value="" selected={true}>
                                                            請選擇收件人區域
                                                        </option>
                                                        {AddressInfo[city] &&
                                                            AddressInfo[city].areas.map((item, index) => {
                                                                return (
                                                                    <option key={`a${index}`} value={item.areaCode}>
                                                                        {item.areaName}
                                                                    </option>
                                                                )
                                                            })}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <label htmlFor="shipInfo.receiveAddress">收件人詳細地址 *</label>
                                        <input
                                            ref={register({ required: true })}
                                            type="text"
                                            name="shipInfo.receiveAddress"
                                            className="form-control"
                                            required
                                        />

                                        <label htmlFor="invoice_type">發票類型 *</label>
                                        <div className="select-custom">
                                            <select
                                                name="invoice_type"
                                                id="invoice_type"
                                                className="form-control"
                                                onChange={(e) => setInvoice(Number(e.target.value))}
                                                ref={register({ required: true })}
                                                defaultValue=""
                                            >
                                                <option value="" selected={true}>
                                                    請選擇發票類型
                                                </option>
                                                <option value={InvoiceFromType.MemberDriver}>會員載具</option>
                                                <option value={InvoiceFromType.PhoneBarcode}>手機條碼 </option>
                                                <option value={InvoiceFromType.Donate}>捐贈</option>
                                            </select>
                                        </div>
                                        <InvoiceFrom type={invoice} register={register} />
                                        <label htmlFor="shipInfo.receiveMemo">備註</label>
                                        <textarea
                                            name="shipInfo.receiveMemo"
                                            className="form-control"
                                            cols={30}
                                            rows={4}
                                            placeholder="如有需要，請填寫訂單備註。"
                                            ref={register}
                                        ></textarea>
                                        <div className="center">
                                            <div className="custom-control custom-checkbox ">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="checkout-diff-address"
                                                    required
                                                />
                                                <label className="custom-control-label" htmlFor="checkout-diff-address">
                                                    我已詳閱並同意
                                                    <span className="main-color" onClick={() => setOpenBuyNotice(true)}>
                                                        購物須知
                                                    </span>
                                                    及取消交易/退貨條件及方式
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <aside className="col-lg-3">
                                        <div className="summary">
                                            <h3 className="summary-title">訂單明細</h3>
                                            <ProductDetail />
                                            <input
                                                type="text"
                                                name="shipInfo.shipType"
                                                value="delivery"
                                                style={{ display: 'none' }}
                                                ref={register}
                                            />
                                            <div className="accordion-summary" id="accordion-payment">
                                                <div className="card">
                                                    <div className="card-header" id="heading-1">
                                                        <h2 className="card-title">
                                                            <a
                                                                role="button"
                                                                data-toggle="collapse"
                                                                href="#collapse-1"
                                                                aria-expanded="true"
                                                                aria-controls="collapse-1"
                                                            >
                                                                信用卡 ( 一次付清 )
                                                            </a>
                                                        </h2>
                                                    </div>
                                                    <div
                                                        id="collapse-1"
                                                        className="collapse show"
                                                        aria-labelledby="heading-1"
                                                        data-parent="#accordion-payment"
                                                    >
                                                        <div className="card-body">
                                                            <div className="card-section-1">
                                                                <label>信用卡卡號</label>
                                                                <img
                                                                    className="item"
                                                                    src="/images/custom/mastercard.png"
                                                                />
                                                                <img className="item" src="/images/custom/jcb.png" />
                                                                <img className="item" src="/images/custom/amex.png" />
                                                            </div>
                                                            <div id="card-number" className="tabpay-input"></div>
                                                            <div className="card-section-2">
                                                                <div className="credit-expires item">
                                                                    <label>到期日 (月/日)</label>
                                                                    <div
                                                                        id="card-expiration-date"
                                                                        className="tabpay-input"
                                                                    ></div>
                                                                </div>
                                                                <div className="item">
                                                                    <label>末三碼</label>
                                                                    <div id="card-ccv" className="tabpay-input"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-1">
                                                        <h2 className="card-title">
                                                            <a
                                                                role="button"
                                                                data-toggle="collapse"
                                                                href="#collapse-2"
                                                                aria-expanded="false"
                                                                aria-controls="collapse-2"
                                                                className="collapsed card-select"
                                                            >
                                                                <img
                                                                    className="card-icon"
                                                                    src="/images/custom/googlepay.png"
                                                                />
                                                                <span>Google pay</span>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-1">
                                                        <h2 className="card-title">
                                                            <a
                                                                role="button"
                                                                data-toggle="collapse"
                                                                href="#collapse-2"
                                                                aria-expanded="false"
                                                                aria-controls="collapse-2"
                                                                className="collapsed card-select"
                                                            >
                                                                <img
                                                                    className="card-icon"
                                                                    src="/images/custom/applepay.png"
                                                                />
                                                                <span>Apple Pay</span>
                                                            </a>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-outline-primary-2 btn-order btn-block"
                                            >
                                                <span className="btn-text">送出訂單</span>
                                                <span className="btn-hover-text">確認送出訂單</span>
                                            </button>
                                        </div>
                                    </aside>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

import ProductDetail from '@/components/Checkout/ProductDetail'
import { useVerifyInvBarCodeHandler } from '@/hooks/VerifyInvBarCode'
Checkout.getInitialProps = async (ctx: NextPageContext) => {
    return { token: cookies(ctx).token || '' }
}

export default Checkout
