import React from "react";
import NavButtons from "./NavButtons";
import NavBar from "./NavBar";
import Avatar from "./body/Avatar";
import Basic from "./body/Basic";
import Contacts from "./body/Contacts";
import Finish from "./body/Finish";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  stage: formStore.stage
}))
@observer
class App extends React.Component {
  render() {
    const { stage } = this.props;
    return (
      <div className="form-container card">
        <form className="form card-body">
          <NavBar stage={stage} />
          {stage[0].isActive && <Basic />}
          {stage[1].isActive && <Contacts />}
          {stage[2].isActive && <Avatar />}
          {stage[3].isActive && <Finish />}
          <NavButtons />
        </form>
      </div>
    );
  }
}

export default App;
