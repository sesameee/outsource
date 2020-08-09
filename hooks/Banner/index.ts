import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import {
    BannerActions,
    UserRegisterActions,
    RegisterUserInfoActions,
    ForgotPasswordActions,
    ResetPasswordActions,
    UserSetupActions,
    UserPointsActions,
} from '@/store'

export const useBanner = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 0 }))

        dispatch(
            UserRegisterActions.fetchUserRegister({
                name: '1',
                phoneCode: '1',
                phone: '1',
                email: '1',
                pwd1: '1',
                pwd2: '1',
                registerFrom: '1',
            }),
        )
        dispatch(
            RegisterUserInfoActions.fetchRegisterUserInfo({
                memberId: '1',
                rocId: '1',
                sex: '1',
                cityCode: 0,
                areaCode: 0,
                address: '1',
                accessToken: '1',
            }),
        )
        dispatch(ForgotPasswordActions.fetchForgotPassword({ phone: '1', rocId: '1' }))
        dispatch(
            ResetPasswordActions.fetchResetPassword({
                memberId: '1',
                phone: '1',
                pwd1: '1',
                pwd2: '1',
                type: 0,
            }),
        )
        dispatch(
            UserSetupActions.fetchUserSetup({
                memberId: '1',
                email: '1',
                cityCode: 0,
                areaCode: 0,
                address: '1',
                accessToken: '1',
            }),
        )
        dispatch(UserPointsActions.fetchUserPoints({ memberId: '1', accessToken: '1,' }))
    }, [dispatch])
}

export const useRecommend = (): void => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(BannerActions.fetchBanner({ isRecommend: 1 }))
    }, [dispatch])
}
