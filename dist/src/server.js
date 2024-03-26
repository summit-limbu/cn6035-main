import express from 'express';
import weatherRoute from './routes/weatherRoutes.js';
import issRoute from './routes/issRoutes.js';
import apodRoute from './routes/apodRoute.js';
import astroRoute from './routes/astroRoute.js';
import solarRoute from './routes/solarRoute.js';
import cors from "cors";
// Express
const app = express();
// Server port
const PORT = 3000;
app.use(express.json());
app.use(cors());
// weather route
app.use('/api/weather', weatherRoute);
// iss route
app.use('/api/iss', issRoute);
// iss route
app.use('/api/apod', apodRoute);
// astro route
app.use('/api/astro', astroRoute);
// solar route
app.use('/api/solar', solarRoute);
// Start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map