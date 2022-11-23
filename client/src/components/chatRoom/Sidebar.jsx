import React from 'react'
import { MdChatBubbleOutline } from 'react-icons/md'

function Sidebar() {
  return (
    <div className='h-max'>
        {/* Side bar */}
            <div className="w-[12%] max-w-md p-2 bg-blue-600 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex-shrink-0 w-12 h-12 ">
                    <img className='rounded-full' src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" alt="use img" />
                </div>
                <div className="w-8 h-8">
                    <MdChatBubbleOutline />
                </div>                
            </div>
    </div>
  )
}

export default Sidebar