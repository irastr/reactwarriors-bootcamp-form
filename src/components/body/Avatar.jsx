import React from 'react';


class Avatar extends React.Component {


    render() {
        const { onChangeAvatar, avatar, errors } = this.props
        const defaultAvatar = "https://reactwarriors.github.io/reactwarriors-stage-2/static/media/default-avatar.59337bae.png"
        return (
            <div>
                <img className="mb-4" width="100%" src={avatar || defaultAvatar} alt="avatar" />

                <div className="mb-4">
                    <div className="custom-file">
                        <input
                            type="file"
                            className="custom-file-input"
                            id="customFile"
                            name="avatar"
                            onChange={onChangeAvatar}
                        // Don't need value={fields.avatar} for file type
                        />
                        <label
                            className={"custom-file-label"}
                            htmlFor="customFile"
                        >
                            Choose avatar
                        </label>
                        {errors.avatar ? (
                            <div className="invalid-feedback">
                                {errors.avatar}
                            </div>
                        ) : null}
                    </div>


                </div>
            </div>
        );
    }
}

export default Avatar;

