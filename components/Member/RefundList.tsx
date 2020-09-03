import React, { memo } from 'react'
// import { useTranslation } from '@/I18n'
import { ShoppingCartProductData } from '@/types/apis/common'
import { BrandInfoData } from '@/types/apis/orderDetail'
import NumberInput from '../commons/NumberInput'

type RefundListProps = {
    _item: BrandInfoData
    item: ShoppingCartProductData
    index: number
    refundqty: any
    handleQtyChange: any
    handleCheckChange: any
}

const RefundList: React.FC<RefundListProps> = ({
    item,
    index,
    _item,
    handleCheckChange,
    handleQtyChange,
}: RefundListProps) => {
    // const { t } = useTranslation()
    const [qty, setQty] = React.useState(1)
    return (
        <tr key={index}>
            <td className="price-col">
                <div>
                    <input
                        type="checkbox"
                        value={item.pid}
                        onChange={handleCheckChange}
                        onClick={(e) => {
                            handleCheckChange(e)
                        }}
                    />
                    {/* <label className="custom-control-label">{}</label> */}
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
                        <p>{_item.name}</p>
                        <a href="#">{item.productName}</a>
                    </h3>
                </div>
            </td>
            <td className="price-col">${item.price}</td>
            <td className="price-col">{item.qty}</td>
            <td className="price-col">
                <NumberInput
                    inputName="qty"
                    amount={qty}
                    setAmount={setQty}
                    minValue={1}
                    maxValue={item.qty}
                    amountCB={() => {
                        handleQtyChange(item.pid, qty)
                    }}
                />
            </td>
        </tr>
    )
}

export default memo(RefundList)
