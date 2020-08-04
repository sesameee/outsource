import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import Nav from '@/components/Nav'

import { useSelector } from 'react-redux'
import { navData } from '@/types/components/nav'
import { useProductInfo } from '@/hooks/ProductInfo'
import { ProductInfoSelectors } from '@/store'
import { BreadCrumbCategoryData } from '@/types/apis/productInfo'
import DescTab from '@/components/Product/DescTab'
import Gallery from '@/components/Product/Gallery'
import Link from 'next/link'
import NumberInput from '@/components/commons/NumberInput'

interface CategoryProps extends WithRouterProps {
    filterProduct: Set<unknown>
}

const Product = ({ router }: CategoryProps): JSX.Element => {
    const query = router.query
    useProductInfo(query)
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    const navData: navData[] = []
    const breadCrumbs = productData.breadCrumbs[0]
    const info = productData.info
    const imgArr = productData.imageUrl
    let path = '/category'
    breadCrumbs &&
        breadCrumbs.category.map((item: BreadCrumbCategoryData) => {
            path = `${path}/${item.cid}`
            navData.push({
                title: item.name,
                link: path,
            })
        })

    return (
        <div className="page-wrapper">
            <Header isIndex={false} />
            <main className="main">
                <Nav navData={navData}></Nav>
                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <Gallery />
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h2 className="product-subtitle">{productData.mName}</h2>
                                        <h1 className="product-title">{productData.pName}</h1>
                                        <div className="product-number-frame">
                                            {productData.listPrice != productData.price ? (
                                                <div className="product-last-price">${productData.listPrice}</div>
                                            ) : null}
                                            <div className="product-price">${productData.price}</div>
                                        </div>
                                        <h4 className="product-id">商品貨號：{productData.pid}</h4>

                                        <div className="product-content">
                                            <p>{productData.desc}</p>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label>Color:</label>

                                            <div className="product-nav product-nav-thumbs">
                                                {info &&
                                                    info.map((item, index) => {
                                                        return (
                                                            <a href="#" key={index}>
                                                                {item.sizeName1}
                                                            </a>
                                                        )
                                                    })}
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="size">Size:</label>
                                            <div className="select-custom">
                                                <select name="size" id="size" className="form-control">
                                                    <option value="#" selected>
                                                        Select a size
                                                    </option>
                                                    {info &&
                                                        info.map((item, index) => {
                                                            return (
                                                                <option key={index} value={item.sizeName2}>
                                                                    {item.sizeName2}
                                                                </option>
                                                            )
                                                        })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="qty">Qty:</label>
                                            <div className="product-details-quantity">
                                                <NumberInput inputName="qty" />
                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            <a href="#" className="btn-product btn-cart">
                                                <span>add to cart</span>
                                            </a>

                                            <div className="details-action-wrapper">
                                                <a href="#" className="btn-product btn-wishlist" title="Wishlist">
                                                    <span>Add to Wishlist</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="product-details-footer">
                                            <div className="product-cat">
                                                <span>Category:</span>
                                                {navData.map((item: navData, index) => {
                                                    return (
                                                        <span key={index}>
                                                            <Link href={item.link}>{item.title}</Link>,
                                                        </span>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DescTab />
                    </div>
                </div>
            </main>

            <div className="sticky-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <figure className="product-media">
                                {imgArr && imgArr[0] && (
                                    <a>
                                        <img src={imgArr[0]} alt="Product image" />
                                    </a>
                                )}
                            </figure>
                            <h4 className="product-title">
                                <a>{productData.pName}</a>
                            </h4>
                        </div>

                        <div className="col-6 justify-content-end">
                            <div className="product-price">${productData.price}</div>
                            <div className="product-details-quantity">
                                <input
                                    type="number"
                                    id="sticky-cart-qty"
                                    className="form-control"
                                    value="1"
                                    min="1"
                                    max="10"
                                    step="1"
                                    data-decimals="0"
                                    required
                                />
                            </div>

                            <div className="product-details-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                                <a href="#" className="btn-product btn-wishlist" title="Wishlist">
                                    <span>Add to Wishlist</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default withRouter(Product)
