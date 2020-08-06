import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { withRouter } from 'next/router'
import { WithRouterProps } from 'next/dist/client/with-router'
import Nav from '@/components/Nav'

import { useSelector } from 'react-redux'
import { useChannelList } from '@/hooks/ChannelList'
import { ChannelListSelectors } from '@/store'
import { ChannelData, CategoryData } from '@/types/apis/channelList'
import WidgetFrame from '@/components/Catalog'
import ProductList from '@/components/Catalog/ProductList'
import { FilterType } from '@/types/Common'
import SortSelect from '@/components/Catalog/SortSelect'

interface CategoryProps extends WithRouterProps {
    filterProduct: Set<unknown>
}

const Category = ({ router }: CategoryProps): JSX.Element => {
    const query = router.query
    useChannelList()

    const channelList = useSelector(ChannelListSelectors.getChannelList)
    const navData: { title: any; link: string }[] = []
    const processNav = (id: string, list: CategoryData[] | ChannelData[], path: string, index: number) => {
        index++
        const category = (list as any[]).filter((item: CategoryData | ChannelData) => {
            return item.cid == id
        })
        if (category.length) {
            const categoryData = category[0]
            const subName = index == 1 ? categoryData.channelName : categoryData.cName
            path = `${path}/${categoryData.cid}`
            navData.push({
                title: subName,
                link: path,
            })
            const subList = index == 1 ? categoryData.categoryList : categoryData.cData
            if (subList && Array.isArray(query.id) && query.id[index]) {
                processNav(query.id[index], subList, path, index)
            }
        }
    }

    if (Array.isArray(query.id)) {
        processNav(query.id[0], channelList, '/category', 0)
    }

    const titleArr = [...navData].reverse()
    const title1 = titleArr[0]
    const title2 = navData.length > 1 ? titleArr[1] : titleArr[0]

    const [filterProduct, setfilterProduct] = React.useState(new Set())
    const [filterToggle, setFilterToggle] = React.useState(false)
    const [sortSelect, setsortSelect] = React.useState(FilterType.PRICE_ASCENDING)

    return (
        <div className="page-wrapper">
            <div className="filter-section">
                <WidgetFrame
                    filterProduct={filterProduct}
                    setfilterProduct={setfilterProduct}
                    filterToggle={filterToggle}
                    setFilterToggle={setFilterToggle}
                />
            </div>
            <Header isIndex={false} />
            <main className="main">
                <div
                    className="page-header text-center"
                    style={{ backgroundImage: "url('/images/page-header-bg.jpg')" }}
                >
                    <div className="container">
                        <h1 className="page-title">
                            {title1 && title1.title}
                            <span>{title2 && title2.title}</span>
                        </h1>
                    </div>
                </div>
                <Nav navData={navData}></Nav>
                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="toolbox">
                                    <button className="custom-btn" onClick={() => setFilterToggle(true)}>
                                        篩選
                                    </button>

                                    <div className="toolbox-right">
                                        <div className="toolbox-sort">
                                            <label htmlFor="sortby">排序:</label>
                                            <SortSelect sortSelect={sortSelect} setsortSelect={setsortSelect} />
                                        </div>
                                    </div>
                                </div>

                                <div className="products mb-3">
                                    <ProductList filterProduct={filterProduct} sortSelect={sortSelect} />
                                </div>
                            </div>
                            <aside className="col-lg-3 order-lg-first">
                                <div className="sidebar sidebar-shop">
                                    <div className="widget widget-clean">
                                        <label>篩選:</label>
                                        <a
                                            className="sidebar-filter-clear"
                                            onClick={() => {
                                                setfilterProduct(new Set())
                                            }}
                                        >
                                            清空
                                        </a>
                                    </div>
                                    <div className="filter-section-pc">
                                        <WidgetFrame
                                            filterProduct={filterProduct}
                                            setfilterProduct={setfilterProduct}
                                            filterToggle={filterToggle}
                                            setFilterToggle={setFilterToggle}
                                        />
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
export default withRouter(Category)
