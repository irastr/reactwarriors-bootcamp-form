import React from 'react';

class Contacts extends React.Component {

    render() {
        const countries = [
            {
                id: 1,
                name: "Ukraine"
            },
            {
                id: 2,
                name: "Germany"
            },
            {
                id: 3,
                name: "France"
            },
            {
                id: 4,
                name: "Spain"
            },
            {
                id: 5,
                name: "USA"
            }
        ];

        const { onChange } = this.props
        return (<div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    // value={}
                    onChange={onChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Mobile</label>
                <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter mobile"
                    name="mobile"
                    // value={}
                    onChange={onChange}
                />
            </div>


            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                    id="country"
                    className="form-control"
                    name="country"
                    // value={value}
                    onChange={onChange}
                >
                    {countries.map(country => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>




        </div>);
    }
}

export default Contacts;