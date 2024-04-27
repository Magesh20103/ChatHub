/* eslint-disable react/prop-types */
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        'ff9b67d6-5fea-4af5-ae5a-53f5e8b97187',
        props.user.username,
        props.user.secret
    );
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatPage;