import React, { Component } from "react";

import MainContainer from '../../Containers/MainContainer';


class ChatPage extends Component {
  constructor(props) {
    super();
    this.state = {
      messages: props.conversation,
      text: '',
    }
  }

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  };

  displayMessages() {
    const currentConvo = this.state.messages;
    if(currentConvo.length > 0) {
      return currentConvo.map((elem, index) => {
        if(elem.name === 'user'){
          return (
            <div
              key={index}>
              <p>{elem.text}</p>
            </div>
          )
        }
        else {
          return (
            <div key={index}>
              <p>{elem.text}</p>
            </div>
          )
        }
      })
    }
    return (
      <div>
        <p>please enter a question</p>
      </div>
    )
  };

  submitMessage() {
    const newMessage = {name: 'user', text: this.state.text}
    const conversation = this.state.messages;

    conversation.push(newMessage);

    this.setState({
      messages: conversation,
      text: ''
    })
  };

  render() {
    const messageBoard = this.displayMessages();
    console.log('text', this.state.text)
    return <div>
      <div className='message-board'>
        {messageBoard}
      </div>
        <form>
          <input 
            className="text-field" 
            onChange={e => this.grabInfo(e)}
            placeholder="Ask Louie A Question" 
            title="text" 
            type="text"
            value={this.state.text} />
          <input 
            className="input-field form-button" 
            onClick={() => this.submitMessage()} 
            type="button" 
            value="Submit" />
        </form>
      </div>;
  }
};

export default MainContainer(ChatPage);
