import React, { memo } from 'react'

const ItemSubList: React.FC = () => {
  return (
    <div className="sub-item">
      <div className="menu-col">
        <div className="menu-title">Product Details</div>
        <ul>
          <li>
            <a href="product.html">Default</a>
          </li>
          <li>
            <a href="product-centered.html">Centered</a>
          </li>
          <li>
            <a href="product-extended.html">
              <span>
                Extended Info<span className="tip tip-new">New</span>
              </span>
            </a>
          </li>
          <li>
            <a href="product-gallery.html">Gallery</a>
          </li>
          <li>
            <a href="product-sticky.html">Sticky Info</a>
          </li>
          <li>
            <a href="product-sidebar.html">Boxed With Sidebar</a>
          </li>
          <li>
            <a href="product-fullwidth.html">Full Width</a>
          </li>
          <li>
            <a href="product-masonry.html">Masonry Sticky Info</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default memo(ItemSubList)
