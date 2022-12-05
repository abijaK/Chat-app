import axios from 'axios'
import React, { useEffect } from 'react'

function Recentusers({ reciever, setReciever, recentUser, setRecentUser, reciever_name, setReciever_name }) {

  
useEffect(() => {
  axios.get("http://localhost:9000/users")
  .then((response)=> {
    setRecentUser(response.data.user)
    // console.log(response.data.user);
  }).catch((error) => console.error(error))
  
}, []);
//  console.log(recentUser);

// console.log(reciever)

// This Function retrieves 
const changeUser = (user) =>{
  setReciever(user._id)
  setReciever_name(user.name)
}


  // const pushRecent = (element) => {
  //     setReciever((state)=>[...state,element])
  // }
  return (
    <div className="recent-side flex flex-col gap-3 justify-start">
          <form className="flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full max-w-md ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>

          {/* Recent users */}
          <div className="w-full bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h5 className="text-md font-medium leading-none text-gray-700 dark:text-white">
                Recent
              </h5>
              <a
                href="/"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all
              </a>
            </div>

            <div className="flow-root">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              { 
              
              recentUser &&
                  recentUser.map((user) => {
                    
                    return (
                              <li onClick={()=> changeUser(user)} 
                              key={user._id} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0 w-12 h-12 rounded-full">
                                    {/* {item.picture} */}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                      {user.name}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {user.email}
                                    </p>
                                  </div>
                                </div>
                              </li>
                            )
                          })
              }

              </ul>

            </div>
          </div>
        </div>
  )
}

export default Recentusers