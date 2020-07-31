import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar'

import { useCatalog } from '@/hooks/Catalog'
import { CatalogSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { CatalogData } from '@/types/apis/catalog'
//import { ProductData } from '@/types/apis/common'

type WidgetFrameProps = {
    setfilterProduct: React.Dispatch<React.SetStateAction<any>>
    filterProduct: Set<unknown>
    filterToggle: boolean
    setFilterToggle: React.Dispatch<React.SetStateAction<any>>
}
const WidgetFrame: React.FC<WidgetFrameProps> = ({
    setfilterProduct,
    filterProduct,
    filterToggle,
    setFilterToggle,
}: WidgetFrameProps) => {
    useCatalog()
    const catalog: CatalogData = useSelector(CatalogSelectors.getCatalogList)
    console.log('filterToggle :>> ', filterToggle)
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
    return (
        <div>
            <ProSidebar breakPoint="md" toggled={filterToggle} onToggle={handleToggleSidebar}>
                <div className="filter-section filter-top">
                    <div onClick={() => setFilterToggle(false)}>返回</div>
                    <div>商品分類</div>
                    <div></div>
                </div>
                <SidebarContent>
                    {catalog &&
                        catalog.categoryList &&
                        catalog.categoryList.length &&
                        catalog.categoryList.map((item: CatalogData, index) => {
                            return (
                                <Menu key={`topMenu${index}`}>
                                    <SubMenu title={item.cName} open={true}>
                                        {item.cData &&
                                            item.cData.map((catItem: any, subindex) => {
                                                return (
                                                    <Menu key={`subMenu${subindex}`} className="sub-menu">
                                                        <SubMenu title={catItem.cName}>
                                                            {catItem.cData &&
                                                                catItem.cData.map(
                                                                    (lastItem: CatalogData, cindex: number) => {
                                                                        const id = `c${item.cid}-${catItem.cid}-${lastItem.cid}`
                                                                        return (
                                                                            <MenuItem key={`menu${cindex}`}>
                                                                                <div className="filter-item">
                                                                                    <div className="custom-control custom-checkbox">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            className="custom-control-input"
                                                                                            id={id}
                                                                                            checked={filterProduct.has(
                                                                                                id,
                                                                                            )}
                                                                                            onChange={handleChange}
                                                                                        />
                                                                                        <label
                                                                                            className="custom-control-label"
                                                                                            htmlFor={id}
                                                                                        >
                                                                                            {lastItem.cName}
                                                                                        </label>
                                                                                    </div>
                                                                                    <span className="item-count">
                                                                                        {lastItem.total}
                                                                                    </span>
                                                                                </div>
                                                                            </MenuItem>
                                                                        )
                                                                    },
                                                                )}
                                                        </SubMenu>
                                                    </Menu>
                                                )
                                            })}
                                    </SubMenu>
                                </Menu>
                            )
                        })}
                </SidebarContent>
            </ProSidebar>
        </div>
    )
}

export default WidgetFrame
