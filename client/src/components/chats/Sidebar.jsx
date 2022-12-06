import React, { useEffect, useState } from 'react'
import { AiFillMessage } from 'react-icons/ai'


function Sidebar() {
  
  const [currentUser, setCurrentUser] = useState();
  
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('user')).name);
  }, []);
  
  return (
        <div className="w-[12%] flex flex-col items-center gap-20 max-w-md p-2 bg-cyan-600 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="relative flex flex-col justify-center">
            <div className="right-0 top-2 absolute w-[10px] z-1 h-[10px] rounded-full bg-green-500"></div>
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="use img"
              />
              <div className="flex my-2 justify-center">
                <p className='text-md text-cyan-50'>{currentUser}</p>
              </div>
          </div>
          {/* <div className="bg-white bg-opacity-30 flex justify-between gap-4 ml-14 rounded-tl-lg rounded-bl-lg">
            <div className="p-2">
              <AiFillMessage className="text-white w-8 h-8 ml-5" />
            </div>
            <div className="bg-yellow-200 w-2 justify-end"></div>
          </div> */}
        </div>
  )
}

export default Sidebar