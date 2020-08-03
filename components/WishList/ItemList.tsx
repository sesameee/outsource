import React, { memo } from 'react'
import { useBreezeDaily } from '@/hooks/BreezeDaily'
import { WishListSelectors } from '@/store'
import { useSelector } from 'react-redux'

const BreezeDaily: React.FC = () => {
    useBreezeDaily()
    const { data } = useSelector(WishListSelectors.getWishList)

    return (
        <tbody>
            {data &&
                data.map((item, index) => (
                    <tr key={index}>
                        <td className="product-col">
                            <div className="product">
                                <figure className="product-media">
                                    <a href="#">
                                        <img src={item.imageUrl} alt="Product image" />
                                    </a>
                                </figure>

                                <h3 className="product-title">
                                    <a href="#">{item.pName}</a>
                                </h3>
                            </div>
                        </td>
                        <td className="price-col">${item.price}</td>
                        <td className="action-col">
                            <button className="btn btn-block btn-outline-primary-2">
                                <i className="icon-cart-plus"></i>加入購物車
                            </button>
                        </td>
                        <td className="remove-col">
                            <button className="btn-remove">
                                <i className="icon-close"></i>
                            </button>
                        </td>
                    </tr>
                ))}
        </tbody>
    )
}

export default memo(BreezeDaily)
