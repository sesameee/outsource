import React, { memo } from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import Link from 'next/link'

const Main: React.FC = () => {
  return (
    <main className="main">
      <div className="intro-slider-container mb-3 mb-lg-5">
        <div
          className="intro-slider owl-carousel owl-simple owl-nav-inside owl-light"
          data-toggle="owl"
          data-owl-options='{"nav":false, "dots": false, "loop": false}'
        >
          <div className="intro-slide" style={{ backgroundImage: 'url(/images/demos/demo-12/slider/slide-1.jpg)' }}>
            <div className="container intro-content text-center">
              <h3 className="intro-subtitle text-white">SEASONAL PICKS</h3>
              <h1 className="intro-title text-white">Get All The Good Stuff</h1>

              <a href="category.html" className="btn btn-outline-white">
                <span>DISCOVER MORE</span>
                <i className="icon-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <span className="slider-loader text-white"></span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner banner-display banner-link-anim banner-title-hidden">
              <a href="#">
                <img src="/images/demos/demo-12/banners/banner-1.jpg" alt="Banner" />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">This Week's Most Wanted</a>
                </h3>
                <a href="#" className="btn btn-outline-white banner-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="banner banner-display banner-link-anim banner-title-hidden">
              <a href="#">
                <img src="/images/demos/demo-12/banners/banner-2.jpg" alt="Banner" />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">Bags by Mood</a>
                </h3>
                <a href="#" className="btn btn-outline-white banner-link">
                  Discover Now
                </a>
              </div>
            </div>
            <div className="banner banner-display banner-link-anim banner-title-hidden">
              <a href="#">
                <img src="/images/demos/demo-12/banners/banner-3.jpg" alt="Banner" />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">The Trend Story</a>
                </h3>
                <a href="#" className="btn btn-outline-white banner-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3"></div>
      </div>

      <div className="bg-lighter pt-5 pb-5 mb-5">
        <div className="container">
          <div className="heading text-center mb-4">
            <h2 className="title">Recent Arrivals</h2>
            <p className="title-desc">Aliquam tincidunt mauris eurisus</p>
          </div>

          <div
            className="owl-carousel owl-simple"
            data-toggle="owl"
            data-owl-options='{
                    "nav": false, 
                    "dots": true,
                    "margin": 20,
                    "loop": false,
                    "responsive": {
                        "0": {
                            "items":2
                        },
                        "480": {
                            "items":2
                        },
                        "768": {
                            "items":3
                        },
                        "992": {
                            "items":4
                        },
                        "1200": {
                            "items":4,
                            "nav": true
                        }
                    }
                }'
          >
            <div className="product product-4">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="/images/demos/demo-12/products/product-1.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                  <img
                    src="/images/demos/demo-12/products/product-1-2.jpg"
                    alt="Product image"
                    className="product-image-hover"
                  />
                </a>

                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                    <span>add to wishlist</span>
                  </a>
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
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
                <div className="product-cat">
                  <a href="#">Clothing</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Linen-blend dress</a>
                </h3>
                <div className="product-price">$60.00</div>
                <div className="product-nav product-nav-dots">
                  <a href="#" className="active" style={{ background: '#e5dcb1' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="#" style={{ background: '#bacbd8' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="product product-4">
              <figure className="product-media">
                <span className="product-label label-primary">Sale</span>
                <a href="product.html">
                  <img
                    src="/images/demos/demo-12/products/product-2.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                  <img
                    src="/images/demos/demo-12/products/product-2-2.jpg"
                    alt="Product image"
                    className="product-image-hover"
                  />
                </a>

                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                    <span>add to wishlist</span>
                  </a>
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
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
                <div className="product-cat">
                  <a href="#">Shoes</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Sandals with lacing</a>
                </h3>

                <div className="product-price">
                  <span className="new-price">Now $70.00</span>
                  <span className="old-price">Was $84.00</span>
                </div>
              </div>
            </div>

            <div className="product product-4">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="/images/demos/demo-12/products/product-3.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                  <img
                    src="/images/demos/demo-12/products/product-3-2.jpg"
                    alt="Product image"
                    className="product-image-hover"
                  />
                </a>

                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                    <span>add to wishlist</span>
                  </a>
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
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
                <div className="product-cat">
                  <a href="#">Clothing</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Paper bag trousers</a>
                </h3>
                <div className="product-price">$60.00</div>
                <div className="product-nav product-nav-dots">
                  <a href="#" className="active" style={{ background: '#9fac76' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="#" style={{ background: '#333333' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="product product-4">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="/images/demos/demo-12/products/product-4.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                  <img
                    src="/images/demos/demo-12/products/product-4-2.jpg"
                    alt="Product image"
                    className="product-image-hover"
                  />
                </a>

                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                    <span>add to wishlist</span>
                  </a>
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
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
                <div className="product-cat">
                  <a href="#">Handbags</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Bucket bag</a>
                </h3>
                <div className="product-price">$350.00</div>
              </div>
            </div>

            <div className="product product-4">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="/images/demos/demo-12/products/product-5.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                  <img
                    src="/images/demos/demo-12/products/product-5-2.jpg"
                    alt="Product image"
                    className="product-image-hover"
                  />
                </a>

                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                    <span>add to wishlist</span>
                  </a>
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
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
                <div className="product-cat">
                  <a href="#">Clothing</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Silk-blend kaftan</a>
                </h3>
                <div className="product-price">$370.00</div>
              </div>
            </div>

            <div className="product product-4">
              <figure className="product-media">
                <span className="product-label label-new">New</span>
                <a href="product.html">
                  <img
                    src="/images/demos/demo-12/products/product-6.jpg"
                    alt="Product image"
                    className="product-image"
                  />
                  <img
                    src="/images/demos/demo-12/products/product-6-2.jpg"
                    alt="Product image"
                    className="product-image-hover"
                  />
                </a>

                <div className="product-action-vertical">
                  <a href="#" className="btn-product-icon btn-wishlist btn-expandable">
                    <span>add to wishlist</span>
                  </a>
                  <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view">
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
                <div className="product-cat">
                  <a href="#">Sandals</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Spring Sandals</a>
                </h3>
                <div className="product-price">$59.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="heading text-center mb-4">
          <h2 className="title">Popular Categories</h2>
          <p className="title-desc">Vestibulum auctor dapibus neque</p>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="banner banner-display banner-link-anim">
              <a href="#">
                <img src="/images/demos/demo-12/banners/banner-4.jpg" alt="Banner" />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">Accessories</a>
                </h3>
                <h4 className="banner-subtitle text-white">
                  <a href="#">16 Items</a>
                </h4>
                <a href="#" className="btn btn-outline-white banner-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-4 order-lg-last">
            <div className="banner banner-display banner-link-anim">
              <a href="#">
                <img src="/images/demos/demo-12/banners/banner-5.jpg" alt="Banner" />
              </a>

              <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white">
                  <a href="#">Jewellery</a>
                </h3>
                <h4 className="banner-subtitle text-white">
                  <a href="#">8 Items</a>
                </h4>
                <a href="#" className="btn btn-outline-white banner-link">
                  Shop Now
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="row">
              <div className="col-sm-6 col-lg-12">
                <div className="banner banner-display banner-link-anim">
                  <a href="#">
                    <img src="/images/demos/demo-12/banners/banner-6.jpg" alt="Banner" />
                  </a>

                  <div className="banner-content banner-content-center">
                    <h3 className="banner-title text-white">
                      <a href="#">Clothing</a>
                    </h3>
                    <h4 className="banner-subtitle text-white">
                      <a href="#">24 Items</a>
                    </h4>
                    <a href="#" className="btn btn-outline-white banner-link">
                      Discover Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-12">
                <div className="banner banner-display banner-link-anim">
                  <a href="#">
                    <img src="/images/demos/demo-12/banners/banner-7.jpg" alt="Banner" />
                  </a>

                  <div className="banner-content banner-content-center">
                    <h3 className="banner-title text-white">
                      <a href="#">Shoes</a>
                    </h3>
                    <h4 className="banner-subtitle text-white">
                      <a href="#">6 Items</a>
                    </h4>
                    <a href="#" className="btn btn-outline-white banner-link">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="icon-boxes-container bg-transparent">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon">
                    <i className="icon-rocket"></i>
                  </span>
                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Free Shipping</h3>
                    <p>Orders $50 or more</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon">
                    <i className="icon-rotate-left"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Free Returns</h3>
                    <p>Within 30 days</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon">
                    <i className="icon-info-circle"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                    <p>When you sign up</p>
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-lg-3">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon">
                    <i className="icon-life-ring"></i>
                  </span>

                  <div className="icon-box-content">
                    <h3 className="icon-box-title">We Support</h3>
                    <p>24/7 amazing services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default memo(Main)
