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
