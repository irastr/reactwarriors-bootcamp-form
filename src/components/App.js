import React from "react";
import NavButtons from "./NavButtons"
import NavBar from "./NavBar"
import Avatar from "./body/Avatar"
import Basic from "./body/Basic"
import Contacts from "./body/Contacts"
import Finish from "./body/Finish"


export default class App extends React.Component {
  state = {
    currentStage: 0,
    stage: [
      {
        name: "Basic",
        isActive: true,
        isFinished: false
      },
      {
        name: "Contacts",
        isActive: false,
        isFinished: false
      },
      {
        name: "Avatar",
        isActive: false,
        isFinished: false
      },
      {
        name: "Finish",
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
    errors: {}

  }

  onChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      fields: { ...prevState.fields, [name]: value },
      errors: { ...prevState.errors, [name]: false }
    }));

    // Use functional setState as this.state is used  te change current state in this case.
    // Change errors state to hide styled of invalid-feedback in onChange.
  };



  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      // Reuse onChange by passing to it sinthetic target with name and value 
      this.onChange({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });

    };
    reader.readAsDataURL(event.target.files[0]);
  }

  validateErrors = () => {

    const { fields: { firstname, lastname, password, repeatPassword, mobile, email, city, avatar }, currentStage } = this.state
    const errors = {};

    if (currentStage === 0) {

      if (firstname.length < 5) {
        errors.firstname = "Must be 5 characters or more";
      }
      if (lastname.length < 5) {
        errors.lastname = "Must be 5 characters or more";
      }
      if (password.length < 3) {
        errors.password = "Must be 3 characters or more";
      }
      if (password !== repeatPassword) {
        errors.repeatPassword = "Must be equal password";
      }

    }

    if (currentStage === 1) {

      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        errors.email = "Invalid email";
      }
      if (!mobile.match(/^\d{10}$/)) {
        errors.mobile = "Invalid mobile";
      }
      if (!city) {
        errors.city = "Required";
      }

    }

    if (currentStage === 2) {
      if (!avatar) {
        errors.avatar = "Required"
      }
    }
    return errors;

  }

  handleForwardClick = () => {
    const errors = this.validateErrors()

    if (Object.keys(errors).length === 0) {
      this.updateStage(1, "finished")
    } else {
      this.setState({
        errors
      });
    }

  }

  handleBackClick = () => {
    this.updateStage(-1)
  }


  updateStage = (step, finished) => {
    this.setState(prevState => {
      const newStage = prevState.stage
      const newCurrentStage = prevState.currentStage + (step)
      newStage[prevState.currentStage].isActive = false
      newStage[newCurrentStage].isActive = true
      if (finished) {
        newStage[prevState.currentStage].isFinished = true
      }
      return {
        stage: newStage,
        currentStage: newCurrentStage
      }
    })
  }

  render() {
    const { currentStage, fields, errors, stage } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <NavBar stage={stage} />
          {stage[0].isActive && (<Basic onChange={this.onChange} fields={fields} errors={errors} />)}
          {stage[1].isActive && (<Contacts fields={fields} onChange={this.onChange} errors={errors} />)}
          {stage[2].isActive && (<Avatar fields={fields} onChangeAvatar={this.onChangeAvatar} errors={errors} avatar={fields.avatar} />)}
          {stage[3].isActive && (<Finish fields={fields} />)}
          <NavButtons
            handleForwardClick={this.handleForwardClick}
            handleBackClick={this.handleBackClick}
            currentStage={currentStage}

          />
        </form>
      </div>
    );
  }
}
