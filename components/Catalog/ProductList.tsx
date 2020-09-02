import React, { memo } from 'react'
import { CatalogSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { FilterType } from '@/types/Common'
import { ProductData } from '@/types/apis/common'
import { productList } from '@/types/apis/catalog'
import Link from 'next/link'
// import { useShoppingCartModifyHandler } from '@/hooks/ShoppingCart'
import { useTranslation } from '@/I18n'
import { useWishModifyHandler } from '@/hooks/Wish'

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
    categoryType: string
}
const ProductList: React.FC<ProductListProps> = ({ filterProduct, sortSelect }: ProductListProps) => {
    const { t } = useTranslation()
    const productObj = useSelector(CatalogSelectors.getProductList)
    const productList = SortByType(sortSelect, productObj)
    // const { handleCart } = useShoppingCartModifyHandler()
    const { handleWish } = useWishModifyHandler()
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
                                    <Link href={`/product/${item.cid}/${item.pid}`} prefetch={false}>
                                        <div
                                            className="product-item-img"
                                            style={{ backgroundImage: `url(${item.imageUrl})` }}
                                        ></div>
                                    </Link>
                                    <div className="product-action-vertical">
                                        <a
                                            className="btn-product-icon btn-wishlist btn-expandable"
                                            onClick={() => {
                                                handleWish(
                                                    'add',
                                                    [
                                                        {
                                                            cid: item.cid,
                                                            pid: item.pid,
                                                            spec1: '',
                                                            spec2: '',
                                                            qty: 1,
                                                        },
                                                    ],
                                                    { ...item, qty: 1 },
                                                )
                                            }}
                                        >
                                            <span>{t('add_to_wish_list')}</span>
                                        </a>
                                    </div>
                                    {/* <div className="product-action">
                                        <a
                                            className="btn-product btn-cart"
                                            onClick={() => {
                                                handleCart(
                                                    'add',
                                                    [
                                                        {
                                                            cid: item.cid,
                                                            pid: item.pid,
                                                            spec1: '',
                                                            spec2: '',
                                                            qty: 1,
                                                        },
                                                    ],
                                                    { ...item, qty: 1 },
                                                )
                                            }}
                                        >
                                            <span>{t('add_to_cart')}</span>
                                        </a>
                                    </div> */}
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <Link href={`/category/${item._categoryType}/${item._cid}`} prefetch={false}>
                                            <a>{item._cName}</a>
                                        </Link>
                                    </div>
                                    <h3 className="product-title">
                                        <Link href={`/product/${item.cid}/${item.pid}`} prefetch={false}>
                                            <a>{item.pName}</a>
                                        </Link>
                                    </h3>
                                    <div className="product-price">
                                        {item.listPrice != item.price ? (
                                            <span className=" product-last-price">${item.listPrice}</span>
                                        ) : null}
                                        <span className={`${item.listPrice != item.price ? 'highlight-color' : ''}`}>
                                            ${item.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                })}
        </div>
    )
}

export default memo(ProductList)
