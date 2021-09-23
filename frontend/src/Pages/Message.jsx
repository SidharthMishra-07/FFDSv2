import './message.css'

export default function Message({own}) {
    return (
        <div>
            <div className={own ? "message own": "message"}>
                <div className="messageTop">
                    <img className="messageImg" src="https://images.pexels.com/photos/9575446/pexels-photo-9575446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />

                    <p className="messageText">Hello This is a Message</p>
                </div>
                <div className="messageBottom">1 Hour Ago</div>
            </div>
        </div>
    )
}
