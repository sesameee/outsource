import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import Nav from '@/components/Nav'

import { useSelector } from 'react-redux'
import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { ChannelData, CategoryData } from '@/types/apis/channelList'
import WidgetFrame from '@/components/Catalog'

// import { withTranslation, i18n } from '@/I18n'

const Category = ({ router }: WithRouterProps): JSX.Element => {
    const query = router.query
    useChannelList()

    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const navData: { title: any; link: string }[] = []
    const processNav = (id: string, list: CategoryData[] | ChannelData[], path: string, index: number) => {
        index++
        const category = (list as any[]).filter((item: CategoryData | ChannelData) => {
            return item.cid == id
        })
        if (category.length) {
            const categoryData = category[0]
            const subName = index == 1 ? categoryData.channelName : categoryData.cName
            path = `${path}/${categoryData.cid}`
            navData.push({
                title: subName,
                link: path,
            })
            const subList = index == 1 ? categoryData.categoryList : categoryData.cData
            if (subList && Array.isArray(query.id) && query.id[index]) {
                processNav(query.id[index], subList, path, index)
            }
        }
    }

    if (Array.isArray(query.id)) {
        processNav(query.id[0], channelList, '/category', 0)
    }

    const titleArr = [...navData].reverse()
    const title1 = titleArr[0]
    const title2 = navData.length > 1 ? titleArr[1] : titleArr[0]

    return (
        <div className="page-wrapper">
            <Header isIndex={false} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            {title1 && title1.title}
                            <span>{title2 && title2.title}</span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navData}></Nav>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <div className="toolbox-left">
                                        <div className="toolbox-info">
                                            Showing <span>9 of 56</span> Products
                                        </div>
                                    </div>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">Sort by:</label>
                                            <div className="select-custom">
                                                <select name="sortby" id="sortby" className="form-control">
                                                    <option value="popularity" selected>
                                                        Most Popular
                                                    </option>
                                                    <option value="rating">Most Rated</option>
                                                    <option value="date">Date</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="products mb-3">
                                    <div className="row justify-content-center">
                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <span className="product-label label-new">New</span>
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-4.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Women</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Brown paperbag waist pencil skirt</a>
                                                    </h3>
                                                    <div className="product-price">$60.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '20%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 2 Reviews )</span>
                                                    </div>

                                                    <div className="product-nav product-nav-thumbs">
                                                        <a href="#" className="active">
                                                            <img
                                                                src="/images/products/product-4-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-4-2-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>

                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-4-3-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-5.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Dresses</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Dark yellow lace cut out swing dress</a>
                                                    </h3>
                                                    <div className="product-price">$84.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '0%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 0 Reviews )</span>
                                                    </div>

                                                    <div className="product-nav product-nav-thumbs">
                                                        <a href="#" className="active">
                                                            <img
                                                                src="/images/products/product-5-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-5-2-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <span className="product-label label-out">Out of Stock</span>
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-6.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Jackets</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Khaki utility boiler jumpsuit</a>
                                                    </h3>
                                                    <div className="product-price">
                                                        <span className="out-price">$120.00</span>
                                                    </div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '80%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 6 Reviews )</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-7.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Jeans</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Blue utility pinafore denim dress</a>
                                                    </h3>
                                                    <div className="product-price">$76.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '20%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 2 Reviews )</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <span className="product-label label-new">New</span>
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-8.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Shoes</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Beige knitted elastic runner shoes</a>
                                                    </h3>
                                                    <div className="product-price">$84.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '0%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 0 Reviews )</span>
                                                    </div>

                                                    <div className="product-nav product-nav-thumbs">
                                                        <a href="#" className="active">
                                                            <img
                                                                src="/images/products/product-8-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-8-2-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-9.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Bags</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">
                                                            Orange saddle lock front chain cross body bag
                                                        </a>
                                                    </h3>
                                                    <div className="product-price">$84.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '60%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 1 Reviews )</span>
                                                    </div>

                                                    <div className="product-nav product-nav-thumbs">
                                                        <a href="#" className="active">
                                                            <img
                                                                src="/images/products/product-9-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-9-2-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-9-3-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <span className="product-label label-top">Top</span>
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-11.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Shoes</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Light brown studded Wide fit wedges</a>
                                                    </h3>
                                                    <div className="product-price">$110.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '80%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 1 Reviews )</span>
                                                    </div>

                                                    <div className="product-nav product-nav-thumbs">
                                                        <a href="#" className="active">
                                                            <img
                                                                src="/images/products/product-11-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-11-2-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>

                                                        <a href="#">
                                                            <img
                                                                src="/images/products/product-11-3-thumb.jpg"
                                                                alt="product desc"
                                                            />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-10.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Jumpers</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Yellow button front tea top</a>
                                                    </h3>
                                                    <div className="product-price">$56.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '0%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 0 Reviews )</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-6 col-md-4 col-lg-4">
                                            <div className="product product-7 text-center">
                                                <figure className="product-media">
                                                    <a href="product.html">
                                                        <img
                                                            src="/images/products/product-12.jpg"
                                                            alt="Product image"
                                                            className="product-image"
                                                        />
                                                    </a>

                                                    <div className="product-action-vertical">
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-wishlist btn-expandable"
                                                        >
                                                            <span>add to wishlist</span>
                                                        </a>
                                                        <a
                                                            href="popup/quickView.html"
                                                            className="btn-product-icon btn-quickview"
                                                            title="Quick view"
                                                        >
                                                            <span>Quick view</span>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="btn-product-icon btn-compare"
                                                            title="Compare"
                                                        >
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
                                                    <div className="product-cat">
                                                        <a href="#">Bags</a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="product.html">Black soft RI weekend travel bag</a>
                                                    </h3>
                                                    <div className="product-price">$68.00</div>
                                                    <div className="ratings-container">
                                                        <div className="ratings">
                                                            <div className="ratings-val" style={{ width: '0%' }}></div>
                                                        </div>
                                                        <span className="ratings-text">( 0 Reviews )</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link page-link-prev" href="#">
                                                <span aria-hidden="true">
                                                    <i className="icon-long-arrow-left"></i>
                                                </span>
                                                Prev
                                            </a>
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item-total">of 6</li>
                                        <li className="page-item">
                                            <a className="page-link page-link-next" href="#" aria-label="Next">
                                                Next{' '}
                                                <span aria-hidden="true">
                                                    <i className="icon-long-arrow-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <aside className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop">
                                    <div className="widget widget-clean">
                                        <label>Filters:</label>
                                        <a href="#" className="sidebar-filter-clear">
                                            Clean All
                                        </a>
                                    </div>
                                    <WidgetFrame />
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withRouter(Category)
