import axios from 'axios';
export const getSolarData = async (req, res) => {
    try {
        // Get the body name from the request parameters
        const { bodyName } = req.params;
        console.log(bodyName);
        // Construct the API endpoint URL using the body name
        const apiUrl = `https://api.le-systeme-solaire.net/rest/bodies/${bodyName}`;
        // Make an HTTP GET request to the solar data API endpoint
        const response = await axios.get(apiUrl);
        // Extract the solar data from the response
        const solarData = {
            englishName: response.data.englishName,
            isPlanet: response.data.isPlanet,
            gravity: response.data.gravity,
            meanRadius: response.data.meanRadius,
            avgTemp: response.data.avgTemp,
        };
        // Return the solar data as JSON
        res.status(200).json(solarData);
    }
    catch (error) {
        // If there is an error, log it and send a 500 status code
        console.error('Error in fetching data:', error);
        res.status(500).send('Error in fetching data');
    }
};
//# sourceMappingURL=solarController.js.map