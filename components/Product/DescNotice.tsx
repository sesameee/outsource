import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'

const DescNotice: React.FC = () => {
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    return (
        <div className="product-desc-content">
            <p dangerouslySetInnerHTML={{ __html: productData.desc3 }} />
        </div>
    )
}

export default memo(DescNotice)
