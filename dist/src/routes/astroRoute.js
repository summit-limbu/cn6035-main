import express from 'express';
import { processAstroInfo } from '../controllers/astroController.js';
const router = express.Router();
router.get('/', async (_, res) => {
    try {
        await processAstroInfo(res);
    }
    catch (error) {
        console.error('Error processing astro request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default router;
//# sourceMappingURL=astroRoute.js.map