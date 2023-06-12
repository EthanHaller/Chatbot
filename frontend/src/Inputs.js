import React, { useState } from "react"
import axios from 'axios'

function Inputs({ updateMessagesDisplayed }) {
    const [message, setMessage] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:9000/messages/converse", {
            "message": message
        })
        .then((res) => updateMessagesDisplayed({"role": "user", "content": message}, res.data.result))
        .catch((err) => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="messageInput"></label>
            <input type="text" value={message} name="messageInput" id="messageInput" onChange={(e) => setMessage(e.target.value)}></input>
            <button type="submit">Send</button>
        </form>
    )
}

export default Inputs