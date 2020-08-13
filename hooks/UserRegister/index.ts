import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserRegisterActions } from '@/store'
import { UserRegisterSelectors } from '@/store'
import { useCallback } from 'react'
import { UserRegisterReqData } from '@/types/apis/userRegister'
export const useUserRegisterHandler = (): any => {
    const dispatch = useDispatch()
    const handleRegiterSubmit = useCallback(
        (data: UserRegisterReqData) => {
            dispatch(UserRegisterActions.fetchUserRegister(data))
        },
        [dispatch],
    )
    const HandleUserRegisterRes = (setStep: any): void => {
        const userRegisterRes = useSelector(UserRegisterSelectors.userRegister)
        useEffect(() => {
            if (userRegisterRes.data.memberId) {
                setStep(2)
            }
        }, [setStep, userRegisterRes.data])
    }
    return { handleRegiterSubmit, HandleUserRegisterRes }
}
