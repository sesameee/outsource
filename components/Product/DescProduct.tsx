import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'

const DescProduct: React.FC = () => {
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    return (
        <div className="product-desc-content">
            <p dangerouslySetInnerHTML={{ __html: productData.desc1 }} />
            <p dangerouslySetInnerHTML={{ __html: productData.desc2 }} />
        </div>
    )
}

export default memo(DescProduct)
