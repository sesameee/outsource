import React, { memo } from 'react'
import { useTranslation } from '@/I18n'
import { useShoppingCartModifyHandler } from '@/hooks/ShoppingCart'
import { useWishModifyHandler, useWishList } from '@/hooks/Wish'

const WishList: React.FC<any> = (data) => {
    const { t } = useTranslation()

    return (
        <tbody>
            {data &&
                data.map((item: any, index: number) => (
                    <tr key={index}>
                        <td className="action-col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="signin-remember" />
                            </div>
                        </td>
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
                        <td className="price-col">${item.qty}</td>
                        <td className="price-col">${item.qty}</td>
                    </tr>
                ))}
        </tbody>
    )
}

export default memo(WishList)
