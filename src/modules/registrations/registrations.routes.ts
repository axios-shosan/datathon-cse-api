import express, { Router } from 'express';
import { registerValidator } from './registrations.validators';
import { registerController } from './registrations.controllers';

const router: Router = express.Router();

router.post('/register', registerValidator, registerController);

export default router;
