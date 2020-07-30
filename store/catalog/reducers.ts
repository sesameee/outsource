import { CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'

import { State } from '@/types/stores/catalog/state'
import { initialState } from './initialState'
import { catalogList, productList } from '@/types/apis/catalog'

export const setIsSearching: CaseReducer<State, PayloadAction<State>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = action.payload.isFetch
    })
}

export const fetchCatalogSuccess: CaseReducer<State, PayloadAction<{ catalogList: catalogList }>> = (state, action) => {
    return produce(state, (draft) => {
        const data = action.payload.catalogList.data
        draft['isFetch'] = false
        draft['catalogList'] = data

        const productList: productList = {}
        for (let i = 0; i < data.categoryList?.length; i++) {
            const iData = <any>data.categoryList[i]?.cData
            const iCid = data.categoryList[i]?.cid
            for (let j = 0; j < iData?.length; j++) {
                const jData = iData[j]?.cData
                const jCid = iData[j]?.cid
                for (let k = 0; k < jData?.length; k++) {
                    const kData = jData[k]?.cData
                    const kCid = jData[k]?.cid
                    for (let l = 0; l < kData?.length; l++) {
                        const data = kData[l]
                        const pid = kData[l]?.pid
                        // console.log('${iCid}-${jCid}-${kCid} :>> ', `${iCid}-${jCid}-${kCid}-${id}-${pid}`, data)
                        productList[`c${iCid}-${jCid}-${kCid}-${pid}`] = data
                    }
                }
            }
        }
        draft['productList'] = productList
    })
}

export const fetchCatalogFailure: CaseReducer<State, PayloadAction<{ error: string }>> = (state, action) => {
    return produce(state, (draft) => {
        draft['isFetch'] = false
        draft['error'] = action.payload.error
    })
}

export const reset: CaseReducer = () => {
    return initialState
}
