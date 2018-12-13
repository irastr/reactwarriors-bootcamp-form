import React from 'react';

class Avatar extends React.Component {


    render() {
        const { onChangeAvatar } = this.props
        return (
            <div className="form-group">
                <label htmlFor="avatar">Avatar</label>
                <input
                    type="file"
                    className="form-control-file"
                    id="avatar"
                    name="avatar"
                    onChange={onChangeAvatar}
                // value={fields.avatar}
                />
            </div>
        );
    }
}

export default Avatar;