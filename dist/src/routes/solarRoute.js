import express from 'express';
import { getSolarData } from '../controllers/solarController.js';
const router = express.Router();
router.get('/:bodyName', getSolarData);
export default router;
//# sourceMappingURL=solarRoute.js.map