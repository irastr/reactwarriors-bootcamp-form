import React from "react";
import cities from "../../data/cities";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  fields: formStore.fields,
  getCountry: formStore.getCountry
}))
@observer
class Finish extends React.Component {
  render() {
    let {
      fields: { avatar, firstname, lastname, email, mobile, city },
      getCountry
    } = this.props;

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
              <strong>Location:</strong> {getCountry},{" "}
              {cities[Number(city)].name}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Finish;
