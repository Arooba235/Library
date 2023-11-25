import express from 'express';
import { getStaff, createStaff } from '../controllers/staffController';

const router = express.Router();

// Define routes for CRUD operations on the Staff model
router.get('/', getStaff);
router.post('/', createStaff);

// Add other CRUD operations as needed

export default router;
