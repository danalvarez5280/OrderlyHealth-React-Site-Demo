import React, {Component} from 'react';
import MainContainer from '../../Containers/MainContainer';

class AccountProfile extends Component {
  constructor(props) {
    super();
    this.state = { 
      userFirstName: props.userInfo.userFirstName,
      userLastName: props.userInfo.userLastName,
      userDOB: props.userInfo.userDOB,
      gender: props.userInfo.gender,
      userAddress: props.userInfo.userAddress,
      userAddress2: props.userInfo.userAddress2,
      userCity: props.userInfo.userCity,
      userState: props.userInfo.userState,
      userZipcode: props.userInfo.userZipcode,
      userCounty: props.userInfo.userCounty,
      userMobile: props.userInfo.userMobile,
      mobileLinked: props.userInfo.mobileLinked, 
    };
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
    this.state.mobileLinked ? this.setState({ mobileLinked: false }) :
                              this.setState({ mobileLinked: true });
  }

  saveInfo() {
    this.props.saveUserProfile(this.state)
  }

  render() {
    console.log('account profile page', this.props)
    const { 
      userFirstName, 
      userLastName, 
      userDOB, 
      userAddress, 
      userAddress2, 
      userCity, 
      userState, 
      userZipcode, 
      userCounty, 
      userMobile } = this.state;
    const femaleSelected = this.state.gender === 'female' ? 'selected' : 'not-selected';
    const maleSelected = this.state.gender === 'male' ? 'selected' : 'not-selected';
    const noneSelected = this.state.gender === 'N/A' ? 'selected' : 'not-selected';
    const phoneLinked = this.state.mobileLinked ? 'selected' : 'not-selected';
    return <div>
        Personal Info
        <div>
          <input title="userFirstName" type="text" value={userFirstName} className="full-input" onChange={e => this.grabInfo(e)} placeholder="First Name" />
          <input title="userLastName" type="text" value={userLastName} className="full-input" onChange={e => this.grabInfo(e)} placeholder="Last Name" />
          <input title="userDOB" type="text" value={userDOB} className="full-input" onChange={e => this.grabInfo(e)} placeholder="Birth Date" />
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
          <input title="userAddress" type="text" value={userAddress} className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mailing Address" />
          <input title="userAddress2" type="text" value={userAddress2} className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mailing Address 2" />
          <input title="userCity" type="text" value={userCity} className="full-input" onChange={e => this.grabInfo(e)} placeholder="City" />
          <input title="userState" type="text" value={userState} className="full-input" onChange={e => this.grabInfo(e)} placeholder="State" />
          <input title="userZipcode" value={userZipcode} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Zipcode" />
          <input title="userCounty" value={userCounty} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="County" />
        </div>
        Mobile Phone
        <div>
          <input title="userMobile" value={userMobile} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mobile Phone Number" />
          <div className={phoneLinked} onClick={() => this.linkMobile()}>
            Link My Mobile Phone
          </div>
        </div>
        <div onClick={() => this.saveInfo()}>Save</div>
      </div>;

  }
}

export default MainContainer(AccountProfile);