import React from 'react';

import TodoApp from "./TodoApp"
import ClickApp from "./ClickApp"
import "./App.css";
import HandleClickApp from './HandleClickApp'
import LoadingApp from './LoadingApp'
import Message from './Message'
import ContactCardApp from './ContactCardApp'
import QuestinsApp from './QuestionsApp'
import LoginApp from './LoginApp'
import FetchStarWar from './FetchStarWar'
import FormNameApp from './FormNameApp'


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      text: "This is the main App"
    }
  }

  render() {
    return (
      <div className="app">
        <LoadingApp />
        <br/>
        <FormNameApp  />
        <br/>
        <FetchStarWar />
        <br/>
        <LoginApp />
        <QuestinsApp />
        <br/>
        <ContactCardApp/>
        <br/>
        <h1>{this.state.text}</h1>
        <br/>
        <ClickApp />
        <br/>
        <HandleClickApp />
        <br/>
        <TodoApp />
        <br/>
        <Message />
      </div>
    )
  }
}


export default App