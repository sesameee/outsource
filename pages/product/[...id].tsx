import React, { useEffect } from 'react'
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
import { useShoppingCartModifyHandler } from '@/hooks/ShoppingCart'
import { useTranslation } from '@/I18n'

interface CategoryProps extends WithRouterProps {
    filterProduct: Set<unknown>
    token: string
}
const Product: NextPage<any> = ({ token, router }: CategoryProps): JSX.Element => {
    const { t } = useTranslation()
    const query = router.query
    useProductInfo(query)
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    const { handleCart } = useShoppingCartModifyHandler()
    const { handleWish } = useWishModifyHandler()
    const navData: navData[] = []
    const [amount, setAmount] = React.useState(1)
    const [spec1, setSpec1] = React.useState('')
    const [spec2, setSpec2] = React.useState('')

    const breadCrumbs = productData.breadCrumbs[0]
    const info = productData.info
    useEffect(() => {
        if (info && info.length > 0) {
            setSpec1(info[0].sizeName1)
            setSpec2(info[0].sizeName2)
        }
    }, [info])
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

    const handleAddCart = () => {
        handleCart(
            'add',
            [
                {
                    cid: productData.cid,
                    pid: productData.pid,
                    spec1: spec1,
                    spec2: spec2,
                    qty: amount,
                },
            ],
            { ...productData, qty: amount },
        )
    }

    const handleAddWish = () => {
        handleWish(
            'add',
            [
                {
                    cid: productData.cid,
                    pid: productData.pid,
                    spec1: spec1,
                    spec2: spec2,
                    qty: amount,
                },
            ],
            { ...productData, qty: amount },
        )
    }

    return (
        <div className="page-wrapper">
            <Header isIndex={false} token={token} />
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
                                        <h4 className="product-id">
                                            {t('product_id')}：{productData.pid}
                                        </h4>

                                        <div className="product-content">
                                            <p>{productData.desc}</p>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label>{t('color')}:</label>

                                            <div className="product-nav product-nav-thumbs">
                                                {info &&
                                                    info.map((item, index) => {
                                                        const className = spec1 == item.sizeName1 ? 'active' : ''
                                                        return (
                                                            <a key={index} className={className}>
                                                                {item.sizeName1}
                                                            </a>
                                                        )
                                                    })}
                                            </div>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label htmlFor="size">Size:</label>
                                            <div className="select-custom">
                                                <select
                                                    name="size"
                                                    id="size"
                                                    className="form-control"
                                                    defaultValue={spec2}
                                                    value={spec2}
                                                    onChange={(e) => setSpec2(e.target.value)}
                                                >
                                                    <option value="#">{t('size')}:</option>
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
                                            <label htmlFor="qty">{t('amount')}:</label>
                                            <div className="product-details-quantity">
                                                <NumberInput
                                                    inputName="qty"
                                                    amount={amount}
                                                    setAmount={setAmount}
                                                    minValue={1}
                                                />
                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            <a
                                                onClick={() => {
                                                    handleAddCart()
                                                }}
                                                className="btn-product btn-cart"
                                            >
                                                <span>{t('add_to_cart')}</span>
                                            </a>

                                            <div className="details-action-wrapper">
                                                <a
                                                    href="#"
                                                    onClick={() => {
                                                        handleAddWish()
                                                    }}
                                                    className="btn-product btn-wishlist"
                                                    title="Wishlist"
                                                >
                                                    <span>{t('add_to_wish_list')}</span>
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
                            <div className="product-price">${productData.price * amount}</div>
                            <div className="product-details-quantity">
                                <NumberInput inputName="qty" amount={amount} setAmount={setAmount} minValue={1} />
                            </div>

                            <div className="product-details-action">
                                <a
                                    href="#"
                                    className="btn-product btn-cart"
                                    onClick={() => {
                                        handleAddCart()
                                    }}
                                >
                                    <span>{t('add_to_cart')}</span>
                                </a>
                                <a
                                    href="#"
                                    onClick={() => {
                                        handleAddWish()
                                    }}
                                    className="btn-product btn-wishlist"
                                    title="Wishlist"
                                >
                                    <span>{t('add_to_wish_list')}</span>
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

import cookies from 'next-cookies'
import { NextPageContext, NextPage } from 'next'
import { useWishModifyHandler } from '@/hooks/Wish'

Product.getInitialProps = async (ctx: NextPageContext) => {
    return { token: cookies(ctx).token || '' }
}
export default withRouter(Product)
