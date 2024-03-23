// issRoute.ts
import express from 'express';
import { processIssLocation } from '../controllers/issController.js';
// We will create a router object
const router = express.Router();
// Define route handler
router.get('/', async (_, res) => {
    try {
        await processIssLocation(res);
    }
    catch (error) {
        console.error('Error processing ISS location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// We will export the router
export default router;
//# sourceMappingURL=issRoutes.js.map