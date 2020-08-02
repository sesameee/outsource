import React, { memo } from 'react'
import { ErrorAlertSelectors } from '@/store'
import { useSelector } from 'react-redux'
import MyModal from '../MyModal'
import { useDispatch } from 'react-redux'
import { ErrorAlertActions } from '@/store'

const ErrorAlert: React.FC = () => {
    const data = useSelector(ErrorAlertSelectors.errorAlertState)
    const dispatch = useDispatch()
    const closeModal = () =>
        dispatch(
            ErrorAlertActions.toggleErrorAlert({
                isOpen: false,
                error: '',
            }),
        )

    return (
        <MyModal
            content={<div className="errorAlert">{data?.error}</div>}
            isOpen={data?.isOpen}
            setPropIsOpenFn={closeModal}
        />
    )
}

export default memo(ErrorAlert)
