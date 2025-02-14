import { Router } from 'express'
import UserController from '../Controller/UserController'
const router = Router()

router.get('/', UserController.getUser);

router.post('/', UserController.addUser);

router.post('/login', UserController.loginUser);

router.put('/:id', UserController.updateUser);

router.delete('/:id', UserController.deleteUser);

export default router