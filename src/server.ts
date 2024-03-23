import express from 'express';

import weatherRoute from './routes/weatherRoutes.js';
import seismicRoute from './routes/seismicRoutes.js';
import issRoute from './routes/issRoutes.js';

import cors from "cors";

// Express
const app = express();

// Server port
const PORT = 3000;

app.use(express.json());
app.use(cors());

// weather route
app.use('/api/weather', weatherRoute);

// seismic route
app.use('/api/seismic', seismicRoute);

// iss route
app.use('/api/iss', issRoute);


// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
