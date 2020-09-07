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
                    const id = `c${data.cid}-${iCid}-${pid}`
                    const link = `${data.cid}/${iCid}/${cid}`
                    tmpData['_categoryType'] = data.categoryList[i]?.categoryType
                    tmpData['_cid'] = data.categoryList[i]?.cid
                    tmpData['_cName'] = data.categoryList[i]?.cName
                    tmpData['_link'] = link
                    tmpData['_id'] = id
                    productList[id] = tmpData
                }
            }
        } else if (categoryType == 'channel' || categoryType == 'brand') {
            for (let i = 0; i < data.categoryList?.length; i++) {
                const iData = <any>data.categoryList[i]?.cData
                const iCid = data.categoryList[i]?.cid
                for (let j = 0; j < iData?.length; j++) {
                    const jData = iData[j]?.cData
                    const jCid = iData[j]?.cid
                    for (let k = 0; k < jData?.length; k++) {
                        const kCid = jData[k]?.cid
                        const kCname = jData[k].cName
                        const KcategoryType = jData[k].categoryType
                        const lData = jData[k].cData
                        for (let l = 0; l < lData?.length; l++) {
                            const cid = lData[l]?.cid
                            const id = `c${iCid}-${jCid}-${kCid}-${cid}`
                            const link = `${data.cid}/${iCid}/${jCid}/${cid}/${kCid}`
                            const tmpData = lData[l]
                            tmpData['_categoryType'] = KcategoryType
                            tmpData['_cid'] = kCid
                            tmpData['_cName'] = kCname
                            tmpData['_link'] = link
                            tmpData['_id'] = id
                            productList[id] = tmpData
                        }
                    }
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
                        const kCid = jData[k]?.cid
                        const pid = jData[k]?.pid
                        const tmpData = jData[k]
                        const id = `c${iCid}-${jCid}-${pid}`
                        const link = `${data.cid}/${iCid}/${jCid}/${kCid}`
                        tmpData['_categoryType'] = iData[j]?.categoryType
                        tmpData['_cid'] = iData[j]?.cid
                        tmpData['_cName'] = iData[j]?.cName
                        tmpData['_link'] = link
                        tmpData['_id'] = id
                        productList[id] = tmpData
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
