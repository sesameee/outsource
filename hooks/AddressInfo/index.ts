import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddressInfoActions, AddressInfoSelectors } from '@/store'
import { useTranslation } from '@/I18n'
import React from 'react'
import { AreaData } from '@/types/apis/addressInfo'

export const useAddressInfo = (): void => {
    const { i18n } = useTranslation()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(AddressInfoActions.fetchAddressInfo())
        return function cleanup() {
            dispatch(AddressInfoActions.stopFetchAddressInfo())
        }
    }, [dispatch, i18n.language])
}

export const HandleAddress = (): any => {
    const AddressInfo = useSelector(AddressInfoSelectors.getAddressInfo)
    const [city, setCity] = React.useState(0)
    const [areas, setAreas] = React.useState<AreaData[]>([])

    useEffect(() => {
        const arr = AddressInfo.filter((item) => {
            return item.cityCode == Number(city)
        })
        if (arr && arr[0]) {
            const areasData = arr[0].areas || []
            setAreas(areasData)
        }
    }, [AddressInfo, city])

    return { AddressInfo, city, setCity, areas }
}
