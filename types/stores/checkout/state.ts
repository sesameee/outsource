export type State = {
    isFetch: boolean
    message: string
    error: string
    data: Data
}
export type Data = {
    isRedirect: boolean
    paymentUrl: string
}
