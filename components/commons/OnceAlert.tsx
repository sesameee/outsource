import React, { memo, useEffect } from 'react'
import MyModal from '../MyModal'
import { useTranslation } from '@/I18n'
import { getCookie, setCookie } from '@/utils'

type OnceAlertProps = {
    setPropIsOpenFn: any
    setMemberIndex: any
}

const OnceAlert: React.FC<OnceAlertProps> = ({ setPropIsOpenFn, setMemberIndex }: OnceAlertProps) => {
    const [isFirst, setisFirst] = React.useState(true)
    const [isOpen, setisOpen] = React.useState(false)
    const [isChecked, setisChecked] = React.useState(false)
    useEffect(() => {
        if (isFirst) {
            if (getCookie('onceAlert') == null) {
                setCookie('onceAlert', '0')
                setTimeout(() => {
                    setisOpen(true)
                }, 2000)
            } else {
                const cookie = getCookie('onceAlert')
                if (cookie && Number(cookie) == 0) {
                    setTimeout(() => {
                        setisOpen(true)
                    }, 2000)
                }
            }
            setisFirst(false)
        }
    }, [isChecked, setisChecked, isFirst])
    const { t } = useTranslation()
    const contentDiv = () => {
        return (
            <div className="newsletter-popup-container" id="newsletter-popup-form">
                <div className="row no-gutters newsletter-popup-content">
                    <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                        <div className="banner-content text-center">
                            <h2 className="banner-title"> {t('onceAlert1')}</h2>
                            <p>{t('onceAlert2')}</p>
                            <div className="btn-frame">
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={() => {
                                        setisOpen(false)
                                        setMemberIndex(1)
                                        setPropIsOpenFn(true)
                                    }}
                                >
                                    <span>{t('register')}</span>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={() => {
                                        setisOpen(false)
                                        setMemberIndex(0)
                                        setPropIsOpenFn(true)
                                    }}
                                >
                                    <span>{t('login')}</span>
                                </button>
                            </div>
                            <div
                                className="custom-control custom-checkbox cursor-pointer"
                                onClick={() => {
                                    setisChecked(!isChecked)
                                    setCookie('onceAlert', !isChecked == true ? '1' : '0')
                                }}
                            >
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="register-policy-2"
                                    checked={isChecked}
                                />
                                <label className="custom-control-label" Html-for="register-policy-2">
                                    {t('onceAlert3')}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2-5col col-lg-5 ">
                        <img src="/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                    </div>
                </div>
            </div>
        )
    }
    return <MyModal content={contentDiv()} isOpen={isOpen} setPropIsOpenFn={setisOpen} />
}

export default memo(OnceAlert)
