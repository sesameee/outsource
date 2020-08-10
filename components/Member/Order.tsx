import React, { ReactElement } from 'react'
// import CartItemList from '../Cart/CartItemList'

export interface tabDataVo {
    title: string
    content: ReactElement
}

const Order: React.FC = () => {
    const [tabIndex, setTabIndex] = React.useState(1)
    const a = [1, 2, 3, 4]
    return (
        <div className="accordion accordion-rounded" id="accordion-5">
            {a.map((index) => {
                return (
                    <div key={index} className="card card-box card-sm bg-light order-frame">
                        <div className="card-header" id="heading5-1">
                            <h2 className="card-title">
                                <a
                                    role="button"
                                    data-toggle="collapse"
                                    className={tabIndex == index ? '' : 'collapsed'}
                                    onClick={() => setTabIndex(index)}
                                >
                                    <div className="listItem">交易編號 : A123456789 ( 微風線上精品 )</div>
                                    <div className="listItem">交易時間 : 2020/07/12</div>
                                    <div className="listItem">交易狀態 : 交易成功</div>
                                    <div className="listItem">發票號碼 : XA00285260</div>
                                    <div className="listItem">商品總額 : 12800 元</div>
                                    <div className="listItem">折抵金額 : 800 元 ( 折扣碼 ) </div>
                                    <div className="listItem">實付金額 : 12000 元</div>
                                    <div className="listItem">獲得點數 : 1200 點</div>
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
                                <div className="listItem">配送方式 : 一般宅配</div>
                                <div className="listItem">配送地址 : 台北市信義區忠孝東路五段68號7樓</div>
                                <div>
                                    <table className="table table-cart table-mobile">
                                        <thead>
                                            <tr>
                                                <th>商品名稱</th>
                                                <th>商品售價</th>
                                                <th>數量</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tr key={index}>
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <a href="#">{/* <img src="" alt="Product image" /> */}</a>
                                                    </figure>

                                                    <h3 className="product-title">
                                                        <p>111</p>
                                                        aaaa
                                                        <p>blue / large</p>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="price-col">$123</td>
                                            <td className="quantity-col">1</td>
                                            <td className="remove-col" rowSpan={2}>
                                                <button type="button" className="btn btn-outline-primary-2 btn-block">
                                                    <span>我要退貨</span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr key={index}>
                                            <td className="product-col">
                                                <div className="product">
                                                    <figure className="product-media">
                                                        <a href="#">
                                                            <img src="" alt="Product image" />
                                                        </a>
                                                    </figure>

                                                    <h3 className="product-title">
                                                        <p>111</p>
                                                        aaaa
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="price-col">$123</td>
                                            <td className="quantity-col">1</td>
                                        </tr>
                                    </table>
                                    <div className="listItem">出貨廠商 : Alexander Wang</div>
                                    <div className="listItem">訂單狀態 : 已成立</div>
                                    <div className="listItem">配送進度 : 已出貨</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Order
