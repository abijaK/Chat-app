import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Chats() {
 const [chats, setchats] = useState([]);

  const fetchAllChats = async() => {
    const {data} = await axios.get('http://127.0.0.1:9000/api/user/')
    setchats(data);
    console.log(chats);
  }

  useEffect(() => {
    
    fetchAllChats()
  }, [])
  
  return (
    <div>

        {Array.isArray(chats) 
          ?  
        chats.map((chat) => {
          return(
          <div key={chat._id}>
            <h2>{chat.chatName}</h2>
            </div>          
          )})
          : null}

    </div>
  )
}

export default Chats