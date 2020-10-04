import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
const DescNotice: React.FC = () => {
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    const imgArr = productData.imageUrl
    const [indexImage, setindexImage] = React.useState(0)
    const [isZoomed, setIsZoomed] = useState(false)

    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
    }, [])

    const handleZoomChange = useCallback((shouldZoom) => {
        setIsZoomed(shouldZoom)
    }, [])

    return (
        <div className="product-gallery product-gallery-vertical">
            <div className="row">
                <figure className="product-main-image">
                    {imgArr && imgArr[indexImage] && (
                        <img id="product-zoom" src={imgArr[indexImage]} alt="product image" width="500" />
                    )}

                    <a id="btn-product-gallery" onClick={() => handleImgLoad()} className="btn-product-gallery">
                        <i className="icon-arrows"></i>
                    </a>
                </figure>
                {isZoomed && (
                    <Lightbox
                        mainSrc={imgArr[indexImage]}
                        nextSrc={imgArr[(indexImage + 1) % imgArr.length]}
                        prevSrc={imgArr[(indexImage + imgArr.length - 1) % imgArr.length]}
                        onCloseRequest={() => handleZoomChange(false)}
                        onMovePrevRequest={() => setindexImage((indexImage + imgArr.length - 1) % imgArr.length)}
                        onMoveNextRequest={() => setindexImage((indexImage + 1) % imgArr.length)}
                    />
                )}
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
