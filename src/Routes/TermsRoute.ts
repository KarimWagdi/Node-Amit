import { Router } from 'express'
import TermsController from '../Controller/TermsController';
import verifyToken from '../MiddelWares/Auth';
const router = Router()

router.get('/', verifyToken, TermsController.getTerm);

router.get('/:id', TermsController.getTermById);

router.post('/', TermsController.createTerm);

router.put('/:id', TermsController.updateTerm);

router.delete("/:id", TermsController.deleteTerm);
  

export default router