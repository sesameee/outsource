import React, { memo } from 'react'
import dynamic from 'next/dynamic'
import ConditionallyRender from '@/components/commons/ConditionallyRender'
const OwlCarousel = dynamic(import('react-owl-carousel'))
const OwlItem: React.FC = () => {
  return (
    <ConditionallyRender client>
      <OwlCarousel
        className="owl-carousel owl-simple"
        dots
        margin={20}
        responsive={{
          '0': {
            items: 2,
          },
          '480': {
            items: 2,
          },
          '768': {
            items: 3,
          },
          '992': {
            items: 4,
          },
          '1200': {
            items: 4,
            nav: true,
          },
        }}
      >
        <div className="product product-4">
          <figure className="product-media">
            <a href="product.html">
              <img src="/images/demos/demo-12/products/product-1.jpg" alt="Product image" className="product-image" />
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
              <img src="/images/demos/demo-12/products/product-2.jpg" alt="Product image" className="product-image" />
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
              <img src="/images/demos/demo-12/products/product-3.jpg" alt="Product image" className="product-image" />
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
              <img src="/images/demos/demo-12/products/product-4.jpg" alt="Product image" className="product-image" />
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
              <img src="/images/demos/demo-12/products/product-5.jpg" alt="Product image" className="product-image" />
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
              <img src="/images/demos/demo-12/products/product-6.jpg" alt="Product image" className="product-image" />
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
      </OwlCarousel>
    </ConditionallyRender>
  )
}

export default memo(OwlItem)
