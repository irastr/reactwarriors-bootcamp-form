import React from 'react';

class Basic extends React.Component {

    render() {
        const { onChange, fields, errors } = this.props
        return (<div>

            <div className="form-group">
                <label htmlFor="firstname">Firstname</label>
                <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    placeholder="Enter firstname"
                    name="firstname"
                    value={fields.firstname}
                    onChange={onChange}
                />
                {errors.firstname ? (
                    <div className="invalid-feedback">
                        {errors.firstname}
                    </div>
                ) : null}
            </div>

            <div className="form-group">

                <label htmlFor="lastname">Lastname</label>
                <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    placeholder="Enter lastname"
                    name="lastname"
                    value={fields.lastname}
                    onChange={onChange}
                />
                {errors.lastname ? (
                    <div className="invalid-feedback">
                        {errors.lastname}
                    </div>
                ) : null}
            </div>


            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    name="password"
                    value={fields.password}
                    onChange={onChange}
                />
                {errors.password ? (
                    <div className="invalid-feedback">
                        {errors.password}
                    </div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="repeatPassword">Repeat password</label>
                <input
                    type="password"
                    className="form-control"
                    id="repeatPassword"
                    placeholder="Repeat password"
                    name="repeatPassword"
                    value={fields.repeatPassword}
                    onChange={onChange}
                />
                {errors.repeatPassword ? (
                    <div className="invalid-feedback">
                        {errors.repeatPassword}
                    </div>
                ) : null}
            </div>

            <fieldset className="form-group">
                <div>Gender</div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={fields.gender === "male"}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="male">
                        Male
              </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={fields.gender === "female"}
                        onChange={onChange}
                    />
                    <label className="form-check-label" htmlFor="female">
                        Female
              </label>
                </div>
            </fieldset>


        </div>);
    }
}

export default Basic;