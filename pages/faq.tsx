import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { navData } from '@/types/components/nav'
import { TFunction } from 'next-i18next'
import { withTranslation } from '@/I18n'
import Collapse from '@/components/commons/Collapse'
type MemberProps = {
    t: TFunction
}
const Member: React.FC<MemberProps> = ({ t }: MemberProps): JSX.Element => {
    const navList: navData[] = [
        {
            title: t('homepage'),
            link: '/',
        },
        {
            title: '常見問題解答',
            link: '',
        },
    ]

    const memberList = [
        {
            title: '如何加入會員',
            content: [
                '請至微風線上精品Breeze online 首頁點選註冊，即可註冊加入會員。',
                '或至微風積點禮遇Breeze Reward 網站或是App，首頁點選註冊，即可加入會員。',
            ],
        },
        {
            title: '需要加入會員才能在微風線上精品Breeze online上購物嗎',
            content: '是的，為提供您精緻的服務，建議先加入會員再進行購物。',
        },
        {
            title: '如果我是微風積點禮遇Breeze Rewards會員，在微風線上精品Breeze online網站消費也能累計積點嗎?',
            content: '當然可以，因為我們是同一套會員系統，您可享有線上線下同步會員積點優惠。',
        },
        {
            title: 'Breeze online有哪些付款方式',
            content: '目前僅接受信用卡付款。',
        },
        {
            title: 'Breeze online 有哪些寄送方式',
            content: '我們提供便利快速的宅配服務。',
        },
        {
            title: '下單後是否能更改寄送地址',
            content: '訂單成立後，您將無法更改寄送地址。若寄送地址填寫錯誤，請至訂單頁面，點選取消訂單，再重新下單。',
        },
        {
            title: '忘了帳號密碼怎麼辦?',
            content:
                '請至微風線上精品Breeze online在右上角點擊Sign In /Register(登入/註冊)， 點下忘記密碼後，驗證身分證字號和會員帳號（手機號碼），進行驗證和更改密碼流程。',
        },
    ]

    const orderList = [
        {
            title: '訂單商品需要有人簽收嗎',
            content: '是的，為了避免爭議和希望安全地把商品送到我們的貴賓手上，訂單商品需要有人簽收。',
        },
        {
            title: '我的訂單何時發送?',
            content: '您下單後，我們會向您發送訂單確認的電子郵件，訂購之商品會在訂單成立後2個工作天內出貨。',
        },
        {
            title: '出貨前能取消訂單嗎?',
            content: [
                '若商品尚未出貨，可以至訂單頁面，點選取消訂單來完成取消。',
                '若商品已完成出貨，則需等待收到商品時，至訂單頁面，點選我要退貨來完成退貨。',
            ],
        },
        {
            title: '如何和客服聯繫?',
            content: '請發郵件至: Breezeonline@breeze.com.tw 我們會盡快回復。',
        },
        {
            title: '如果我訂購的商品在寄送途中損壞或遺失該如何處理',
            content: [
                '如果包裹在運送的過程中損毀，請您在收到的當下立刻拍照留存，與我們的客服聯絡，留下您的姓名、聯絡方式、訂單號碼和附上盒子損毀的照片，我們會盡快為您處理。',
                '客服聯絡方式如下:',
                'Breezeonline@breeze.com.tw',
            ],
        },
        {
            title: '如果收到錯誤的商品該如何處理?',
            content: [
                '如果收到錯誤的商品，請您在收到的當下立刻拍照留存，與我們的客服聯絡，留下您的姓名、聯絡方式、訂單號碼和附上訂單明細和商品的照片，我們會盡快為您處理。',
                '客服聯絡方式如下:',
                'Breezeonline@breeze.com.tw',
            ],
        },
        {
            title: '收到商品後，保固書沒有蓋章要如何保固',
            content: '請列印購買證明，再與商品保證書釘在一起保留。',
        },
        {
            title: '為何在同一筆訂單的商品會在不同時間送達',
            content: '微風線上精品Breeze online 是從不同的地點出貨，所以即使是同時訂購的，包裹會分開送達。',
        },
        {
            title: '電器的退貨政策是什麼?',
            content:
                '依據消保法規定，微風線上精品Breeze online提供所有消費者收受商品後七天猶豫期(猶豫期並非試用期)之權利。且退回商品必須是全新狀態(家電產品未經插電使用) 且完整包裝 (保持商品、附件、吊牌、贈品、包裝、廠商紙箱及所有附隨文件或資料之完整性)，否則恕不接受退訂。',
        },
        {
            title: '是否提供換貨服務?',
            content: '目前僅提供退貨服務，如不滿意所訂購的商品，請耐心等待收到商品後，進行退貨流程後再重新購買。',
        },
    ]
    return (
        <div className="page-wrapper">
            <Header isIndex={false} token="" />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            常見問題解答<span></span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navList} />

                <div className="container">
                    <h2 className="title text-center mb-3">會員相關問題</h2>
                    <Collapse collapseData={memberList} />
                    <h2 className="title text-center mb-3">訂單相關問題</h2>
                    <Collapse collapseData={orderList} />
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withTranslation('translations')(Member)
