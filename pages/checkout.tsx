import React from 'react'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { ShoppingCartListSelectors, VerifyInvBarCodeSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { HandleGetAmount, useShoppingCartList } from '@/hooks/ShoppingCart'
import { HandleAddress, useAddressInfo } from '@/hooks/AddressInfo'
import BuyNotice from '@/components/commons/BuyNotice'
import { NextPage } from 'next'
import { CheckoutReqData } from '@/types/apis/checkout'
import { useForm } from 'react-hook-form'
import { useCheckoutHandler } from '@/hooks/Checkout'
import { useTranslation } from '@/I18n'
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
    const { t } = useTranslation()
    const { AddressInfo, city, setCity, areas } = HandleAddress()
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
                    <label htmlFor="invoiceInfo.carrierCode" className="barcode-label">
                        {t('please_input_phone_barcode')} * <span> {barcodeData} </span>
                    </label>
                    <div className="checkout-custom-btn">
                        <input
                            type="text"
                            name="invoiceInfo.carrierCode"
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
                            {t('check')}
                        </button>
                    </div>
                </>
            )
        case InvoiceFromType.MemberDriver:
            return (
                <>
                    <label htmlFor="invoiceInfo.invoiceName">{t('name')} *</label>
                    <input
                        ref={register({ required: true })}
                        type="text"
                        name="invoiceInfo.invoiceName"
                        className="form-control"
                        required
                    />
                    <label htmlFor="invoiceInfo.invoiceMobile">{t('phone')} *</label>
                    <input
                        ref={register({
                            required: true,
                            maxLength: 10,
                            minLength: 10,
                        })}
                        type="text"
                        name="invoiceInfo.invoiceMobile"
                        className="form-control"
                        required
                    />
                    <label htmlFor="invoiceInfo.invoiceEmail">email *</label>
                    <input
                        ref={register({
                            required: true,
                            pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        type="text"
                        name="invoiceInfo.invoiceEmail"
                        className="form-control"
                        required
                    />
                    <div className="row">
                        <div className="col-sm-6">
                            <label htmlFor="invoiceInfo.invoiceCityCode">{t('county')} *</label>
                            <div className="select-custom">
                                <select
                                    name="invoiceInfo.invoiceCityCode"
                                    id="invoiceCityCode"
                                    className="form-control"
                                    onChange={(e) => setCity(Number(e.target.value))}
                                    value={city}
                                    ref={register({ required: true })}
                                >
                                    <option value="" selected={true}>
                                        {t('please_select_county')}
                                    </option>
                                    {AddressInfo.map((item: any, index: number) => {
                                        return (
                                            <option key={index} value={item.cityCode}>
                                                {item.cityName}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="invoiceInfo.invoiceAreaCode">{t('zone')} *</label>
                            <div className="select-custom">
                                <select
                                    name="invoiceInfo.invoiceAreaCode"
                                    id="invoiceAreaCode"
                                    className="form-control"
                                    defaultValue=""
                                    ref={register({ required: true })}
                                >
                                    <option value="" selected={true}>
                                        {t('please_select_zone')}
                                    </option>
                                    {areas.map((item: any, index: number) => {
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

                    <label htmlFor="invoiceInfo.invoiceAddress">{t('address')} *</label>
                    <input type="text" name="invoiceInfo.invoiceAddress" className="form-control" required />
                </>
            )
        case InvoiceFromType.Donate:
            return (
                <>
                    <label htmlFor="invoiceInfo.donateId">{t('donate')} *</label>
                    <div className="select-custom">
                        <select
                            name="invoiceInfo.donateId"
                            id="donate"
                            className="form-control"
                            ref={register({ required: true })}
                            defaultValue=""
                        >
                            <option value="" selected={true}>
                                {t('please_select')}
                            </option>
                            <option value="321">{t('donate_org_1')}</option>
                            <option value="531">{t('donate_org_2')}</option>
                            <option value="5959">{t('donate_org_3')}</option>
                        </select>
                    </div>
                </>
            )
        default:
            return null
    }
}

const Checkout: NextPage<any> = (): JSX.Element => {
    useBackBtnDetect()
    const { t } = useTranslation()
    const navMock = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: t('shopping_cart'),
            link: '/cart',
        },
        {
            title: t('checkout_page'),
            link: '',
        },
    ]
    useAddressInfo()
    useShoppingCartList()

    const cartArr = useSelector(ShoppingCartListSelectors.getShoppingCartItemList)
    const { finalAmount, amount } = HandleGetAmount()
    const { AddressInfo, city, setCity, areas } = HandleAddress()
    const [invoice, setInvoice] = React.useState(InvoiceFromType.PhoneBarcode)
    const [openBuyNotice, setOpenBuyNotice] = React.useState(false)
    const [isApplePay, setIsApplePay] = React.useState(false)
    const { register, handleSubmit, getValues } = useForm<CheckoutReqData>()
    const promoCode = useSelector(ShoppingCartListSelectors.getPromoCode)
    const {
        handleCheckoutSubmit,
        useSetupTabPay,
        HandleCheckoutRes,
        HandleSetupTabPayApplePay,
        handleGoogleCheckoutSubmit,
    } = useCheckoutHandler()
    const router = useRouter()
    const cartData =
        cartArr.map((item) => {
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
        }) || []
    const onSubmit = (data: any) => {
        data = { ...data, totalAmount: finalAmount, data: cartData, shippingAmount: 0 }
        if (promoCode) {
            data = {
                ...data,
                totalAmount: amount,
                promoCode,
                promoAmount: finalAmount,
            }
        }
        if (isApplePay) {
            HandleSetupTabPayApplePay(data)
            return
        }
        setIsApplePay(false)
        handleCheckoutSubmit(data, router)
    }

    const handleGoogleSubmit = (prime: any) => {
        if (prime) {
            const send = getValues(['shipInfo', 'invoiceType', 'invoiceInfo'])
            const newsend = {
                ...send,
                totalAmount: finalAmount,
                data: cartData,
                shippingAmount: 0,
                payType: 2,
                payload: prime,
            }
            handleGoogleCheckoutSubmit(newsend)
        }
    }

    useSetupTabPay(handleGoogleSubmit)
    HandleCheckoutRes(router)

    return (
        <div className="page-wrapper">
            <BuyNotice openBuyNotice={openBuyNotice} setOpenBuyNotice={setOpenBuyNotice} />
            <Header isIndex={false} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            {t('confirm_payment')}
                            <span></span>
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
                                        <h2 className="checkout-title">{t('delivery_info')}</h2>
                                        <label htmlFor="shipInfo.receiveName">{t('name')} *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            required
                                            name="shipInfo.receiveName"
                                            ref={register({ required: true })}
                                        />

                                        <label htmlFor="shipInfo.receiveMobile">{t('cellphone_number')} *</label>
                                        <input
                                            name="shipInfo.receiveMobile"
                                            type="text"
                                            className="form-control"
                                            required
                                            ref={register({ required: true, maxLength: 10, minLength: 10 })}
                                        />

                                        <label htmlFor="shipInfo.receiveEmail">{t('email')} *</label>
                                        <input
                                            name="shipInfo.receiveEmail"
                                            type="text"
                                            className="form-control"
                                            required
                                            ref={register({
                                                required: true,
                                                pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            })}
                                        />

                                        <div className="row">
                                            <div className="col-sm-6">
                                                <label htmlFor="shipInfo.receiveCityCode">
                                                    {t('receiver_county')} *
                                                </label>
                                                <div className="select-custom">
                                                    <select
                                                        ref={register({
                                                            required: true,
                                                        })}
                                                        name="shipInfo.receiveCityCode"
                                                        id="receiveCityCode"
                                                        className="form-control"
                                                        onChange={(e) => setCity(Number(e.target.value))}
                                                        value={city}
                                                    >
                                                        <option value="" selected={true}>
                                                            {t('please_select_receiver_county')}
                                                        </option>
                                                        {AddressInfo.map((item: any, index: number) => {
                                                            return (
                                                                <option key={index} value={item.cityCode}>
                                                                    {item.cityName}
                                                                </option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <label htmlFor="shipInfo.receiveAreaCode">{t('receiver_zone')} *</label>
                                                <div className="select-custom">
                                                    <select
                                                        ref={register({
                                                            required: true,
                                                        })}
                                                        name="shipInfo.receiveAreaCode"
                                                        id="receiveAreaCode"
                                                        className="form-control"
                                                        defaultValue=""
                                                    >
                                                        <option value="" selected={true}>
                                                            {t('please_select_receiver_zone')}
                                                        </option>
                                                        {areas.map((item: any, index: number) => {
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

                                        <label htmlFor="shipInfo.receiveAddress">
                                            {t('receiver_detail_address')} *
                                        </label>
                                        <input
                                            ref={register({ required: true })}
                                            type="text"
                                            name="shipInfo.receiveAddress"
                                            className="form-control"
                                            required
                                        />

                                        <label htmlFor="invoiceType">{t('receipt_type')} *</label>
                                        <div className="select-custom">
                                            <select
                                                name="invoiceType"
                                                id="invoiceType"
                                                className="form-control"
                                                onChange={(e) => setInvoice(Number(e.target.value))}
                                                ref={register({ required: true })}
                                                defaultValue={invoice}
                                            >
                                                {/* <option value="" selected={true}>
                                                    {t('please_select_receipt_type')}
                                                </option> */}
                                                <option value={InvoiceFromType.MemberDriver}>
                                                    {t('member_invoice_carrier')}
                                                </option>
                                                <option value={InvoiceFromType.PhoneBarcode}>
                                                    {t('phone_barcode')}{' '}
                                                </option>
                                                <option value={InvoiceFromType.Donate}>{t('donate')}</option>
                                            </select>
                                        </div>
                                        <InvoiceFrom type={invoice} register={register} />
                                        <label htmlFor="shipInfo.receiveMemo">{t('remark')}</label>
                                        <textarea
                                            name="shipInfo.receiveMemo"
                                            className="form-control"
                                            cols={30}
                                            rows={4}
                                            placeholder={t('write_remark_if_need')}
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
                                                    {t('read_and_agree')}
                                                    <span
                                                        className="main-color underline"
                                                        onClick={() => setOpenBuyNotice(true)}
                                                    >
                                                        {t('shopping_notice')}
                                                    </span>
                                                    {t('and_cancel_or_return_commodity')}
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <aside className="col-lg-3">
                                        <div className="summary">
                                            <h3 className="summary-title">{t('order_detail')}</h3>
                                            <ProductDetail />
                                            <input
                                                type="text"
                                                name="shipInfo.shipType"
                                                value="homeDelivery"
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
                                                                {t('credit_card_pay_off_once')}
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
                                                                <label>{t('credit_number')}</label>
                                                                <img
                                                                    className="item"
                                                                    src="/images/custom/mastercard.png"
                                                                />
                                                                <img className="item" src="/images/custom/visa.png" />
                                                                <img className="item" src="/images/custom/jcb.png" />
                                                                <img className="item" src="/images/custom/amex.png" />
                                                            </div>
                                                            <div id="card-number" className="tabpay-input"></div>
                                                            <div className="card-section-2">
                                                                <div className="credit-expires item">
                                                                    <label>{t('credit_card_expire_date')}</label>
                                                                    <div
                                                                        id="card-expiration-date"
                                                                        className="tabpay-input"
                                                                    ></div>
                                                                </div>
                                                                <div className="item">
                                                                    <label>{t('credit_card_last_three_number')}</label>
                                                                    <div id="card-ccv" className="tabpay-input"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-1">
                                                        <h2 className="card-title">
                                                            <div id="google-container">
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
                                                            </div>
                                                        </h2>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header" id="heading-1">
                                                        <h2 className="card-title">
                                                            <button type="submit" className="submit_hide">
                                                                <a
                                                                    onClick={() => setIsApplePay(true)}
                                                                    role="button"
                                                                    href="#applePay"
                                                                    data-toggle="collapse"
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
                                                            </button>
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-outline-primary-2 btn-order btn-block"
                                            >
                                                <span className="btn-text">{t('submit_order')}</span>
                                                <span className="btn-hover-text">{t('confirm_submit_order')}</span>
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
import { useRouter } from 'next/router'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'

export default Checkout
