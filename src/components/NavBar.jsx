import React from 'react';

class NavBar extends React.Component {

    getClassName = (index) => {
        const { stage } = this.props
        const active = stage[index].isActive && ("is-active")
        const completed = stage[index].isFinished && ("is-completed")
        return `stage + ${active} + ${completed}`
    }

    render() {
        const { stage } = this.props

        return (<div>
            <div className="stages mb-4">

                {stage.map((item) => {
                    return (
                        <div className={this.getClassName(stage.indexOf(item))}>
                            <div className="stage__circle">{stage.indexOf(item) + 1}</div>
                            <div className="stage__caption mt-1">{item.name}</div>
                        </div>
                    )
                })
                }

            </div>
        </div>);
    }
}

export default NavBar;