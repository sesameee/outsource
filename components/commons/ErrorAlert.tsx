import React, { memo, useEffect } from 'react'
import { ErrorAlertSelectors } from '@/store'
import { useSelector } from 'react-redux'
import MyModal from '../MyModal'
import { useDispatch } from 'react-redux'
import { ErrorAlertActions } from '@/store'

const ErrorAlert: React.FC = () => {
    const data = useSelector(ErrorAlertSelectors.errorAlertState)
    const [isOpen, setisOpen] = React.useState(data.isOpen)
    useEffect(() => {
        setisOpen(data.isOpen)
    }, [data, data.isOpen, setisOpen])
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
            isOpen={isOpen}
            setPropIsOpenFn={closeModal}
        />
    )
}

export default memo(ErrorAlert)
