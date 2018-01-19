import React, {Component} from 'react';

class AccountProfile extends Component {
  constructor() {
    super();
    this.state = { mobileLinked: false };
  }

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  genderSelect(e) {
    this.setState({
      gender: e.target.title
    })
  }

  linkMobile() {
    if(this.state.mobileLinked){
      this.setState({ mobileLinked: false });
    }
    else{
      this.setState({ mobileLinked: true });
    }
  }

  render() {
    console.log('account profile page', this.state)
    const femaleSelected = this.state.gender === 'female' ? 'selected' : 'not-selected';
    const maleSelected = this.state.gender === 'male' ? 'selected' : 'not-selected';
    const noneSelected = this.state.gender === 'N/A' ? 'selected' : 'not-selected';
    const phoneLinked = this.state.mobileLinked ? 'selected' : 'not-selected';
    return <div>
        Personal Info
        <div>
          <input title="userFirstName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="First Name" />
          <input title="userLastName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Last Name" />
          <input title="userDOB" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Birth Date" />
          <div>
            Gender
            <div className={femaleSelected} onClick={e => this.genderSelect(e)} title="female">
              Female
            </div>
            <div className={maleSelected} onClick={e => this.genderSelect(e)} title="male">
              Male
            </div>
            <div className={noneSelected} onClick={e => this.genderSelect(e)} title="N/A">
              Prefer Not to Say
            </div>
          </div>
        </div>
        Mailing Address
        <div>
          <input title="userAddress" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mailing Address" />
          <input title="userAddress2" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mailing Address 2" />
          <input title="userCity" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="City" />
          <input title="userState" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="State" />
          <input title="userZipcode" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Zipcode" />
          <input title="userCounty" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="County" />
        </div>
        Mobile Phone
        <div>
          <input title="userMobile" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mobile Phone Number" />
          <div className={phoneLinked} onClick={() => this.linkMobile()}>
            Link My Mobile Phone
          </div>
        </div>
      </div>;

  }
}

export default AccountProfile;