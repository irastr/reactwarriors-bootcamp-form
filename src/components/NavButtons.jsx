import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  handleBackClick: formStore.handleBackClick,
  handleForwardClick: formStore.handleForwardClick,
  currentStage: formStore.currentStage
}))
@observer
class NavButtons extends React.Component {
  render() {
    const { handleBackClick, handleForwardClick, currentStage } = this.props;
    // console.log(currentStage)
    return (
      <div className="d-flex justify-content-center">
        {currentStage !== 3 ? (
          <React.Fragment>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleBackClick()}
              disabled={currentStage === 0}
            >
              Назад
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleForwardClick()}
            >
              Вперед
            </button>
          </React.Fragment>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default NavButtons;
