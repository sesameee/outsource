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
import { NextPage } from 'next'
import { useWishModifyHandler } from '@/hooks/Wish'
import { useBackBtnDetect } from '@/hooks/BackBtnDetect'

interface CategoryProps extends WithRouterProps {
    filterProduct: Set<unknown>
}
const Product: NextPage<any> = ({ router }: CategoryProps): JSX.Element => {
    useBackBtnDetect()
    const { t } = useTranslation()
    const query = router.query
    useProductInfo(query)
    const productData = useSelector(ProductInfoSelectors.getProductInfo)
    const { handleCart } = useShoppingCartModifyHandler()
    const { handleWish } = useWishModifyHandler()
    const navDatas: navData[] = []
    const [amount, setAmount] = React.useState(1)
    const [spec1, setSpec1] = React.useState(0)
    const [spec2, setSpec2] = React.useState(0)

    const [subSpecList, setSubSpecList] = React.useState([{ name: '', orderMax: 0, productTypeId: 0, stock: 0 }])

    const breadCrumbs = productData && productData.breadCrumbs && productData.breadCrumbs
    const info = productData && productData.specInfos
    const specName1 = (productData && productData.specName1) || ''
    const specName2 = (productData && productData.specName2) || ''

    const imgArr = productData && productData.imageUrl
    breadCrumbs.map((bitem) => {
        bitem.category.map((item: BreadCrumbCategoryData) => {
            const path = `/category/${item.categoryType}/${item.cid}`
            navDatas.push({
                title: item.name,
                link: path,
            })
        })
    })

    useEffect(() => {
        if (info && info.length) {
            if (info[spec1]['subSpecList']) {
                setSubSpecList(info[spec1]['subSpecList'])
            }
        }
        setSpec2(0)
    }, [spec1, info])
    const spec1Name = info && info[spec1] && info[spec1].name
    const spec2Name = subSpecList && subSpecList[spec2] && subSpecList[spec2].name

    const handleAddCart = () => {
        handleCart(
            'add',
            [
                {
                    cid: productData.cid,
                    pid: productData.pid,
                    spec1: spec1Name,
                    spec2: spec2Name,
                    qty: amount,
                },
            ],
            {
                ...productData,
                spec1: spec1Name,
                spec2: spec2Name,
                qty: amount,
            },
        )
    }

    const handleAddWish = () => {
        handleWish(
            'add',
            [
                {
                    cid: productData.cid,
                    pid: productData.pid,
                    spec1: spec1Name,
                    spec2: spec2Name,
                    qty: amount,
                },
            ],
            { ...productData, qty: amount },
        )
    }

    let mLink = ''
    if (navDatas && productData) {
        navDatas.map((item) => {
            if (productData.mName.indexOf(item.title) != -1) {
                mLink = item.link
            }
        })
    }

    const Spec2Select = () => {
        if (subSpecList && subSpecList[spec2] && subSpecList[spec2].name) {
            return (
                <div className="details-filter-row details-row-size">
                    <label htmlFor="size">{specName2}:</label>
                    <div className="select-custom">
                        <select
                            name="size"
                            id="size"
                            className="form-control"
                            value={spec2}
                            onChange={(e) => setSpec2(Number(e.target.value))}
                        >
                            {subSpecList.map((item: any, index: number) => {
                                return (
                                    <option key={index} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="page-wrapper">
            <Header isIndex={false} />

            <main className="main">
                <Nav navData={navDatas}></Nav>
                <div className="page-content">
                    {productData && (
                        <div className="container">
                            <div className="product-details-top">
                                <div className="row">
                                    <div className="col-md-6">
                                        <Gallery />
                                    </div>

                                    <div className="col-md-6">
                                        <div className="product-details">
                                            <Link href={mLink} prefetch={false}>
                                                <h2 className="product-subtitle cursor-pointer">{productData.mName}</h2>
                                            </Link>

                                            <h1 className="product-title">{productData.pName}</h1>
                                            <div className="product-number-frame">
                                                {productData.listPrice != productData.price ? (
                                                    <div className="product-last-price">${productData.listPrice}</div>
                                                ) : null}
                                                <div
                                                    className={`product-price ${
                                                        productData.listPrice != productData.price
                                                            ? 'highlight-color'
                                                            : ''
                                                    }`}
                                                >
                                                    ${productData.price}
                                                </div>
                                            </div>
                                            <h4 className="product-id">
                                                {t('product_id')}：{productData.pid}
                                            </h4>

                                            <div className="product-content">
                                                <p>{productData.desc}</p>
                                            </div>

                                            <div className="details-filter-row details-row-size">
                                                <label>{specName1}:</label>

                                                <div className="product-nav product-nav-thumbs">
                                                    {info &&
                                                        info.map((item: any, index: number) => {
                                                            const className = spec1 == index ? 'active' : ''
                                                            return (
                                                                <a
                                                                    key={index}
                                                                    className={className}
                                                                    onClick={() => setSpec1(index)}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )
                                                        })}
                                                </div>
                                            </div>
                                            {Spec2Select()}

                                            <div className="details-filter-row details-row-size">
                                                <label htmlFor="qty">{t('amount')}:</label>
                                                <div className="product-details-quantity">
                                                    <NumberInput
                                                        inputName="qty"
                                                        amount={amount}
                                                        setAmount={setAmount}
                                                        minValue={1}
                                                        maxValue={subSpecList[spec2].orderMax}
                                                    />
                                                </div>
                                            </div>

                                            <div className="product-details-action">
                                                <a
                                                    onClick={() => {
                                                        handleAddCart()
                                                    }}
                                                    className="btn-product btn-cart cursor-pointer"
                                                >
                                                    <span>{t('add_to_cart')}</span>
                                                </a>

                                                <div className="details-action-wrapper">
                                                    <a
                                                        href="#"
                                                        onClick={() => {
                                                            handleAddWish()
                                                        }}
                                                        className="btn-product btn-wishlist cursor-pointer"
                                                        title="Wishlist"
                                                    >
                                                        <span>{t('add_to_wish_list')}</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="product-details-footer">
                                                <div className="product-cat">
                                                    <span>Category:</span>
                                                    {navDatas.map((item: navData, index) => {
                                                        return (
                                                            <span key={index}>
                                                                <Link href={item.link} prefetch={false}>
                                                                    {item.title}
                                                                </Link>
                                                                ,
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
                    )}
                </div>
            </main>

            {productData && (
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
                                    <NumberInput
                                        inputName="qty"
                                        amount={amount}
                                        setAmount={setAmount}
                                        minValue={1}
                                        maxValue={subSpecList[spec2].orderMax}
                                    />
                                </div>

                                <div className="product-details-action">
                                    <a
                                        href="#"
                                        className="btn-product btn-cart cursor-pointer"
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
            )}
            <Footer />
        </div>
    )
}

export default withRouter(Product)
