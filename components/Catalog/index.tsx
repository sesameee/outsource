import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar'
import { useCatalog } from '@/hooks/Catalog'
import { CatalogSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { CatalogData } from '@/types/apis/catalog'
import { useTranslation } from '@/I18n'
//import { ProductData } from '@/types/apis/common'

type WidgetFrameProps = {
    categoryType: string
    cid: string
    setfilterProduct: React.Dispatch<React.SetStateAction<any>>
    filterProduct: Set<unknown>
    filterToggle: boolean
    setFilterToggle: React.Dispatch<React.SetStateAction<any>>
}
const WidgetFrame: React.FC<WidgetFrameProps> = ({
    categoryType,
    cid,
    setfilterProduct,
    filterProduct,
    filterToggle,
    setFilterToggle,
}: WidgetFrameProps) => {
    const { t } = useTranslation()
    useCatalog(cid, categoryType)
    const catalog: CatalogData = useSelector(CatalogSelectors.getCatalogList)
    const handleToggleSidebar = (value: boolean) => {
        setFilterToggle(value)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSet = new Set(filterProduct)
        const key = e.target.id
        if (e.target.checked) {
            setfilterProduct(newSet.add(key))
        } else {
            newSet.has(key) && newSet.delete(key) && setfilterProduct(newSet)
        }
    }

    const MenuList = () => {
        if (catalog.categoryList.length == 0) {
            return <> </>
        }
        if (catalog.categoryType == 'subCategory') {
            return (
                <Menu key={`topMenu`}>
                    <SubMenu title={catalog.cName} defaultOpen={true}>
                        {catalog.categoryList &&
                            catalog.categoryList.map((item: any, subindex) => {
                                const id = `c${catalog.cid}-${item.cid}`
                                return (
                                    <MenuItem key={`menu${subindex}`}>
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id={id}
                                                    checked={filterProduct.has(id)}
                                                    onChange={handleChange}
                                                />
                                                <label className="custom-control-label" htmlFor={id}>
                                                    {item.cName}
                                                </label>
                                            </div>
                                            {<span className="item-count">{item.total}</span>}
                                        </div>
                                    </MenuItem>
                                )
                            })}
                    </SubMenu>
                </Menu>
            )
        } else if (catalog.categoryType == 'channel') {
            return catalog.categoryList.map((item: CatalogData, index) => {
                const count = (item.cData && item.cData.length) || 0
                return count > 0 ? (
                    <Menu key={`topMenu${index}`}>
                        <SubMenu title={item.cName} defaultOpen={true}>
                            {item.cData &&
                                item.cData.map((catItem: any, subindex) => {
                                    const countcatItem = (catItem.cData && catItem.cData.length) || 0
                                    return countcatItem > 0 ? (
                                        <Menu key={`subMenu${subindex}`} className="sub-menu">
                                            <SubMenu title={catItem.cName}>
                                                {catItem.cData &&
                                                    catItem.cData.map((lastItem: any, cindex: number) => {
                                                        const id = `c${item.cid}-${catItem.cid}-${lastItem.cid}`
                                                        return (
                                                            <MenuItem key={`menu${cindex}`}>
                                                                <div className="filter-item">
                                                                    <div className="custom-control custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            className="custom-control-input"
                                                                            id={id}
                                                                            checked={filterProduct.has(id)}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <label
                                                                            className="custom-control-label"
                                                                            htmlFor={id}
                                                                        >
                                                                            {lastItem.cName}
                                                                        </label>
                                                                    </div>
                                                                    <span className="item-count">{lastItem.total}</span>
                                                                </div>
                                                            </MenuItem>
                                                        )
                                                    })}
                                            </SubMenu>
                                        </Menu>
                                    ) : null
                                })}
                        </SubMenu>
                    </Menu>
                ) : null
            })
        } else {
            return catalog.categoryList.map((item: CatalogData, index) => {
                const count = (item.cData && item.cData.length) || 0
                return count > 0 ? (
                    <Menu key={`topMenu${index}`}>
                        <SubMenu title={item.cName} defaultOpen={true}>
                            {item.cData &&
                                item.cData.map((catItem: any, subindex) => {
                                    const countcatItem = (catItem.cData && catItem.cData.length) || 0
                                    const id = `c${item.cid}-${catItem.cid}`
                                    return countcatItem > 0 ? (
                                        <MenuItem key={`menu${subindex}`}>
                                            <div className="filter-item">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id={id}
                                                        checked={filterProduct.has(id)}
                                                        onChange={handleChange}
                                                    />
                                                    <label className="custom-control-label" htmlFor={id}>
                                                        {catItem.cName}
                                                    </label>
                                                </div>
                                                <span className="item-count">{catItem.total}</span>
                                            </div>
                                        </MenuItem>
                                    ) : null
                                })}
                        </SubMenu>
                    </Menu>
                ) : null
            })
        }
    }
    return (
        <div>
            <ProSidebar breakPoint="md" toggled={filterToggle} onToggle={handleToggleSidebar}>
                <div className="filter-section filter-top main-color">
                    <div onClick={() => setFilterToggle(false)}>{t('return')}</div>
                    <div>{t('commodity_category')}</div>
                    <div></div>
                </div>
                <SidebarContent>{MenuList()}</SidebarContent>
            </ProSidebar>
        </div>
    )
}

export default WidgetFrame
