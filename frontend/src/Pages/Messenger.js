import ChatOnline from "./ChatOnline";
import Conversation from "./Conversation";
import Message from "./Message";
import "./Messenger.css";

export default function Messenger(){
    return(
        <>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search For Matches" className="chatMenuInput" />
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="Message"></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <h2 className="text-center chatOnlineHeading">Currently Online</h2>
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>
    )
}