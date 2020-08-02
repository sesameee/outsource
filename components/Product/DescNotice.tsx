import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'

const DescNotice: React.FC = () => {
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    return (
        <div className="product-desc-content">
            <p>{productData.desc3}</p>
        </div>
    )
}

export default memo(DescNotice)
