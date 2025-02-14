import { Router } from 'express'
import TermsController from '../Controller/TermsController';
const router = Router()

router.get('/', TermsController.getTerm);
router.get('/:id', TermsController.getTermById);

router.post('/', TermsController.createTerm);

router.put('/:id', TermsController.updateTerm);

router.delete("/:id", TermsController.deleteTerm);
  

// router.post('/login', TermsController.loginUser);


// router.delete('/:id', TermsController.deleteUser);

export default router