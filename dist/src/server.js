import express from "express";
import weatherRoute from "./routes/weatherRoutes.js";
// Express
const app = express();
// Server port
const PORT = 3000;
app.use(express.json());
// weather route
app.use("/api/weather", weatherRoute);
// Start the express server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map