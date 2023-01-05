import express from 'express'
const router = express.Router();

import { userLogged } from '../controllers/auth/login.controllers.js'
import { registerUser } from '../controllers/auth/register.controllers.js';
import { showMessages, addMessage } from '../controllers/messages.controllers.js';
import { getAllUsers, getUsersProfile, deleteSingleUser } from '../controllers/user.controllers.js';

router.post('/auth/user', registerUser);

router.post('/auth/login', userLogged);

router.get('/users', getAllUsers);

router.get('/users/profile', getUsersProfile);

router.delete('/users/delete/:userID', deleteSingleUser);

router.post('/discuss/chats/add/', addMessage);

router.get('/discuss/chats/show/:id', showMessages);

export { router as routes};