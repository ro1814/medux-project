import express from 'express';
import { addUser, getUsers } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add-user', addUser);
router.get('/all-users', getUsers);

export default router;