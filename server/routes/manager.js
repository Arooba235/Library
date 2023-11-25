import express from 'express';
import { getManagers, createManager } from '../controllers/managerController';

const router = express.Router();

// Define routes for CRUD operations on the Manager model
router.get('/', getManagers);
router.post('/', createManager);

// Add other CRUD operations as needed

export default router;
