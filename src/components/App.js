import React from "react";
import NavButtons from "./NavButtons"
import NavBar from "./NavBar"
import Avatar from "./body/Avatar"
import Basic from "./body/Basic"
import Contacts from "./body/Contacts"
import Finish from "./body/Finish"
// import _ from "lodash";

export default class App extends React.Component {
  state = {
    currentStage: 0,
    stage: [
      {
        isActive: true,
        isFinished: false
      },
      {
        isActive: false,
        isFinished: false
      },
      {

        isActive: false,
        isFinished: false
      },
      {

        isActive: false,
        isFinished: false
      }
    ],

    fields: {

      firstname: "iraaaa",
      lastname: "strikun",
      password: "str14795",
      repeatPassword: "str14795",
      gender: "male",
      email: "ira@gmail.com",
      mobile: "0639490872",
      country: "1",
      city: "",
      avatar: ""

    },
    errors: {
      username: false,
      lastname: false,
      password: false,
      repeatPassword: false,
      email: false,
      mobile: false
    }

  }

  onChange = event => {

    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      fields: { ...prevState.fields, [name]: value },
    }));
  };

  onChangeGender = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  onChangeAvatar = event => {

    const reader = new FileReader();
    reader.onload = event => {
      // console.log(event.target.result)
      this.setState(prevState => ({
        fields: { ...prevState.fields, avatar: event.target.result },
      }));
      // this.setState({
      //   fields: { avatar: event.target.result },
      // });
    };

    reader.readAsDataURL(event.target.files[0]);

  }

  validateErrors = () => {

    const { fields, currentStage } = this.state
    const errors = {};

    if (fields.firstname.length < 5) {
      errors.firstname = "Must be 5 characters or more";
    }
    if (fields.lastname.length < 5) {
      errors.lastname = "Must be 5 characters or more";
    }

    if (fields.password.length < 3) {
      errors.password = "Must be 3 characters or more";
    }

    if (fields.password !== fields.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    if (currentStage === 1) {

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.fields.email)) {
        errors.email = "Invalid email";
      }

      if (!this.state.fields.mobile.match(/^\d{10}$/)) {
        errors.mobile = "Invalid mobile";
      }

    }

    if (Object.keys(errors).length > 0) {

      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: {}
      });
      console.log("submit", this.state);
    }

    return errors;


  }

  handleForwardClick = () => {

    const errors = this.validateErrors()
    console.log(errors)


    if (Object.keys(errors).length === 0) {

      const newStage = [...this.state.stage]
      const newCurrentStage = this.state.currentStage + 1
      newStage[this.state.currentStage].isActive = false
      newStage[this.state.currentStage].isFinished = true
      newStage[newCurrentStage].isActive = true

      this.setState({
        stage: newStage,
        currentStage: newCurrentStage
      })

    }


  }

  handleBackClick = () => {
    const newStage = [...this.state.stage]
    const newCurrentStage = this.state.currentStage - 1
    newStage[this.state.currentStage].isActive = false
    newStage[this.state.currentStage].isFinished = true
    newStage[newCurrentStage].isActive = true

    this.setState({
      stage: newStage,
      currentStage: newCurrentStage
    })

  }

  render() {
    const { currentStage, fields, errors } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <NavBar stage={this.state.stage} />


          {currentStage === 0 ? (<Basic onChange={this.onChange} fields={fields} errors={errors} />)
            : currentStage === 1 ? (<Contacts fields={fields} onChange={this.onChange} errors={errors} />)
              : currentStage === 2 ? (<Avatar fields={fields} onChange={this.onChangeAvatar} errors={errors} />)
                : currentStage === 3 ? (<Finish />)

                  : (null)}

          <NavButtons
            handleForwardClick={this.handleForwardClick}
            handleBackClick={this.handleBackClick}
          />
        </form>
      </div>
    );
  }
}
