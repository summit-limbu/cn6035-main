import axios from 'axios';
export const getSeismicData = async (req, res) => {
    try {
        // Get the city param from the request
        const { city } = req.params;
        console.log(city);
        if (!city || (city !== 'london' && city !== 'dublin')) {
            return res.status(400).json({ error: 'City not found' });
        }
        // Construct the API endpoint URL using the city name
        const apiUrl = `https://65ca483b3b05d29307e01640.mockapi.io/api/seismic/${city}`;
        // Make an HTTP GET request to the seismic data API endpoint
        const response = await axios.get(apiUrl);
        // Extract the seismic data from the response
        const seismicData = response.data;
        // Return the seismic data as JSON
        res.status(200).json(seismicData);
    }
    catch (error) {
        // If there is an error, we will log it and send a 500 status code
        res.status(500).send('Error in fetching seismic data');
    }
};
//# sourceMappingURL=seismicController.js.map