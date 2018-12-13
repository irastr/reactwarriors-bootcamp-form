import React from 'react';

class NavButtons extends React.Component {

    render() {
        const { handleBackClick, handleForwardClick } = this.props
        return (<div className="d-flex justify-content-center">
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleBackClick()}
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
        </div>);
    }
}

export default NavButtons;