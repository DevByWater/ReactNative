import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'

class Chat extends Component{
    render(){
        return(
             <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                    
                }}
             />
        )
    }
}

Chat.defaultProps = {
    name: 'Sean'
}

Chat.PropTypes = {
    name: React.PropTypes.string
}

export default Chat