import React from 'react'

export interface CollapseDataVo {
    title: string
    content: string | string[]
}

type CollapseProps = {
    collapseData: CollapseDataVo[]
}
const Collapse: React.FC<CollapseProps> = ({ collapseData }: CollapseProps) => {
    const [CollapseIndex, setCollapseIndex] = React.useState(0)
    return (
        <div className="accordion accordion-rounded">
            {collapseData.map((item, index) => {
                const cardTitleClass = CollapseIndex != index ? 'collapsed' : ''
                const collapseClass = CollapseIndex == index ? 'collapse show' : 'collapse'
                return (
                    <div className="card card-box card-sm bg-light" key={index}>
                        <div className="card-header" onClick={() => setCollapseIndex(index)}>
                            <h2 className="card-title">
                                <a className={cardTitleClass}>{item.title}</a>
                            </h2>
                        </div>
                        <div id="collapse-1" className={collapseClass}>
                            <div className="card-body">
                                {Array.isArray(item.content)
                                    ? item.content.map((data, index) => {
                                          return <p key={index}>{data}</p>
                                      })
                                    : item.content}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Collapse
