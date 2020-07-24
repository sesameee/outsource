import React, { ReactElement } from 'react'

export interface tabDataVo {
    title: string
    content: ReactElement
}

type TabProps = {
    tabData: tabDataVo[]
}
const Tab: React.FC<TabProps> = ({ tabData }: TabProps) => {
    const [tabIndex, setTabIndex] = React.useState(0)
    return (
        <div className="form-box">
            <div className="form-tab">
                <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                    {tabData.map((item, index) => {
                        const liClass = tabIndex == index ? 'nav-link active' : 'nav-link'
                        return (
                            <li className="nav-item" key={index} onClick={() => setTabIndex(index)}>
                                <a
                                    className={liClass}
                                    id="signin-tab"
                                    data-toggle="tab"
                                    role="tab"
                                    aria-controls="signin"
                                    aria-selected="true"
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="tab-content" id="tab-content-5">
                    {tabData.map((item, index) => {
                        const contentClass = tabIndex == index ? 'tab-pane fade show active' : 'tab-pane fade'
                        return (
                            <div className={contentClass} role="tabpanel" aria-labelledby="signin-tab" key={index}>
                                {item.content}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Tab
