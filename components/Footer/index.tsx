import React, { memo } from 'react'
// import Link from 'next/link'
import { withTranslation } from '@/I18n'
import { TFunction } from 'next-i18next'
import Link from 'next/link'

type FooterProps = {
    t: TFunction
}
const Footer: React.FC<FooterProps> = ({ t }: FooterProps) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-frame">
                    <div className="left-item">
                        <dl>
                            <dt>{t('store_info')}</dt>
                            <dd>
                                <a href="https://www.breezecenter.com/branches/001" target="blank">
                                    {t('store_location')}
                                </a>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{t('customer_service')}</dt>
                            <dd>{t('contact_us')}</dd>
                            <dd>
                                <Link href="/faq">{t('q_n_a')}</Link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{t('shopping_online')}</dt>
                            <dd>
                                <Link href="/faq">{t('order_problem')}</Link>
                            </dd>
                            <dd>{t('privacy_policy')}</dd>
                            <dd>
                                <Link href="/html/service.html">
                                    <a target="_blank">{t('terms_of_service')}</a>
                                </Link>
                            </dd>
                        </dl>
                        <dl>
                            <dt>{t('about_us')}</dt>
                            <dd>{t('about_breeze')}</dd>
                            <dd>
                                <a href="https://www.breezedaily.com.tw/" target="blank">
                                    {t('breezedaily')}
                                </a>
                            </dd>
                        </dl>
                    </div>

                    <div className="right-item">
                        <div className="app-frame">
                            <div className="app-text">{t('download_our_ios_app')}</div>
                            <img className="app-img margin-bottom" src="/images/custom/appstore_ios.png" />
                        </div>
                        <div className="app-frame">
                            <div className="app-text">{t('download_our_android_app')}</div>
                            <img className="app-img" src="/images/custom/appstore_android.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <img className="logo" src="/images/breezeonline_logo.png" />
                <div className="info">
                    <p>微風股份有限公司 BREEZE COUTURE</p>
                    <p>
                        台北市松山區復興南路一段39號 No.39, Sec.1, Fuxing S.Rd., Songshan Dist., Taipei City 105,Taiwan
                        (R.O.C.)
                    </p>
                    <p>客服專線：02-6600-1832</p>
                </div>
            </div>
        </footer>
    )
}

export default withTranslation('translations')(memo(Footer))
