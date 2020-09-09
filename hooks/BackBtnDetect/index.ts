import { useEffect, useState } from 'react'
export const useBackBtnDetect = (): void => {
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        if (!isLoad) {
            setIsLoad(true)
        }
        if (isLoad && window) {
            window.onpageshow = function (event: { persisted: any }) {
                if (event.persisted) {
                    window.location.reload()
                }
            }
        }
    }, [isLoad])
}
