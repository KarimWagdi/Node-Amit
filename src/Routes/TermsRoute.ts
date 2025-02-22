import { Router } from 'express'
import TermsController from '../Controller/TermsController';
import verifyToken from '../MiddelWares/Auth';
import requestValidate from '../MiddelWares/RequestValidate';
import { Terms } from '../Requests/TermsRequestValidator';
const router = Router()

router.get('/', TermsController.getTerm);

router.get('/:id', verifyToken, TermsController.getTermById);

router.post('/', verifyToken, requestValidate(Terms), TermsController.createTerm);

router.put('/:id', verifyToken, requestValidate(Terms), TermsController.updateTerm);

router.delete("/:id", verifyToken, TermsController.deleteTerm);
  

export default router