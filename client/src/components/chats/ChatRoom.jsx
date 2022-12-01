import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Recentusers from "./Recentusers";
import Discussion from "./Discussion";


function ChatRoom() {

  const [sender, setSender] = useState("");
  const [contents, setContents] = useState("");
  const [reciever, setReciever] = useState("");
  const [recentUser, setRecentUser] = useState("");
  const [showMoreRecent, setShowMoreRecent] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [reciever_name, setReciever_name] = useState("Welcome to ChatNanga")

  return (
    <div className="bg-whitedress bg-cover bg-no-repeat h-full flex justify-center flex-col items-center">
      <div className="wraper w-[100%] flex justify-center gap-4 container m-10 p-8 bg-opacity-40 bg-slate-300 rounded-xl">
        <Sidebar />
          <Recentusers 
            reciever_name={reciever_name} setReciever_name={setReciever_name}
            sender={sender} setSender={setSender}
            contents={contents} setContents={setContents}
            reciever={reciever} setReciever={setReciever}
            recentUser={recentUser} setRecentUser={setRecentUser}
            newMessage={newMessage} setNewMessage={setNewMessage}
            showMoreRecent={showMoreRecent} setShowMoreRecent={setShowMoreRecent}/>
        <Discussion 
          reciever_name={reciever_name} setReciever_name={setReciever_name}
          sender={sender} setSender={setSender}
          contents={contents} setContents={setContents}
          reciever={reciever} setReciever={setReciever}
          newMessage={newMessage} setNewMessage={setNewMessage}/>
      </div>
    </div>
  );
}

export default ChatRoom;
