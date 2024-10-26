import { Router } from 'express';
import { addNewCourse, deleteCourseById, getAllCourse, updateCourseById } from '../controllers/course-controller.js';

const router = Router();

router.post('/create', addNewCourse);
router.get('/', getAllCourse);
router.put('/:id', updateCourseById);
router.delete('/:id', deleteCourseById);

export default router;