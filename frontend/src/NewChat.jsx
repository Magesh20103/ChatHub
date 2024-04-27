/* eslint-disable react/prop-types */
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatPage = (props) => {
    return (
        <div style={{height:'100vh'}}>
            <PrettyChatWindow
                projectId="ff9b67d6-5fea-4af5-ae5a-53f5e8b97187"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

export default ChatPage;