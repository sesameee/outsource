import { VerifyCodeData } from "@/types/apis/verifyCode";

export type State = {
    isFetch: boolean
    data: VerifyCodeData
    error: string
}
