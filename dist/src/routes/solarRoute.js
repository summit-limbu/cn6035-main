import express from 'express';
import { getSolarData } from '../controllers/solarController.js';
const router = express.Router();
router.get('/:bodyName', async (req, res) => {
    try {
        await getSolarData(req, res);
    }
    catch (error) {
        console.error('Error processing solar data request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default router;
//# sourceMappingURL=solarRoute.js.map