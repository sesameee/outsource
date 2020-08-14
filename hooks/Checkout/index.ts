import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckoutActions, CheckoutSelectors } from '@/store'

import { TPDirect } from '@/types/Common'
declare let window: TPDirect
export const useCheckoutHandler = (): any => {
    const dispatch = useDispatch()

    const handleCheckoutSubmit = useCallback(
        (data: any) => {
            console.log('data :>> ', data)
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

                const sendData = { ...data, payType: 2, payload: result.card.prime }
                console.log('sendData :>> ', sendData)
                dispatch(CheckoutActions.fetchCheckout(sendData))
            })
        },
        [dispatch],
    )

    const useSetupTabPay = (): void => {
        useEffect(() => {
            if (typeof window !== 'undefined') {
                window.TPDirect.setupSDK(
                    16011,
                    'app_jJk5eM3hTTbRarr4Fh1lWJjoik5Hs4GjBU4m99Sgpb7erLn6aDCd8secnCMS',
                    'sandbox',
                )
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
            }
        }, [])
    }

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

    return { handleCheckoutSubmit, useSetupTabPay, HandleCheckoutRes }
}
