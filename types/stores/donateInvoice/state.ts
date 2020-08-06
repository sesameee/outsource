import { DonateInvoiceData } from '@/types/apis/donateInvoice'

export type State = {
    isFetch: boolean
    donateInvoiceList: DonateInvoiceData[]
    error: string
}
