import React from 'react'

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            unreadmessage: ["work","friend"]
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.unreadmessage.length > 0 && 
                    <h2>You have {this.state.unreadmessage.length} unread message!</h2>
                }
            </div>
        )
    }


}

export default Message