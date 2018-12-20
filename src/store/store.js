import { observable, action, computed } from "mobx";
import cities from "../data/cities";
import countries from "../data/countries";

export default class Store {
  @observable
  fields = {
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
  };

  @observable
  currentStage = 0;

  @observable
  stage = [
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
  ];

  @observable
  errors = {};

  @action
  onChange = event => {
    this.fields[event.target.name] = event.target.value;
    this.errors[event.target.name] = false;
  };

  validateErrors = () => {
    const {
      firstname,
      lastname,
      password,
      repeatPassword,
      mobile,
      email,
      city,
      avatar
    } = this.fields;
    const errors = {};

    if (this.currentStage === 0) {
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

    if (this.currentStage === 1) {
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

    if (this.currentStage === 2) {
      if (!avatar) {
        errors.avatar = "Required";
      }
    }
    return errors;
  };

  @action
  handleForwardClick = () => {
    const errors = this.validateErrors();
    if (Object.keys(errors).length === 0) {
      this.updateStage(1, "finished");
    } else {
      this.errors = errors;
    }
  };

  @action
  handleBackClick = () => {
    this.updateStage(-1);
  };

  @action
  updateStage = (step, finished) => {
    const newCurrentStage = this.currentStage + step;
    this.stage[this.currentStage].isActive = false;
    this.stage[newCurrentStage].isActive = true;
    if (finished) {
      this.stage[this.currentStage].isFinished = true;
    }
    this.currentStage = this.currentStage + step;
  };

  @action
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
  };

  @computed
  get getCitiesOptions() {
    const citiesArray = [];
    for (let key in cities) {
      if (cities[key].country === Number(this.fields.country)) {
        citiesArray.push({ id: key, name: cities[key].name });
      }
    }
    return citiesArray;
  }

  @computed
  get getCountry() {
    return countries.find(item => Number(this.fields.country) === item.id).name;
    // const resultCountry = countries.filter(item => {
    //   return item.id === Number(this.fields.country);
    // });
    // return resultCountry[0].name;
  }

  getClassName = index => {
    const active = this.stage[index].isActive && "is-active";
    const completed = this.stage[index].isFinished && "is-completed";
    return `stage + ${active} + ${completed}`;
  };
}
