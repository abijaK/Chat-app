import axios from 'axios';
import React, { useEffect } from 'react';
// const PROD_URL=process.env.REACT_APP_API-URL;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export function Discussion({
  contents,
  setContents,
  reciever,
  reciever_name,
  newMessage,
  setNewMessage,
}) {
  // Retrieves from localStorage the id of the current user
  const idSender = JSON.parse(localStorage.getItem('user')).idSender;

  // Post sender._id with message's content to the reciever
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`${BASE_URL}/discuss/chats/add/`, {
      sender: idSender,
      content: contents,
      reciever: reciever,
    });
  };

  // Show messages by idsender in chatroom
  useEffect(() => {
    axios
      .get(`${BASE_URL}/discuss/chats/show/${idSender}`)
      .then((response) => {
        setNewMessage(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(newMessage);

  const messageFilter = newMessage.filter((message) => {
    if (message.reciever === reciever || message.sender === reciever) {
      return true;
    } else return false;
  });
  console.log('my message :', messageFilter);

  return (
    <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-between divide-y divide-gray-200">
        <div className="headerChatRoom flex justify-between gap-3 items-center">
          <div className="flex-shrink-0 w-12 h-12 ">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="use img"
            />
          </div>
          <div className="flex-1 min-w-0  justify-center">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {reciever_name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">{/* Online */}</p>
          </div>
        </div>

        <div className="bodyChatRoom mt-3 h-[65vh]">
          <div
            id="messages"
            className="flex flex-col scroll-my-2 space-y-4 p-3 h-[90%] overflow-y-scroll scrollbar scrollbar-w-2 scrolling-touch"
          >
            {messageFilter &&
              messageFilter.map((message, i) => {
                if (message.sender === idSender) {
                  return (
                    <div key={i} className="chat-message">
                      <div className="flex items-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                          <div>
                            <span
                              className="px-4 py-2 rounded-lg inline-block rounded-bl-none 
                                                bg-gray-300 text-gray-600"
                            >
                              {message.content}
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-1"
                        />
                      </div>
                    </div>
                  );
                } else
                  return (
                    <div key={i} className="chat-message">
                      <div className="flex items-end justify-end">
                        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                          <div>
                            <span
                              className="px-4 py-2 rounded-lg inline-block 
                                                        bg-blue-600 text-white "
                            >
                              {message.content}
                            </span>
                          </div>
                        </div>
                        <img
                          src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                          alt="My profile"
                          className="w-6 h-6 rounded-full order-2"
                        />
                      </div>
                    </div>
                  );
              })}
          </div>
        </div>

        <div className="footerChatRoom">
          <div className="border-t-1 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
            <div className="relative flex">
              <span className="absolute inset-y-0 flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-cyan-brightened focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </button>
              </span>

              {/* Message input */}
              <form className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-cyan-brightened rounded-md">
                <input
                  type="text"
                  placeholder="Write your message!"
                  onChange={(e) => setContents(e.target.value)}
                  className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 bg-cyan-lightened rounded-md py-3"
                  id="messages"
                />
              </form>

              <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-cyan-brightened focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </button>

                <button
                  onClick={submitHandler}
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-cyan-700 hover:bg-cyan-900 focus:outline-none"
                >
                  <span className="font-bold">Send</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-4 ml-2 transform rotate-90"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
