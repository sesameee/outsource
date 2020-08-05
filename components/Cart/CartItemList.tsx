import React, { memo } from 'react'
import { useShoppingCartList } from '@/hooks/ShoppingCart'
import { ShoppingCartListSelectors } from '@/store'
import { useSelector } from 'react-redux'
import NumberInput from '../commons/NumberInput'
import { ShoppingCartProductData } from '@/types/apis/common'

const CartItemList: React.FC = () => {
    useShoppingCartList()
    const shoppingCartListData = useSelector(ShoppingCartListSelectors.getShoppingCartList)
    const [sum, setSum] = React.useState(useSelector(ShoppingCartListSelectors.getShoppingCartPriceList))
    return (
        <tbody>
            {shoppingCartListData &&
                shoppingCartListData.map((item, index) => {
                    const detail = item.shoppingCartProducts[0]
                    if (detail) {
                        return <ItemDetail detail={detail} sum={sum} setSum={setSum} index={index} name={item.name} />
                    }
                })}
        </tbody>
    )
}

type ItemDetailProps = {
    sum: any[]
    setSum: any
    detail: ShoppingCartProductData
    index: number
    name: string
}
const ItemDetail: React.FC<ItemDetailProps> = ({ detail, index, name, sum, setSum }: ItemDetailProps) => {
    const [amount, setAmount] = React.useState(detail?.qty || 0)
    const amountCB = () => {
        if (sum[index]) {
            sum[index] = detail?.price && amount && detail?.price * amount
            setSum([...sum])
        }
    }
    return (
        <tr key={index}>
            <td className="product-col">
                <div className="product">
                    <figure className="product-media">
                        <a href="#">
                            <img src={detail?.imageUrl} alt="Product image" />
                        </a>
                    </figure>

                    <h3 className="product-title">
                        <p>{name}</p>
                        {detail?.productName}
                    </h3>
                </div>
            </td>
            <td className="price-col">${detail?.price}</td>
            <td className="quantity-col">
                <div className="cart-product-quantity">
                    <NumberInput
                        amount={amount}
                        setAmount={setAmount}
                        inputName={`qty${index}`}
                        minValue={1}
                        maxValue={detail?.orderMax}
                        amountCB={amountCB}
                    />
                </div>
            </td>
            <td className="total-col">${detail?.price && amount && detail?.price * amount}</td>
            <td className="total-col"></td>
            <td className="remove-col">
                <button className="btn-remove">
                    <i className="icon-close"></i>
                </button>
            </td>
        </tr>
    )
}

export default memo(CartItemList)
