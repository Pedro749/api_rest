import { Router } from 'express';
import studentController from '../controllers/StudentController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.get('/', studentController.index);
router.get('/:id/', studentController.show);
router.post('/', loginRequired, studentController.store);
router.put('/:id/', loginRequired, studentController.update);
router.delete('/:id/', loginRequired, studentController.delete);

export default router;
