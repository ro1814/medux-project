import express from 'express';
import { addUser, getUsers, getUser, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add-user', addUser);
router.put('/:id', editUser);
router.get('/all-users', getUsers);
router.get('/:id', getUser);
router.delete('/:id', deleteUser)

export default router;