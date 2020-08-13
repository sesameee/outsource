import React, { ReactElement, useEffect, useCallback } from 'react'
import { useOrderList } from '@/hooks/OrderList'
import { OrderListSelectors, OrderDetailSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useOrderDetailHandler } from '@/hooks/OrderDetail'

export interface tabDataVo {
    title: string
    content: ReactElement
}

const Order: React.FC = () => {
    const [tabIndex, setTabIndex] = React.useState(0)
    const OrderList = useSelector(OrderListSelectors.orderList)
    const { getOrderDetail } = useOrderDetailHandler()
    const handelChangeIndex = useCallback(
        (index: number) => {
            setTabIndex(index)
            getOrderDetail(OrderList[index].transId)
        },
        [setTabIndex, getOrderDetail, OrderList],
    )
    useOrderList()
    useEffect(() => {
        if (OrderList.length > 0) {
            handelChangeIndex(0)
        }
    }, [OrderList, handelChangeIndex])

    const OrderDetail = useSelector(OrderDetailSelectors.orderDetail)

    return (
        <div className="accordion accordion-rounded" id="accordion-5" style={{ width: '100%' }}>
            {OrderList.map((_item, index) => {
                return (
                    <div key={index} className="card card-box card-sm bg-light order-frame">
                        <div className="card-header" id="heading5-1">
                            <h2 className="card-title">
                                <a
                                    role="button"
                                    data-toggle="collapse"
                                    className={tabIndex == index ? '' : 'collapsed'}
                                    onClick={() => handelChangeIndex(index)}
                                >
                                    <div className="listItem">交易編號 : {_item.transId} ( 微風線上精品 )</div>
                                    <div className="listItem">交易時間 : {_item.txDate}</div>
                                    <div className="listItem">交易狀態 : {_item.txStatus}</div>
                                    <div className="listItem">發票號碼 : {_item.invoiceNo}</div>
                                    <div className="listItem">商品總額 : {_item.totalAmount} 元</div>
                                    <div className="listItem">折抵金額 : {_item.discount} 元 ( 折扣碼 ) </div>
                                    <div className="listItem">實付金額 : {_item.pay} 元</div>
                                    <div className="listItem">獲得點數 : {_item.points} 點</div>
                                </a>
                            </h2>
                        </div>
                        <div
                            id="collapse5-1"
                            className={tabIndex == index ? 'collapse show' : 'collapse'}
                            aria-labelledby="heading5-1"
                            data-parent="#accordion-5"
                        >
                            <div className="card-body">
                                <div className="listItem">配送方式 : {OrderDetail.shipInfo.shipType}</div>
                                <div className="listItem">配送地址 : {OrderDetail.shipInfo.receiveAddress}</div>
                                {OrderDetail.brandInfos.map((_item, oindex) => {
                                    return (
                                        <div key={oindex}>
                                            <table className="table table-cart table-mobile">
                                                <thead>
                                                    <tr>
                                                        <th>商品名稱</th>
                                                        <th>商品售價</th>
                                                        <th>數量</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                {_item.orderProducts.map((_pitem, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <a href="#">
                                                                            <img
                                                                                src={_pitem.imageUrl}
                                                                                alt="Product image"
                                                                            />
                                                                        </a>
                                                                    </figure>

                                                                    <h3 className="product-title">
                                                                        <p>{_item.name}</p>
                                                                        {_pitem.productName}
                                                                        <p>{_pitem.spec1}</p>
                                                                    </h3>
                                                                </div>
                                                            </td>
                                                            <td className="price-col">${_pitem.price}</td>
                                                            <td className="quantity-col">{_pitem.qty}</td>
                                                            <td className="remove-col" rowSpan={2}>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-outline-primary-2 btn-block"
                                                                >
                                                                    <span>我要退貨</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </table>
                                            <div className="listItem">出貨廠商 : {_item.name}</div>
                                            <div className="listItem">訂單狀態 : {_item.orderStatus}</div>
                                            <div className="listItem">配送進度 : {_item.shippingStatus}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Order
