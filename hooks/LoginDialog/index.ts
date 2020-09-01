import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LoginDialogSelectors, LoginDialogActions } from '@/store'
export const UseLoginDialog = (): any => {
    const dispatch = useDispatch()
    const IsOpenMember = useSelector(LoginDialogSelectors.getLoginDialogData).isOpen
    const setIsOpenMember = useCallback(
        (toggle) => {
            dispatch(LoginDialogActions.toggleLoginDialog({ isOpen: toggle }))
        },
        [dispatch],
    )

    return { IsOpenMember, setIsOpenMember }
}
