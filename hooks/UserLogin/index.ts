import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { UserLoginActions } from '@/store'
import { UserLoginReqData } from '@/types/apis/userLogin'
export const useUserLoginHandler = (): any => {
    const dispatch = useDispatch()
    const handleLoginSubmit = useCallback(
        (data: UserLoginReqData) => {
            dispatch(UserLoginActions.fetchUserLogin(data))
        },
        [dispatch],
    )
    return { handleLoginSubmit }
}
