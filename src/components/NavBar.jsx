import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  stage: formStore.stage,
  getClassName: formStore.getClassName
}))
@observer
class NavBar extends React.Component {
  render() {
    const { stage, getClassName } = this.props;

    return (
      <div>
        <div className="stages mb-4">
          {stage.map(item => {
            return (
              <div
                key={item.name}
                className={getClassName(stage.indexOf(item))}
              >
                <div className="stage__circle">{stage.indexOf(item) + 1}</div>
                <div className="stage__caption mt-1">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavBar;
