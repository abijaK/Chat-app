import React from 'react'
import { AiFillMessage } from 'react-icons/ai'


function Sidebar() {
  return (
        <div className="w-[12%] flex flex-col items-center gap-20 max-w-md p-2 bg-cyan-600 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-shrink-0 w-12 h-12 ">
            <img
              className="rounded-full"
              src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
              alt="use img"
            />
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