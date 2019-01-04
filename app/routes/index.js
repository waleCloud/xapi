/**
 * @author Wale Ayandiran
 * API route index file which consumes all the routes in the api folder and exports them as a router object.
 * Also sets the endpoints base url to start with /api
 */

import { Router } from 'express';

import api from './api';

const router = Router();

router.use('/api', api);

export default router;
