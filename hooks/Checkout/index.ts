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
