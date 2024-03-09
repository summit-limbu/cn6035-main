import express from 'express';
import { getSeismicData } from '../controllers/seismicController.js';
// We will create a router object
const router = express.Router();
// We will create a route for the weather data based on the city name
router.get('/:city', getSeismicData);
// We will export the router
export default router;
//# sourceMappingURL=seismicRoutes.js.map