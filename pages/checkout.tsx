import React, { useEffect } from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CartItemList from '@/components/Cart/CartItemList'
import { ShoppingCartListSelectors, PromoCodeSelectors, AddressInfoSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { useAddressInfo } from '@/hooks/AddressInfo'
import PromoCode from '@/components/Cart/PromoCode'
import { accAdd, accSubtr } from '@/utils'
import ProductDetail from '@/components/Checkout/ProductDetail'
import BuyNotice from '@/components/commons/BuyNotice'
import { NextPage, NextPageContext } from 'next'
const SubmitTabPay = dynamic(() => import('@/components/Checkout/SubmitTabPay'), {
    ssr: false,
})
// import { withTranslation, i18n } from '@/I18n'
enum InvoiceFromType {
    MemberDriver = 1,
    PhoneBarcode = 2,
    Donate = 3,
}

type InvoiceFromProps = {
    type: InvoiceFromType
}

const InvoiceFrom: React.FC<InvoiceFromProps> = ({ type }: InvoiceFromProps) => {
    switch (type) {
        case InvoiceFromType.PhoneBarcode:
            return (
                <>
                    <label>請輸入手機條碼 *</label>
                    <div className="checkout-custom-btn">
                        <input type="text" className="form-control" required />
                        <button type="button" className="btn btn-outline-primary-2">
                            檢查
                        </button>
                    </div>
                </>
            )
        case InvoiceFromType.MemberDriver:
            return (
                <>
                    <label>姓名 *</label>
                    <input type="text" className="form-control" required />
                    <label>電話 *</label>
                    <input type="text" className="form-control" required />
                    <label>email *</label>
                    <input type="text" className="form-control" required />
                    <label>地址 *</label>
                    <input type="text" className="form-control" required />
                </>
            )
        case InvoiceFromType.Donate:
            return (
                <>
                    <label htmlFor="donate">捐贈 *</label>
                    <div className="select-custom">
                        <select name="donate" id="donate" className="form-control">
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
    const [sum, setSum] = React.useState([0])
    const [amount, setAmount] = React.useState(0)
    const [disCountamount, setDisCountamount] = React.useState(0)
    const finalAmount = promoData.name ? accSubtr(amount, disCountamount) : amount
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [invoice, setInvoice] = React.useState(InvoiceFromType.PhoneBarcode)
    console.log('AddressInfo :>> ', AddressInfo)

    const [city, setCity] = React.useState(0)

    const [openBuyNotice, setOpenBuyNotice] = React.useState(false)

    const { register, handleSubmit } = useForm<CheckoutReqData>()
    const { handleCheckoutSubmit } = useCheckoutHandler()
    const onSubmit = (data: any) => {
        console.log('dataAAAA :>> ', data)
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
                                        <label>姓名 *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="name"
                                            ref={register({ required: true })}
                                        />

                                        <label>手機號碼 *</label>
                                        <input type="text" className="form-control" required />

                                        <label>電子郵件 *</label>
                                        <input type="text" className="form-control" required />

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="size">收件人縣市 *</label>
                                                <div className="select-custom">
                                                    <select
                                                        name="size"
                                                        id="size"
                                                        className="form-control"
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
                                                <label htmlFor="size">收件人區域 *</label>
                                                <div className="select-custom">
                                                    <select name="size" id="size" className="form-control">
                                                        <option value="" selected={true}>
                                                            請選擇收件人區域
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

                                        <label>收件人詳細地址 *</label>
                                        <input type="text" className="form-control" required />

                                        <label htmlFor="size">發票類型 *</label>
                                        <div className="select-custom">
                                            <select
                                                name="invoice"
                                                id="invoice"
                                                className="form-control"
                                                onChange={(e) => setInvoice(Number(e.target.value))}
                                            >
                                                <option value="" selected={true}>
                                                    請選擇發票類型
                                                </option>
                                                <option value={InvoiceFromType.MemberDriver}>會員載具</option>
                                                <option value={InvoiceFromType.PhoneBarcode}>手機條碼 </option>
                                                <option value={InvoiceFromType.Donate}>捐贈</option>
                                            </select>
                                        </div>
                                        <InvoiceFrom type={invoice} />
                                        <label>備註</label>
                                        <textarea
                                            className="form-control"
                                            cols={30}
                                            rows={4}
                                            placeholder="如有需要，請填寫訂單備註。"
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
                                    <SubmitTabPay />
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
import cookies from 'next-cookies'
import { CheckoutReqData } from '@/types/apis/checkout'
import { useForm } from 'react-hook-form'
import { useCheckoutHandler } from '@/hooks/Checkout'
import dynamic from 'next/dynamic'
Checkout.getInitialProps = async (ctx: NextPageContext) => {
    return { token: cookies(ctx).token || '' }
}

export default Checkout
