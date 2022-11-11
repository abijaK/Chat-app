import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chats() {
 const [chats, setchats] = useState([]);

  const fetchAllChats = async() => {
    const {data} = await axios.get('http://127.0.0.1:9000/api/chats/')
    setchats(data);
  }

  useEffect(() => {
    
    fetchAllChats()
  }, [])
  
  return (
    <div>
        {/* This is chat page */}
        { chats.map((chat) => (<div key={chat._id}>{chat.chatName}</div>))}
    </div>
  )
}

export default Chats