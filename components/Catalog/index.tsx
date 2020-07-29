import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar'

import { useCatalog } from '@/hooks/Catalog'
import { CatalogSelectors } from '@/store'
import { useSelector } from 'react-redux'
import { CatalogData } from '@/types/apis/catalog'
//import { ProductData } from '@/types/apis/common'
const WidgetFrame: React.FC = () => {
    useCatalog()
    const catalog: CatalogData = useSelector(CatalogSelectors.getCatalogList)
    //console.log('catalog :>> ', catalog && catalog.categoryList && catalog.categoryList[0])

    const [toggled, setToggled] = useState(false)
    const handleToggleSidebar = (value: boolean) => {
        setToggled(value)
    }
    return (
        <div>
            <ProSidebar breakPoint="md" toggled={toggled} onToggle={handleToggleSidebar}>
                <SidebarContent>
                    {catalog &&
                        catalog.categoryList &&
                        catalog.categoryList.length &&
                        catalog.categoryList.map((item: CatalogData, index) => {
                            return (
                                <Menu key={`topMenu${index}`}>
                                    <SubMenu title={item.cName}>
                                        {item.cData &&
                                            item.cData.map((catItem: any, subindex) => {
                                                return (
                                                    <Menu key={`subMenu${subindex}`} className="sub-menu">
                                                        <SubMenu title={catItem.cName}>
                                                            {catItem.cData &&
                                                                catItem.cData.map(
                                                                    (lastItem: CatalogData, cindex: number) => {
                                                                        return (
                                                                            <MenuItem key={`menu${cindex}`}>
                                                                                <div className="filter-item">
                                                                                    <div className="custom-control custom-checkbox">
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            className="custom-control-input"
                                                                                            id={lastItem.cid}
                                                                                        />
                                                                                        <label
                                                                                            className="custom-control-label"
                                                                                            htmlFor={lastItem.cid}
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
