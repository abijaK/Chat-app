# gda-mern-socket-chat-app
By cedric karungu
An api for a real time chat in express, socket.io, mongo, ts in backend and next, redux toolkit in frontend


## Access url

- Home page redirects to Login using the link below

https://chat-app-ebon-six.vercel.app/

There are 2 principal API :

1. User API

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

2. Message API

- Send a new message using this endpoint

https://chat-app-ebon-six.vercel.app/chats/add/

- Body request
{
   "sender": "idsender",
   "content":"Hello world",
   "reciever": "idreciever"
}

- Render the message of a couple user using this endpoint

https://chat-app-ebon-six.vercel.app/chats/show/${id}
id: refers to the user from whom you need to get mutual conversations