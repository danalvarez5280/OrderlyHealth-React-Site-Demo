import React, { Component } from "react";


export default class ChatPage extends Component {
  constructor() {
    super();
    this.state = {
      messages: [{user: 'louie', text: 'Please ask me question.'}],
      text: '',
    }
  }

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

  setMessage(str) {
    this.setState({
      text: str
    })
  };

  submitMessage(obj) {
    const newMessage = obj;
    const conversation = this.state.messages;

    conversation.push(newMessage);

    this.setState({
      messages: conversation,
      text: ''
    })
  };

  render() {
    const messageBoard = this.displayMessages();
    return (
      <div>
        <input 
          placeHolder='Ask Louie a Question' 
          value={this.state.text}
          onChange={(text) => this.setMessage(text)}/>
      </div>
    )}
};
