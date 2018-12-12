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
        // name: "Basic",
        isActive: true,
        isFinished: false
      },
      {
        // name: "Contacts",
        isActive: false,
        isFinished: false
      },
      {
        // name: "Avatar",
        isActive: false,
        isFinished: false
      },
      {
        // name: "Finish",
        isActive: false,
        isFinished: false
      }
    ],

    fields: {

      firstname: "iraaaa",
      lastname: "str",
      password: "str14795",
      repeatPassword: "str14795",
      gender: "male",
      email: "",
      mobile: "",
      country: "",
      city: "",

    },
    errors: {
      username: false,
      lastname: false,
      password: false,
      repeatPassword: false
    }

  }

  onChange = e => {
    // console.log(event.target.name, event.target.value, event.target.checked)

    // this.setState({
    //   [event.target.name]: event.target.value
    // });

    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => ({
      fields: { ...prevState.fields, [name]: value },
      errors: {
        ...prevState.errors,
        name: null
      }
    }));



  };

  onChangeGender = event => {
    this.setState({
      [event.target.name]: event.target.checked
    });
  }

  validateErrors = () => {
    const errors = {};
    if (this.state.fields.firstname.length < 5) {
      errors.firstname = "Must be 5 characters or more";
    }
    if (this.state.fields.lastname.length < 5) {
      errors.lastname = "Must be 5 characters or more";
    }

    if (this.state.fields.password.length < 3) {
      errors.password = "Must be 3 characters or more";
    }

    if (this.state.fields.password !== this.state.fields.repeatPassword) {
      errors.repeatPassword = "Must be equal password";
    }

    if (Object.keys(errors).length > 0) {
      // error
      this.setState({
        errors: errors
      });
    } else {
      this.setState({
        errors: {}
      });
    }


  }

  handleForwardClick = () => {


    this.validateErrors()

    const { errors } = this.state

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
    const { stage, currentStage, fields, errors } = this.state
    return (
      <div className="form-container card">
        <form className="form card-body">
          <NavBar stage={this.state.stage} />


          {currentStage === 0 ? (<Basic onChange={this.onChange} fields={fields} errors={errors} />)
            : currentStage === 1 ? (<Contacts />)
              : currentStage === 2 ? (<Avatar />)
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
