import React from 'react';
import countries from "../../data/countries"
import cities from "../../data/cities"


class Finish extends React.Component {

    render() {
        let { fields: { avatar, firstname, lastname, email, mobile, country, city } } = this.props
        const resultCountry = countries.filter((item) => {
            return item.id === Number(country)
        })
        country = resultCountry[0].name
        city = cities[Number(city)].name

        return (
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="col-4">
                        <img width="100%" src={avatar} alt="" />
                    </div>
                    <div className="col-8 d-flex align-items-center">
                        <h4>
                            {firstname} {lastname}
                        </h4>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12">
                        <p>
                            <strong>Email:</strong> {email}
                        </p>
                        <p>
                            <strong>Mobile:</strong> {mobile}
                        </p>
                        <p>
                            <strong>Location:</strong> {country}, {city}
                        </p>
                    </div>
                </div>
            </div>


        );
    }
}

export default Finish;