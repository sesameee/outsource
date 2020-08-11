import React, { useEffect } from 'react'
import ProductDetail from './ProductDetail'
import { TPDirect } from '@/types/Common'
declare let window: TPDirect
const SubmitTabPay: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.TPDirect.setupSDK(
                16011,
                'app_jJk5eM3hTTbRarr4Fh1lWJjoik5Hs4GjBU4m99Sgpb7erLn6aDCd8secnCMS',
                'sandbox',
            )

            // expirationDate: {
            //     // DOM object
            //     element: document.getElementById('card-expiration-date'),
            //     placeholder: 'MM / YY',
            // },
            // ccv: {
            //     element: '#card-ccv',
            //     placeholder: 'ccv',
            // },
            const fields = {
                number: {
                    // css selector
                    element: '#card-number',
                    placeholder: '**** **** **** ****',
                },
                expirationDate: {
                    // DOM object
                    element: document.getElementById('card-expiration-date'),
                    placeholder: 'MM / YY',
                },
                ccv: {
                    element: '#card-ccv',
                    placeholder: 'ccv',
                },
            }
            window.TPDirect.card.setup({
                // Display ccv field

                fields: fields,
                styles: {
                    // Style all elements
                    input: {
                        color: 'black',
                    },
                    // Styling ccv field
                    'input.ccv': {
                        // 'font-size': '16px'
                    },
                    // Styling expiration-date field
                    'input.expiration-date': {
                        // 'font-size': '16px'
                    },
                    // Styling card-number field
                    'input.card-number': {
                        'font-size': '0.7rem',
                        'line-height': '42px',
                    },
                    // style focus state
                    ':focus': {
                        // 'color': 'black'
                    },
                    // style valid state
                    '.valid': {
                        color: 'green',
                    },
                    // style invalid state
                    '.invalid': {
                        color: 'red',
                    },
                },
            })
        }
    }, [])
    return (
        <aside className="col-lg-3">
            <div className="summary">
                <h3 className="summary-title">訂單明細</h3>
                <ProductDetail />
                <div className="accordion-summary" id="accordion-payment">
                    <div className="card">
                        <div className="card-header" id="heading-1">
                            <h2 className="card-title">
                                <a
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-1"
                                    aria-expanded="true"
                                    aria-controls="collapse-1"
                                >
                                    信用卡 ( 一次付清 )
                                </a>
                            </h2>
                        </div>
                        <div
                            id="collapse-1"
                            className="collapse show"
                            aria-labelledby="heading-1"
                            data-parent="#accordion-payment"
                        >
                            <div className="card-body">
                                <div className="card-section-1">
                                    <label>信用卡卡號</label>
                                    <img className="item" src="/images/custom/mastercard.png" />
                                    <img className="item" src="/images/custom/jcb.png" />
                                    <img className="item" src="/images/custom/amex.png" />
                                </div>
                                <div id="card-number" className="tabpay-input"></div>
                                <div className="card-section-2">
                                    <div className="credit-expires item">
                                        <label>到期日 (月/日)</label>
                                        <div id="card-expiration-date" className="tabpay-input"></div>
                                    </div>
                                    <div className="item">
                                        <label>末三碼</label>
                                        <div id="card-ccv" className="tabpay-input"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="heading-1">
                            <h2 className="card-title">
                                <a
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-2"
                                    aria-expanded="false"
                                    aria-controls="collapse-2"
                                    className="collapsed card-select"
                                >
                                    <img className="card-icon" src="/images/custom/googlepay.png" />
                                    <span>Google pay</span>
                                </a>
                            </h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="heading-1">
                            <h2 className="card-title">
                                <a
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-2"
                                    aria-expanded="false"
                                    aria-controls="collapse-2"
                                    className="collapsed card-select"
                                >
                                    <img className="card-icon" src="/images/custom/applepay.png" />
                                    <span>Apple Pay</span>
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                    <span className="btn-text">送出訂單</span>
                    <span className="btn-hover-text">確認送出訂單</span>
                </button>
            </div>
        </aside>
    )
}
export default SubmitTabPay
