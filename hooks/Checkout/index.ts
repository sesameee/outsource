import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { CheckoutActions } from '@/store'
import { useTranslation } from '@/I18n'
export const useCheckout = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            CheckoutActions.fetchCheckout({
                memberId: '',
                mid: '',
                tid: '',
                payType: 1,
                payload: '',
                shipInfo: {
                    receiveAddress: '忠孝東路五段',
                    receiveAreaCode: 9,
                    receiveCityCode: 2,
                    receiveMobile: '0919336260',
                    receiveName: '陳O華',
                    receiveEmail: 'leo_chen@breeze.com.tw',
                    shipType: 'delivery',
                },
                invoiceType: 1,
                invoiceInfo: {},
                totalAmount: 1,
                shippingAmount: 1,
                data: [],
            }),
        )
    }, [dispatch, i18n.language])
}

import { TPDirect } from '@/types/Common'
declare let window: TPDirect
export const useSetupTabPay = (): void => {
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

export const useCheckoutHandler = (): any => {
    const dispatch = useDispatch()
    const handleCheckoutSubmit = useCallback(
        (data: any) => {
            dispatch(CheckoutActions.fetchCheckout(data))
        },
        [dispatch],
    )
    return { handleCheckoutSubmit }
}
