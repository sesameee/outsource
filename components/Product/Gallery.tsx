import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const DescNotice: React.FC = () => {
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    const imgArr = productData.imageUrl
    const [indexImage, setindexImage] = React.useState(0)
    return (
        <div className="product-gallery product-gallery-vertical">
            <div className="row">
                <figure className="product-main-image">
                    {imgArr && imgArr[indexImage] && (
                        <Zoom>
                            <img id="product-zoom" src={imgArr[indexImage]} alt="product image" width="500" />
                        </Zoom>
                    )}

                    <a href="#" id="btn-product-gallery" className="btn-product-gallery">
                        <i className="icon-arrows"></i>
                    </a>
                </figure>

                <div id="product-zoom-gallery" className="product-image-gallery">
                    {imgArr &&
                        imgArr.map((item, index) => {
                            const styleClass =
                                indexImage == index ? 'product-gallery-item active' : 'product-gallery-item'
                            return (
                                <a key={index} className={styleClass} onClick={() => setindexImage(index)}>
                                    <img src={item} alt="product side" height="106" width="auto" />
                                </a>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default memo(DescNotice)
