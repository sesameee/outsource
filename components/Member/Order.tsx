import React, { ReactElement, useEffect, useCallback } from 'react'
import { useOrderList } from '@/hooks/OrderList'
import { OrderListSelectors, OrderDetailSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { useOrderDetailHandler } from '@/hooks/OrderDetail'
import { useTranslation } from '@/I18n'
import MyModal from '../MyModal'
import Refund from './Refund'

export interface tabDataVo {
    title: string
    content: ReactElement
}

const Order: React.FC = () => {
    const { t } = useTranslation()
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
    }, [OrderList.length, handelChangeIndex])

    const OrderDetail = useSelector(OrderDetailSelectors.orderDetail)
    const [IsOpenRefund, setIsOpenRefund] = React.useState(false)

    return (
        <div className="accordion accordion-rounded" id="accordion-5" style={{ width: '100%' }}>
            {OrderList && (
                <MyModal
                    content={
                        <Refund
                            OrderDetail={OrderDetail}
                            OrderList={OrderList}
                            tabIndex={tabIndex}
                            setIsOpenRefund={setIsOpenRefund}
                        />
                    }
                    isOpen={IsOpenRefund}
                    setPropIsOpenFn={setIsOpenRefund}
                />
            )}
            {OrderList &&
                OrderList.map((_item, index) => {
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
                                        <div className="listItem">
                                            {t('transaction_id')} : {_item.transId} ( {t('breeze_online_boutique')} )
                                        </div>
                                        <div className="listItem">
                                            {t('transaction_date')} : {_item.txDate}
                                        </div>
                                        <div className="listItem">
                                            {t('transaction_status')} : {_item.txStatus}
                                        </div>
                                        <div className="listItem">
                                            {t('receipt_number')} : {_item.invoiceNo}
                                        </div>
                                        <div className="listItem">
                                            {t('commodity_amount')} : {_item.totalAmount} {t('yuan')}
                                        </div>
                                        <div className="listItem">
                                            {t('discount_amount')} : {_item.discount} {t('yuan')} ( {t('promo_code')} ){' '}
                                        </div>
                                        <div className="listItem">
                                            {t('real_paid_amount')} : {_item.pay} {t('yuan')}
                                        </div>
                                        <div className="listItem">
                                            {t('get_point')} : {_item.points} {t('point')}
                                        </div>
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
                                    <div className="listItem">
                                        {t('delivery_type_text_only')} : {OrderDetail.shipInfo.shipType}
                                    </div>
                                    <div className="listItem">
                                        {t('delivery_address_text_only')} : {OrderDetail.shipInfo.receiveAddress}
                                    </div>
                                    {OrderDetail.brandInfos.map((_item, oindex) => {
                                        return (
                                            <div key={oindex}>
                                                <table className="table table-cart table-mobile">
                                                    <thead>
                                                        <tr>
                                                            <th>{t('commodity_name')}</th>
                                                            <th>{t('commodity_price_2')}</th>
                                                            <th>{t('amount')}</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
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
                                                                            onClick={() => setIsOpenRefund(true)}
                                                                            type="button"
                                                                            className="btn btn-outline-primary-2 btn-block"
                                                                        >
                                                                            <span>{t('return_commodity')}</span>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </tbody>
                                                </table>
                                                <div className="listItem">
                                                    {t('shipment_vendor')} : {_item.name}
                                                </div>
                                                <div className="listItem">
                                                    {t('order_status_text_only')} : {_item.orderStatus}
                                                </div>
                                                <div className="listItem">
                                                    {t('delivery_progress')} : {_item.shippingStatus}
                                                </div>
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
