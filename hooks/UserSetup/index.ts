import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserSetupActions, UserSetupSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useCallback } from 'react'
import { UserSetupReqData } from '@/types/apis/userSetup'
export const useUserRegisterSetupHandler = (): any => {
    const dispatch = useDispatch()
    const handleRegiterSetupSubmit = useCallback(
        (data: UserSetupReqData) => {
            dispatch(UserSetupActions.fetchUserSetup(data))
        },
        [dispatch],
    )
    const HandleUserRegisterSetupRes = (setPropIsOpenFn: any): void => {
        const userRegisterRes = useSelector(UserSetupSelectors.userSetup)
        useEffect(() => {
            if (userRegisterRes.code) {
                console.log('userRegisterRes.code :>> ', userRegisterRes.code)
                if (userRegisterRes.code === '0000') {
                    // close register
                    setPropIsOpenFn(false)
                }
            }
        }, [setPropIsOpenFn, userRegisterRes.code])
    }
    return { handleRegiterSetupSubmit, HandleUserRegisterSetupRes }
}
