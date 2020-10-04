import { i18n } from '@/I18n'

export const changeLanguage = () => {
    i18n.changeLanguage('en')
}

/**
 * 浮點數加法
 * @param arg1 數字
 * @param arg2 數字
 */
export const accAdd = (arg1: number, arg2: number): number => {
    let r1, r2
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    const m = Math.pow(10, Math.max(r1, r2))
    return (arg1 * m + arg2 * m) / m
}

/**
 * 浮點數減法
 * @param arg1 數字
 * @param arg2 數字
 */
export const accSubtr = (arg1: number, arg2: number): number => {
    let r1, r2
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    const m = Math.pow(10, Math.max(r1, r2))
    const n = r1 >= r2 ? r1 : r2
    const o = (arg1 * m - arg2 * m) / m
    return Number(o.toFixed(n))
}

/**
 * 浮點數乘法
 * @param arg1 數字
 * @param arg2 數字
 */
export const accMul = (arg1: number, arg2: number): number => {
    let m = 0
    const s1 = arg1.toString(),
        s2 = arg2.toString()
    try {
        m += s1.split('.')[1].length
        // eslint-disable-next-line no-empty
    } catch (e) {}
    try {
        m += s2.split('.')[1].length
        // eslint-disable-next-line no-empty
    } catch (e) {}
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}

/**
 * 浮點數除法
 * @param arg1 數字
 * @param arg2 數字
 */
export const accDiv = (arg1: number, arg2: number): number => {
    let t1 = 0,
        t2 = 0
    try {
        t1 = arg1.toString().split('.')[1].length
        // eslint-disable-next-line no-empty
    } catch (e) {}
    try {
        t2 = arg2.toString().split('.')[1].length
        // eslint-disable-next-line no-empty
    } catch (e) {}

    const r1 = Number(arg1.toString().replace('.', ''))
    const r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
}

/**
 * 設定cookie
 * @param name key
 * @param val value
 */
export const setCookie = (name: string, val: string): void => {
    const date = new Date()
    const value = val

    // Set it expire in 30 days
    date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000)

    // Set it
    if (typeof window !== 'undefined') {
        document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/'
    }
}

/**
 * 取得cookie
 * @param name key
 */
export const getCookie = (name: string): string | undefined => {
    const value = '; ' + document.cookie
    const parts = value.split('; ' + name + '=')

    if (parts.length == 2) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return parts.pop().split(';').shift()
    }
}

/**
 * 刪除cookie
 * @param name key
 */
export const deleteCookie = (name: string): void => {
    const date = new Date()

    // Set it expire in -1 days
    date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000)

    // Set it
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/'
}
import crypto from 'crypto'
const SECRET_IV = 'BRZAPPEAccessVec'
const SECRET_KEY = 'BRZAPPEAccessKey'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
/**
 * 加密
 * @param cipherText string
 */
export const encodeToken = (cipherText: string) => {
    const clearEncoding = 'utf8'
    const cipherEncoding = 'base64'
    const cipherChunks = []
    const cipher = crypto.createCipheriv('aes-128-cbc', SECRET_KEY, SECRET_IV)
    cipher.setAutoPadding(true)
    cipherChunks.push(cipher.update(cipherText, clearEncoding, cipherEncoding))
    cipherChunks.push(cipher.final(cipherEncoding))
    return cipherChunks.join('')
}
import { Opera } from '@/types/Common'

declare let window: Opera
export const mobileCheck = () => {
    let check = false
    ;(function (a) {
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                a,
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                a.substr(0, 4),
            )
        )
            check = true
    })(navigator.userAgent || navigator.vendor || (window && window.opera))
    return check
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const toThousandFilter = (num: number | undefined) => {
    return num && (+num || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

export const currency = () => {
    return 'NT$'
}
