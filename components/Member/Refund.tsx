import React from 'react'
import { OrderData } from '@/types/apis/orderList'
import { OrderDetailData } from '@/types/apis/orderDetail'
import { useTranslation } from '@/I18n'
import RefundList from './RefundList'
import { useForm } from 'react-hook-form'
import { RefundReqData } from '@/types/apis/refund'
import { useRefundHandler } from '@/hooks/Refund'
type RefundProps = {
    OrderList: OrderData[]
    tabIndex: number
    OrderDetail: OrderDetailData
    setIsOpenRefund: any
}
const Refund: React.FC<RefundProps> = ({ OrderList, tabIndex, OrderDetail, setIsOpenRefund }: RefundProps) => {
    const { t } = useTranslation()
    const [reason, setReason] = React.useState(1)
    const [refundqty, setRefundqty] = React.useState(new Map())
    const [checkrefundId, setCheckRefundId] = React.useState(new Set())

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSet = new Set(checkrefundId)
        const key = e.target.value
        if (e.target.checked) {
            setCheckRefundId(newSet.add(key))
        } else {
            newSet.has(key) && newSet.delete(key) && setCheckRefundId(newSet)
        }
    }
    const handleQtyChange = (id: string, qty: number) => {
        const newMap = new Map(refundqty)
        if (newMap.has(id)) {
            newMap.set(id, qty)
            setRefundqty(newMap)
        }
    }
    const Arr: any = []
    const List = () => {
        OrderDetail.brandInfos.map((_item, oindex) => {
            _item &&
                _item.orderProducts.map((_pitem, pindex) => {
                    refundqty.set(_pitem.pid, _pitem.qty)
                    Arr.push(
                        <RefundList
                            item={_pitem}
                            _item={_item}
                            index={oindex}
                            key={pindex}
                            refundqty={refundqty}
                            handleQtyChange={handleQtyChange}
                            handleCheckChange={handleCheckChange}
                        />,
                    )
                })
        })
    }
    List()

    const refundProductList = () => {
        const list: any[] = []
        OrderDetail.brandInfos.map((_item) => {
            _item.orderProducts.map((_pitem) => {
                if (checkrefundId.has(_pitem.pid)) {
                    list.push(_pitem)
                }
            })
        })
        return list
    }
    const { handleRefundSubmit } = useRefundHandler()
    const { register, handleSubmit } = useForm<RefundReqData>()
    const onSubmit = (data: RefundReqData) => {
        const refundProduct = refundProductList()
        if (refundProduct.length > 0) {
            data = {
                ...data,
                refundProductList: refundProduct,
            }
        }

        handleRefundSubmit(data)
        setIsOpenRefund(false)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="refund">
                <h4>退貨申請</h4>
                <div className="listItem">
                    {t('transaction_id')} : {OrderList[tabIndex]?.transId} ( {t('breeze_online_boutique')} )
                </div>
                <div className="listItem">
                    {t('transaction_date')} : {OrderList[tabIndex]?.txDate}
                </div>
                <div className="listItem">
                    {t('transaction_status')} : {OrderList[tabIndex]?.txStatus}
                </div>
                <div className="listItem">
                    {t('receipt_number')} : {OrderList[tabIndex]?.invoiceNo}
                </div>
                <div className="line"></div>
                <table className="table table-wishlist table-mobile">
                    <thead>
                        <tr>
                            <th>{t('tick_return_commodity')}</th>
                            <th style={{ width: 380 }}>{t('commodity_name')}</th>
                            <th>{t('after_discount_price')}</th>
                            <th>{t('buy_amount')}</th>
                            <th>{t('return_amount')}</th>
                        </tr>
                    </thead>
                    <tbody>{Arr}</tbody>
                </table>
                <label htmlFor="reason">{t('return_reason')} *</label>
                <div className="select-custom">
                    <select
                        name="reason"
                        id="reason"
                        className="form-control"
                        onChange={(e) => setReason(Number(e.target.value))}
                        value={reason}
                        ref={register({ required: true })}
                    >
                        <option value={1}>衝動購物</option>
                    </select>
                </div>
                <label htmlFor="memo">{t('return_reason_desc')} :</label>
                <textarea
                    ref={register({ required: true })}
                    name="memo"
                    className="form-control"
                    cols={30}
                    rows={4}
                    placeholder="請描述原因 25 - 50 字"
                ></textarea>
                <div className="center-flex">
                    <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                        style={{ width: '3rem' }}
                    >
                        <span className="btn-text">{t('confirm_submit')}</span>
                        <span className="btn-hover-text">{t('confirm_submit')}</span>
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Refund
