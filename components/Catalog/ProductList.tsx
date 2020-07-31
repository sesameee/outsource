import React, { memo } from 'react'
import { CatalogSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { FilterType } from '@/types/Common'
import { ProductData } from '@/types/apis/common'
import { productList } from '@/types/apis/catalog'

const SortByType = (type: FilterType, productObj: productList) => {
    type = Number(type)
    if (productObj && Object.values(productObj).length) {
        const sortList: ProductData[] = Object.values(productObj).sort((a: ProductData, b: ProductData): any => {
            if (type == FilterType.PRICE_ASCENDING) return Number(a.price) - Number(b.price)
            else if (type == FilterType.PRICE_DESCENDING) return Number(b.price) - Number(a.price)
            else if (type == FilterType.TIME_NEW_TO_OLD)
                return new Date(b.onlineDate).valueOf() - new Date(a.onlineDate).valueOf()
            else if (type == FilterType.TIME_OLD_TO_NEW)
                return new Date(a.onlineDate).valueOf() - new Date(b.onlineDate).valueOf()
        })
        return sortList
    } else {
        return []
    }
}

type ProductListProps = {
    filterProduct: Set<unknown>
    sortSelect: FilterType
}
const ProductList: React.FC<ProductListProps> = ({ filterProduct, sortSelect }: ProductListProps) => {
    const productObj = useSelector(CatalogSelectors.getProductList)
    // const SortType = FilterType.PRICE_ASCENDING
    const productList = SortByType(sortSelect, productObj)
    return (
        <div className="row justify-content-center product-list">
            {productList &&
                productList.length &&
                productList.map((item: ProductData, index: number) => {
                    const findID = item._id.substr(0, item._id.lastIndexOf('-'))
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

export default memo(ProductList)
