import { Response } from "./common";

export interface DonateInvoiceData {
    id: string
    name: string
}

export interface DonateInvoiceRspData extends Response {
    data: DonateInvoiceData[]
}