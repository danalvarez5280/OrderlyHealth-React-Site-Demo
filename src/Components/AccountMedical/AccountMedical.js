import React, {Component} from 'react';
import MainContainer from '../../Containers/MainContainer';

class AccountMedical extends Component {
  constructor() {
    super();
    this.state = {
      userAllergies: false,
      userMeds: false,
      userIllness: false,
      userSurgeries: false,
      userMedProblems: false,
      userSmoker: false,
      userPregnant: false,
    }
  }
  toggleTrue(e) {
    if(!this.state[e.target.title]){
      return this.setState({
        [e.target.title]: true
      })
    }
    this.setState({ [e.target.title]: false });
  }

  saveInfo() {
    this.props.saveUserMedicalInfo(this.state);
  }


  render() {
    const allergyText = this.state.userAllergies ? 'Yes' : 'No';
    const medText = this.state.userMeds ? 'Yes' : 'No';
    const illnessText = this.state.userIllness ? "Yes" : "No";
    const surgeryText = this.state.userSurgeries ? "Yes" : "No";
    const medProblemText = this.state.userMedProblems ? "Yes" : "No";
    const smokerText = this.state.userSmoker ? "Yes" : "No";
    const pregnantText = this.state.userPregnant ? "Yes" : "No";
    console.log('user medical question answers', this.props.userMedicalInfo);
    return (
      <div>
        Medical Information
        <div>
          <div>Do you have allergies? <div title='userAllergies' onClick={(e)=> this.toggleTrue(e)}>{allergyText}</div></div>
          <div>Are you on any medications? <div title='userMeds' onClick={(e)=> this.toggleTrue(e)}>{medText}</div></div>
          <div>Do you have any chronic illness? <div title='userIllness' onClick={(e)=> this.toggleTrue(e)}>{illnessText}</div></div>
          <div>Any prior surgeries? <div title='userSurgeries' onClick={(e)=> this.toggleTrue(e)}>{surgeryText}</div></div>
          <div>Any other past medical problems? <div title='userMedProblems' onClick={(e)=> this.toggleTrue(e)}>{medProblemText}</div></div>
          <div>Do you smoke? <div title='userSmoker' onClick={(e)=> this.toggleTrue(e)}>{smokerText}</div></div>
          <div>Are you pregnant or trying? <div title='userPregnant' onClick={(e)=> this.toggleTrue(e)}>{pregnantText}</div></div>
        </div>
        <div onClick={() => this.saveInfo()}>Save</div>
      </div>
    )
  }
}

export default MainContainer(AccountMedical);