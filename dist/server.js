!(function (e) {
    var t = {}
    function n(r) {
        if (t[r]) return t[r].exports
        var o = (t[r] = { i: r, l: !1, exports: {} })
        return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
    }
    ;(n.m = e),
        (n.c = t),
        (n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r })
        }),
        (n.r = function (e) {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e
            var r = Object.create(null)
            if (
                (n.r(r),
                Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
            )
                for (var o in e)
                    n.d(
                        r,
                        o,
                        function (t) {
                            return e[t]
                        }.bind(null, o),
                    )
            return r
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default
                      }
                    : function () {
                          return e
                      }
            return n.d(t, 'a', t), t
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }),
        (n.p = ''),
        n((n.s = 6))
})([
    function (e, t) {
        e.exports = require('express')
    },
    function (e, t) {
        e.exports = require('next')
    },
    function (e, t) {
        e.exports = require('next-i18next/middleware')
    },
    function (e, t) {
        e.exports = require('next-i18next')
    },
    function (e, t) {
        e.exports = require('i18next-http-backend')
    },
    function (e, t) {
        e.exports = require('http-proxy-middleware')
    },
    function (e, t, n) {
        'use strict'
        n.r(t)
        var r = n(0),
            o = n.n(r),
            a = n(1),
            i = n.n(a),
            u = n(2),
            s = n.n(u),
            l = n(3),
            c = n.n(l),
            p = n(4),
            f = n.n(p)
        const d = new c.a({
                defaultLanguage: 'tw',
                defaultNS: 'translations',
                otherLanguages: ['en'],
                preload: ['tw'],
                use: [f.a],
                backend: { loadPath: 'https://sesameee.github.io/locales/{{lng}}/{{ns}}.json', parse: JSON.parse },
            }),
            { appWithTranslation: x, useTranslation: b, withTranslation: g, i18n: y } = d
        var v = d
        const h = process.env.PORT || 3e3,
            m = i()({ dev: !1 }),
            w = m.getRequestHandler()
        ;(async () => {
            await m.prepare()
            const e = o()()
            await v.initPromise,
                e.use(s()(v)),
                e.get('*', (e, t) => {
                    console.log('e :>> ', e.originalUrl)
                    w(e, t)
                }),
                await e.listen(h),
                console.log('> Ready on http://localhost:' + h)
        })()
    },
])
//# sourceMappingURL=server.js.map
