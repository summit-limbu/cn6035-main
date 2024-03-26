import express from 'express';
import { processApod } from '../controllers/apodController.js';
const router = express.Router();
router.get('/', async (req, res) => {
    // Get the date query parameter from the request
    const dateParam = req.query.date;
    let formattedDate;
    // Check if the date parameter is provided and in the correct format
    if (dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
        formattedDate = dateParam;
    }
    else {
        // If not provided or invalid, default to today's date
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        formattedDate = `${year}-${month}-${day}`;
    }
    try {
        const apodData = await processApod(formattedDate);
        res.json(apodData);
    }
    catch (error) {
        console.error('Error processing APOD request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
export default router;
//# sourceMappingURL=apodRoute.js.map