import express from 'express';
import { processApod } from '../controllers/apodController.js';
const router = express.Router();
router.get('/', async (req, res) => {
    const date = req.query.date || ''; // You can pass the date as a query parameter
    try {
        const apodData = await processApod(date);
        res.json(apodData);
    }
    catch (error) {
        console.error('Error processing APOD request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default router;
//# sourceMappingURL=apodRoute.js.map