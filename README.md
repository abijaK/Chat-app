# gda-mern-socket-chat-app

This is the Backend App composed of api made for a real time chat using express, mongo, jwt and socket.io

## Access url
https://chat-app-ebon-six.vercel.app/

There are 2 principal API :

## User API

Note: rendering or adding user, a valid token is required.

- Create an account using this endpoint

https://chat-app-ebon-six.vercel.app/register

- Body request
{
   "name": "Samuel",
   "email":"samuel@gmail.com",
   "password": "gda123"
}

- Response
{
    "name": "Samuel",
    "email": "samuel@gmail.com",
    "password": "gda123",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODE0MmUyMDBlY2ZjZWNjYTdmNDk1MyIsImlhdCI6MTY3MDI0NTc2MiwiZXhwIjoxNjcwNDE4NTYyfQ.IAJR4OC-966HsfCArUFBQ5JpebAuTKFGB_SJq6mIbhM"
}

## Message API

- Send a new message using this endpoint

https://chat-app-ebon-six.vercel.app/chats/add/

- Body request
{
   "sender": "idsender",
   "content":"Hello world!",
   "reciever": "idreciever"
}

- Render the message of a couple user using this endpoint

https://chat-app-ebon-six.vercel.app/chats/show/${id}
id: refers to the user from whom you need to get mutual conversations
