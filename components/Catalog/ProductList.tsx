import React, { memo } from 'react'
import { CatalogSelectors } from '@/store'
import { useSelector } from 'react-redux'
// import Link from 'next/link'
type ProductListProps = {
    filterProduct: Set<unknown>
}
const ProductList: React.FC<ProductListProps> = ({ filterProduct }: ProductListProps) => {
    const productObj = useSelector(CatalogSelectors.getProductList)
    const productList = productObj && Object.keys(productObj)
    return (
        <div className="row justify-content-center product-list">
            {productList &&
                productList.length &&
                productList.map((keyString: string, index: number) => {
                    const item = productObj[keyString]
                    const findID = keyString.substr(0, keyString.lastIndexOf('-'))
                    const showProduct = (filterProduct.size > 0 && filterProduct.has(findID)) || filterProduct.size == 0
                    return showProduct ? (
                        <div className="col-6 col-md-4 col-lg-4" key={index}>
                            <div className="product product-7 text-center">
                                <figure className="product-media">
                                    {/* <span className="product-label label-new">New</span> */}
                                    <div
                                        className="product-item-img"
                                        style={{ backgroundImage: `url(${item.imageUrl})` }}
                                    ></div>
                                    {/* <a href="product.html">
                                        <img
                                            src="/images/products/product-4.jpg"
                                            alt="Product image"
                                            className="product-image"
                                        />
                                    </a> */}

                                    <div className="product-action-vertical">
                                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                                            <span>add to wishlist</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product-icon btn-quickview"
                                            title="Quick view"
                                        >
                                            <span>Quick view</span>
                                        </a>
                                        <a href="#" className="btn-product-icon btn-compare" title="Compare">
                                            <span>Compare</span>
                                        </a>
                                    </div>
                                    <div className="product-action">
                                        <a href="#" className="btn-product btn-cart">
                                            <span>add to cart</span>
                                        </a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    {/* <div className="product-cat">
                                        <a href="#">Women</a>
                                    </div> */}
                                    <h3 className="product-title">
                                        <a href="product.html">{item.pName}</a>
                                    </h3>
                                    <div className="product-price">${item.price}</div>
                                </div>
                            </div>
                        </div>
                    ) : null
                })}
        </div>
    )
}

export default ProductList
