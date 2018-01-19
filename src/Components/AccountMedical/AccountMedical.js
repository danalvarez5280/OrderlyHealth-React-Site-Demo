import React, {Component} from 'react';

class AccountMedical extends Component {
  constructor() {
    super();
    this.state = {
      userAllergies: false,
      medText: false,
      illnessText: false,
      surgeryText: false,
      medProblemText: false,
      smokerText: false,
      pregnantText: false
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


  render() {
    const allergyText = this.state.userAllergies ? 'Yes' : 'No'
    const medText = this.state.userMeds ? 'Yes' : 'No'
    const illnessText = this.state.userIllness ? "Yes" : "No";
    const surgeryText = this.state.userSurgeries ? "Yes" : "No";
    const medProblemText = this.state.userMedProblems ? "Yes" : "No";
    const smokerText = this.state.userSmoker ? "Yes" : "No";
    const pregnantText = this.state.userPregnant ? "Yes" : "No";
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
        <div>Save</div>
      </div>
    )
  }
}

export default AccountMedical;