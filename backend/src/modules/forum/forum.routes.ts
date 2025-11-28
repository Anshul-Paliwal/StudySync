import express from 'express';
import { createQuestion, getQuestions, getQuestionById, updateQuestion, deleteQuestion, addAnswer, upvoteAnswer, verifyAnswer } from './forum.controller';
import { protect, authorize } from '../../middleware/auth.middleware';

const router = express.Router();

router.post('/', protect, createQuestion);
router.get('/', getQuestions);
router.get('/:id', getQuestionById);
router.put('/:id', protect, updateQuestion);
router.delete('/:id', protect, deleteQuestion);
router.post('/:id/answer', protect, addAnswer);
router.put('/:questionId/answers/:answerId/upvote', protect, upvoteAnswer);
router.put('/:questionId/answers/:answerId/verify', protect, authorize('admin'), verifyAnswer);

export default router;
