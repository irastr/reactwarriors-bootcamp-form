import React from 'react';
import countries from "../../data/countries"
import cities from "../../data/cities"

class Contacts extends React.Component {

    getCitiesArray = (id) => {

        const citiesArray = []
        for (let key in cities) {
            if (cities[key].country === Number(id)) {
                citiesArray.push({ id: key, name: cities[key].name })
            }
        }
        return citiesArray
    }


    render() {


        const { onChange, fields, errors } = this.props
        const cities = this.getCitiesArray(fields.country)

        return (<div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    value={fields.email}
                    onChange={onChange}
                />
                {errors.email ? (
                    <div className="invalid-feedback">
                        {errors.email}
                    </div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="email">Mobile</label>
                <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter mobile"
                    name="mobile"
                    value={fields.mobile}
                    onChange={onChange}
                />
                {errors.mobile ? (
                    <div className="invalid-feedback">
                        {errors.mobile}
                    </div>
                ) : null}
            </div>


            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                    id="country"
                    className="form-control"
                    name="country"
                    onChange={onChange}

                >
                    {countries.map(country => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>


            <div className="form-group">
                <label htmlFor="country">City</label>
                <select
                    id="city"
                    className="form-control"
                    name="city"
                    onChange={onChange}
                >
                    <option value="">
                        Select the city
                        </option>
                    {cities.map(country => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
                {errors.city ? (
                    <div className="invalid-feedback">
                        {errors.city}
                    </div>
                ) : null}
            </div>
        </div>);
    }
}

export default Contacts;