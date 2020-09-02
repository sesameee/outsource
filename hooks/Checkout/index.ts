import { useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckoutActions, CheckoutSelectors } from '@/store'

import { TPDirect } from '@/types/Common'
declare let window: TPDirect

const TAP_PAY_ID = 17392
//17392
const TAP_PAY_CODE = 'app_EhsidB2Vrsj5UW6kcHLLSCUHIsnFchacqlURBDl5c8jcV3GEGwAqvRNf5vgM'
//app_EhsidB2Vrsj5UW6kcHLLSCUHIsnFchacqlURBDl5c8jcV3GEGwAqvRNf5vgM
export const useCheckoutHandler = (): any => {
    const dispatch = useDispatch()

    const handleCheckoutSubmit = useCallback(
        (data: any) => {
            const tappayStatus = window.TPDirect.card.getTappayFieldsStatus()
            // 確認是否可以 getPrime
            if (tappayStatus.canGetPrime === false) {
                alert('請輸入信用卡資訊')
                return
            }
            // Get prime
            window.TPDirect.card.getPrime((result: any) => {
                if (result.status !== 0) {
                    alert('信用卡資訊有誤 ' + result.msg)
                    return
                }

                const sendData = { ...data, payType: 2, payload: result }
                dispatch(CheckoutActions.fetchCheckout(sendData))
            })
        },
        [dispatch],
    )

    const handleGoogleCheckoutSubmit = useCallback(
        (sendData: any) => {
            dispatch(CheckoutActions.fetchCheckout(sendData))
        },
        [dispatch],
    )
    const [isSet, setIsSet] = useState(false)
    const useSetupTabPay = (handleGoogleSubmit: any): void => {
        useEffect(() => {
            if (typeof window !== 'undefined' && !isSet) {
                setIsSet(true)
                window.TPDirect.setupSDK(TAP_PAY_ID, TAP_PAY_CODE, 'sandbox')

                const fields = {
                    number: {
                        // css selector
                        element: '#card-number',
                        placeholder: '**** **** **** ****',
                    },
                    expirationDate: {
                        // DOM object
                        element: document.getElementById('card-expiration-date'),
                        placeholder: 'MM / YY',
                    },
                    ccv: {
                        element: '#card-ccv',
                        placeholder: 'ccv',
                    },
                }
                window.TPDirect.card.setup({
                    // Display ccv field

                    fields: fields,
                    styles: {
                        // Style all elements
                        input: {
                            color: 'black',
                        },
                        // Styling ccv field
                        'input.ccv': {
                            // 'font-size': '16px'
                        },
                        // Styling expiration-date field
                        'input.expiration-date': {
                            // 'font-size': '16px'
                        },
                        // Styling card-number field
                        'input.card-number': {
                            'font-size': '0.7rem',
                            'line-height': '42px',
                        },
                        // style focus state
                        ':focus': {
                            // 'color': 'black'
                        },
                        // style valid state
                        '.valid': {
                            color: 'green',
                        },
                        // style invalid state
                        '.invalid': {
                            color: 'red',
                        },
                    },
                })

                const googlePaySetting = {
                    googleMerchantId: 'Come from google portal',
                    tappayGoogleMerchantId: 'Come from tappay portal',
                    allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    merchantName: 'TapPay Test!',
                    emailRequired: true, // optional
                    shippingAddressRequired: true, // optional,
                    billingAddressRequired: true, // optional
                    billingAddressFormat: 'MIN', // FULL, MIN

                    allowPrepaidCards: true,
                    allowedCountryCodes: ['TW'],

                    phoneNumberRequired: true, // optional
                }
                window.TPDirect.googlePay.setupGooglePay(googlePaySetting)

                const paymentRequest = {
                    allowedNetworks: ['AMEX', 'JCB', 'MASTERCARD', 'VISA'],
                    price: '123', // optional
                    currency: 'TWD', // optional
                }
                window.TPDirect.googlePay.setupPaymentRequest(paymentRequest, function (err: any, result: any) {
                    if (err) {
                        alert(`Google Pay Error: ${err}`)
                    }
                    if (result.canUseGooglePay) {
                        window.TPDirect.googlePay.setupGooglePayButton({
                            el: '#google-container',
                            color: 'black',
                            type: 'long',
                            getPrimeCallback: (cbErr: any, prime: any) => {
                                if (cbErr) {
                                    alert(`Google Pay Error: ${cbErr}`)
                                    return
                                }
                                handleGoogleSubmit(prime)
                            },
                        })
                    }
                })
            }
        }, [handleGoogleSubmit])
    }

    const HandleSetupTabPayApplePay = useCallback(
        (data: any) => {
            const tappayStatus = window.TPDirect.paymentRequestApi.checkAvailability()
            console.log('tappayStatus :>> ', tappayStatus)
            // 確認是否可以 getPrime
            if (!tappayStatus) {
                alert('裝置不支援 PaymentRequest / Apple Pay')
                return
            }

            const sendData = {
                supportedNetworks: ['MASTERCARD', 'VISA', 'AMEX'],
                supportedMethods: ['apple_pay'],
                displayItems: [
                    {
                        label: '微風購物',
                        amount: {
                            currency: 'TWD',
                            value: data.totalAmount,
                        },
                    },
                ],
                total: {
                    label: '付給 微風購物',
                    amount: {
                        currency: 'TWD',
                        value: data.totalAmount,
                    },
                },
                shippingOptions: [
                    {
                        id: 'homeDelivery',
                        label: '宅配',
                        // apple pay only
                        detail: '',
                        amount: {
                            currency: 'TWD',
                            value: '0',
                        },
                    },
                ],
                // optional
                options: {
                    requestPayerEmail: false,
                    requestPayerName: false,
                    requestPayerPhone: false,
                    requestShipping: false,
                    shippingType: 'shipping',
                },
            }

            window.TPDirect.setupSDK(TAP_PAY_ID, TAP_PAY_CODE, 'sandbox')
            window.TPDirect.paymentRequestApi.setupApplePay({
                // required, your apple merchant id
                merchantIdentifier: 'merchant.tech.cherri.global.test',
                // defaults to 'TW'
                countryCode: 'TW',
            })

            window.TPDirect.paymentRequestApi.setupPaymentRequest(sendData, function (result: any) {
                console.log('TPDirect.paymentRequestApi.setupPaymentRequest.result', result)
                if (result.canMakePaymentWithActiveCard) {
                    // Get prime
                    window.TPDirect.paymentRequestApi.getPrime((getPrimeResult: any) => {
                        console.log('paymentRequestApi.getPrime result', getPrimeResult)
                        const sendData = { ...data, payType: 2, payload: getPrimeResult }
                        dispatch(CheckoutActions.fetchCheckout(sendData))
                    })
                } else {
                    alert('裝置支援 PaymentRequest / Apple Pay，但是沒有可以支付的卡片')
                }
            })
        },
        [dispatch],
    )

    const HandleCheckoutRes = (router: any): void => {
        const checkoutRes = useSelector(CheckoutSelectors.checkout)
        useEffect(() => {
            if (checkoutRes.message) {
                if (checkoutRes.message == '成功') {
                    router.push('/checkoutResult?type=1')
                } else {
                    router.push('/checkoutResult?type=2')
                }
            }
        }, [checkoutRes, router])
    }

    return {
        handleCheckoutSubmit,
        handleGoogleCheckoutSubmit,
        useSetupTabPay,
        HandleCheckoutRes,
        HandleSetupTabPayApplePay,
    }
}
