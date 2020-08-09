import React, { memo } from 'react'
import MyModal from '../MyModal'

const Text: React.FC = () => {
    return (
        <div className="buyNotice">
            <p>
                1.
                請注意，如您刪除會員帳號或遭停止或禁止使用會員帳號者時，系統將即刻刪除該帳號之關聯之點數、紅利、及所有會員活動優惠等，恕不另行通知。本公司對該會員或任何第三人均不承擔責任。
            </p>

            <p>
                2.
                您一旦在微風線上依照網頁所定方式、條件及流程完成訂購程序，就表示您提出要約、願意依照本約定條款及相關網頁上所載明的約定內容、交易條件或限制，訂購該商品或服務。您所留存的資料如地址、電話如有變更，應即時通知微風線上協助進行相關處理，而且您不得以資料不符為理由，否認訂購行為或拒絕付款。
            </p>

            <p>
                3.
                在您完成線上訂購程序以後，本系統會自動經由電子郵件或其他方式寄給您一封通知，但是該項通知只是通知您本系統已經收到您的訂購訊息，不代表交易已經完成或契約已經成立，微風線上保留是否接受您的訂單的權利。如果微風線上確認交易條件無誤、您所訂購之商品仍有存貨或所訂購之服務仍可提供、且無其他微風線上無法接受訂單之情形，微風線上會直接通知配合廠商出貨，不另行通知，但是您可以在【Breeze
                Rewards
                APP】查詢出貨狀況。若交易條件有誤、商品無存貨、服務無法提供、或有微風線上無法接受訂單之情形，微風線上得拒絕接受訂購。
            </p>

            <p>
                4.
                微風會員點數將於訂單取消或是退貨/退款程序完成後發放，如您於購買後進行退貨作業，微風有權將點數或相關優惠扣抵返還。
            </p>

            <p>
                5.
                若您選擇以信用卡支付價金，您在線上輸入信用卡相關資訊，目的是為了向發卡機構確認信用卡之有效性及取得交易授權，不表示您已經付款、也不代表交易已經完成或契約已經成立，微風線上保留是否接受您的訂單的權利；在微風線上接受您的訂購以前，您無需付款，微風線上不會請領信用卡交易款項，該筆交易金額也不會出現在您的信用卡帳單中。若您選擇以信用卡支付價金、且以分期方式支付，則該等分期付款服務係由您的信用卡發卡機構提供，分期付款之債權債務關係存在於您與信用卡發卡機構之間，除相關網頁上有特別標示者外，您所需支付之利息及其計算方式、是否另有信用保險或保證人之設定或涉入等，均依照您與信用卡發卡機構間之相關約定內容定之，請注意查閱您與信用卡發卡機構間之相關約定。
            </p>

            <p>
                6.
                您瞭解並同意，雖然微風線上會盡力維護相關資料的正確性，但微風線上不以任何明示或默示的方式保證所有出現在網頁上、或相關訊息上的資料均為完整、正確、即時的資訊。關於相關商品或服務之訂購數量上限，依各該商品或服務銷售網頁及訂購流程中相關網頁之記載，超過可訂購數量者，微風線上僅依該數量上限出貨。如果相關商品或服務的規格、圖片或說明有誤，仍以原廠、代理商、進口商、經銷商或服務提供者的資料為準。如果網頁上、或相關訊息所標示的價格有誤：
                ※若標示價格比正確價格高，微風線上只會向您收取較低的正確價格；
                ※若標示價格比正確價格低，微風線上保留拒絕接受訂單的權利。
            </p>

            <p>
                7.
                如果相關商品或服務的規格、圖片、說明、價格、或相關交易條件有誤，微風線上得在您完成訂購程序後二日內，拒絕接受您的訂單。
            </p>

            <p>
                8.
                所有標示為「建議售價」、「零售價」或類似語意的價格，都只是原廠、代理商、進口商、經銷商或服務提供者所建議的售價、一般性的標價、或一般性的評估價格，不代表任何特定區域、商家、或特定時間的實際成交價格。
            </p>

            <p>
                9.
                您所訂購的所有商品或服務，關於其品質、保固及售後服務等，都是由各該商品或服務的原廠、代理商、進口商、經銷商或服務提供者，依照其所制定的條件，負責對您提供品質承諾、保固及售後服務等，但微風線上承諾協助您解決關於因為線上消費所產生的疑問或爭議。
            </p>

            <p>
                10.
                關於您所訂購之商品或服務，其運費之計價及負擔方式，都是由各該商品或服務的原廠、代理商、進口商、經銷商或服務提供者，依各該商品或服務銷售網頁及訂購流程中相關網頁之記載為準。
            </p>

            <p>
                11.
                您可以依照各該商品或服務銷售網頁及訂購流程中相關網頁所記載之方式、條件及限制，選擇您所訂購之商品或服務之交付地點及方式。您所訂購的商品或服務，若經配送兩次無法送達、且經無法聯繫超過三天者，您會授權並同意本公司得直接為您辦理後續退款流程，微風線上將會酌收部分物流退回的配送費用後再予以費用退款。
            </p>

            <p>
                12.
                您在微風線上所進行的所有線上消費及與該等交易有關之事項，您和微風線上都同意以電子文件為表示方法；微風線上電腦系統將自動紀錄相關電子交易資料，您亦可經由網路於登入系統後自行查詢相關交易資料，如果您發現交易資料不正確，應立即通知微風線上。
            </p>

            <p>
                13.
                微風線上網站內可能包含許多連結，這些被連結網站或網頁上的所有資訊，都是由被連結網站所提供，微風線上不以任何明示或默示的方式擔保其內容的正確性、可信度或即時性。
            </p>

            <p>
                14.
                如果微風線上電子商務內的商品說明、價格及相關交易條件等，是由配合廠商所自行製作及上載，則微風線上不以任何明示或默示的方式擔保其內容的正確性、可信度或即時性。
            </p>

            <p>
                15.
                關於消費申訴或爭議，您可以在登入系統後，依照線上客服系統所定之處理機制、程序及相關聯絡資訊提出申訴或爭議，微風線上的客服人員將盡速為您提供服務。
            </p>
        </div>
    )
}

type BuyNoticeProps = {
    setOpenBuyNotice: any
    openBuyNotice: boolean
}
const BuyNotice: React.FC<BuyNoticeProps> = ({ setOpenBuyNotice, openBuyNotice }: BuyNoticeProps) => {
    return <MyModal content={<Text />} isOpen={openBuyNotice} setPropIsOpenFn={setOpenBuyNotice} />
}

export default memo(BuyNotice)
