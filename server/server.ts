import express from 'express'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import nextI18next from '../I18n'
const devProxy = {
    '/api': {
        target: 'http://online-api.breezeonline.com/api/online',
        pathRewrite: { '^/api': '/' },
        changeOrigin: true,
    },
}
const port = process.env.PORT || 3000
const env = process.env.NODE_ENV
const dev = env !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
;(async () => {
    await app.prepare()
    const server = express()
    if (dev && devProxy) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { createProxyMiddleware } = require('http-proxy-middleware')
        Object.keys(devProxy).forEach(function (context) {
            server.use(context, createProxyMiddleware(devProxy['/api']))
        })
    }

    await nextI18next.initPromise
    server.use(nextI18NextMiddleware(nextI18next))

    server.get('*', (req, res) => handle(req, res))

    await server.listen(port)
    console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
