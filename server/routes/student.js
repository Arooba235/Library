import express from 'express';
import { getStudents, createStudent } from '../controllers/studentController';

const router = express.Router();

// Define routes for CRUD operations on the Student model
router.get('/', getStudents);
router.post('/', createStudent);

// Add other CRUD operations as needed

export default router;
