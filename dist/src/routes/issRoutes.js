import express from 'express';
import { processIssLocationAndStoreOnBlockchain } from '../controllers/issController.js';
const router = express.Router();
router.get('/', async (_, res) => {
    try {
        await processIssLocationAndStoreOnBlockchain(res);
    }
    catch (error) {
        console.error('Error processing ISS location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default router;
//# sourceMappingURL=issRoutes.js.map