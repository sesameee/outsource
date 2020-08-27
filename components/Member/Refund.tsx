import React from 'react'
import { OrderData } from '@/types/apis/orderList'
import { OrderDetailData } from '@/types/apis/orderDetail'
import { useTranslation } from '@/I18n'
import RefundList from './RefundList'
type RefundProps = {
    OrderList: OrderData[]
    tabIndex: number
    OrderDetail: OrderDetailData
}
const Refund: React.FC<RefundProps> = ({ OrderList, tabIndex, OrderDetail }: RefundProps) => {
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
                            <th>勾選退貨商品</th>
                            <th style={{ width: 380 }}>商品名稱</th>
                            <th>折扣後金額</th>
                            <th>購買數量</th>
                            <th>退貨數量</th>
                        </tr>
                    </thead>
                    <tbody>{Arr}</tbody>
                </table>
                <label htmlFor="invoice_type">退貨原因 *</label>
                <div className="select-custom">
                    <select
                        name="invoice_type"
                        id="invoice_type"
                        className="form-control"
                        onChange={(e) => setReason(Number(e.target.value))}
                        value={reason}
                    >
                        <option value={1} selected={true}>
                            衝動購物
                        </option>
                    </select>
                </div>
                <label htmlFor="shipInfo.receiveMemo">退貨原因描述 :</label>
                <textarea
                    name="shipInfo.receiveMemo"
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
                        <span className="btn-text">確認送出</span>
                        <span className="btn-hover-text">確認送出</span>
                    </button>
                </div>
            </div>
        </form>
    )
}
export default Refund
