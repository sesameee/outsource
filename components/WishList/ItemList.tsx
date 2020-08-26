import React, { memo } from 'react'
import { useBreezeDaily } from '@/hooks/BreezeDaily'
import { WishListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useTranslation } from '@/I18n'

const WishList: React.FC = () => {
    useBreezeDaily()
    const { t } = useTranslation()
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
                                <i className="icon-cart-plus"></i>{t('add_to_cart')}
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

export default memo(WishList)
