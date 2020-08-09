import React, { memo, useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { ProductInfoSelectors } from '@/store'
import Zoom from 'react-medium-image-zoom'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
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
                        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                            <Zoom>
                                <img id="product-zoom" src={imgArr[indexImage]} alt="product image" width="500" />
                            </Zoom>
                        </ControlledZoom>
                    )}

                    <a id="btn-product-gallery" onClick={() => handleImgLoad()} className="btn-product-gallery">
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
