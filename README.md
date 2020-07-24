<<<<<<< HEAD
## 請使用yarn安裝
=======
## セットアップ

>>>>>>> develop
```
yarn install
```

<<<<<<< HEAD
## next 開發啟動
=======
## next サーバ起動

>>>>>>> develop
```
yarn dev
```

open http://localhost:3000

<<<<<<< HEAD
## 資料夾結構
=======
## ディレクトリ

>>>>>>> develop
```
.
├── components // View
├── containers // Controller
├── pages // 路徑
├── public // 靜態檔案
├── store // 狀態管理（Model）
├── services // API 管理
├── styles // 樣式
├── types // type定義
├── hooks // 共用的hooks
└── utils // 共用的function


```

<<<<<<< HEAD
=======
## 補足

-   以下サンプルページ (削除予定)

>>>>>>> develop
```
```

<<<<<<< HEAD

## Link
### 使用到的next資源
* [with-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)
* [with-redux-toolkit](https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit)
* [with-redux-observable](https://github.com/vercel/next.js/blob/canary/examples/with-redux-observable)

### [next.js](https://nextjs.org/)
=======
## リンク

### ベースプロジェクト

-   [with-typescript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)
-   [with-redux-toolkit](https://github.com/vercel/next.js/tree/canary/examples/with-redux-toolkit)
-   [with-redux-observable](https://github.com/vercel/next.js/blob/canary/examples/with-redux-observable)

### [next.js 公式](https://nextjs.org/)

## TODO

-   `redux-observable | WARNING: this middleware is already associated with a store. createEpicMiddleware should be called for every store.` の解消
-   `4. WrappedApp created new store with withRedux(WrappedApp) { initialState: undefined, initialStateFromGSPorGSSR: undefined }` の解消
    -   どちらもリロードすると出る
    -   見てる：https://github.com/redux-observable/redux-observable/issues/635
    -   見てる：https://github.com/redux-observable/redux-observable/pull/539
-   リセットスタイルの適用
-   テストの導入
    -   UT: jest
    -   VRT: [Storybook](https://storybook.js.org/docs/testing/automated-visual-testing/)
    -   E2E: [Cypress](https://www.cypress.io/)
>>>>>>> develop
