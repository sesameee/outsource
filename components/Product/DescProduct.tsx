import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'

const DescProduct: React.FC = () => {
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    return (
        <div className="product-desc-content">
            <p>{productData.desc1}</p>
            <p>{productData.desc2}</p>
        </div>
    )
}

export default memo(DescProduct)
