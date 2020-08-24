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
        const categoryType = data.categoryType
        const productList: productList = {}

        if (categoryType == 'subCategory') {
            for (let i = 0; i < data.categoryList?.length; i++) {
                const iData = <any>data.categoryList[i]?.cData
                const iCid = data.categoryList[i]?.cid
                for (let l = 0; l < iData?.length; l++) {
                    const tmpData = iData[l]
                    const cid = iData[l]?.cid
                    const pid = iData[l]?.pid
                    const id = `c${data.cid}-${iCid}-${cid}-${pid}`
                    console.log('id :>> ', id)
                    tmpData['_id'] = id
                    productList[id] = tmpData
                }
            }
        } else {
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
                            const tmpData = kData[l]
                            const pid = kData[l]?.pid
                            const id = `c${iCid}-${jCid}-${kCid}-${pid}`
                            tmpData['_id'] = id
                            productList[id] = tmpData
                        }
                    }
                }
            }
        }

        console.log('productList :>> ', productList)
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
