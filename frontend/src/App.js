import React, { useState } from 'react';
import './App.css';
import Inputs from './Inputs';

function App() {
  const [messagesDisplayed, setMessagesDisplayed] = useState([])

  console.log(messagesDisplayed)
  const allMessages = messagesDisplayed.map(mes => {
    return (
      <React.Fragment>
        <h6>{mes.role}</h6>
        <p>{mes.content}</p>
      </React.Fragment>
    )
  })

  return (
    <React.Fragment>
      <Inputs updateMessagesDisplayed={(userMes, aiMes) => setMessagesDisplayed([...messagesDisplayed, userMes, aiMes])}/>
      {allMessages}
    </React.Fragment>
  );
}

export default App;
