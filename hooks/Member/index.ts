import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useMemberRoute = (): void => {
    console.log('aaa :>> ')
    const router = useRouter()
    useEffect(() => {
        const routes = [
            '/member/points',
            '/member/order',
            '/member/wishList',
            '/member/userInfo',
            '/member/passwordModify',
        ]
        router.events.on('routeChangeStart', (url) => {
            console.log('url :>> ', url)
        })

        router.beforePopState(({ asPath }) => {
            console.log('asPathSSSS :>> ', asPath)
            // I only want to allow these two routes!
            if (routes.indexOf(asPath) == -1) {
                // Have SSR render bad routes as a 404.
                window.location.href = asPath
                return false
            }

            return true
        })
    }, [router])
}
