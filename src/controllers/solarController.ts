import axios from 'axios';
import { processSolarData } from '../helpers/solarHelper.js';

export const getSolarData = async (req, res) => { 
    try {
        const { bodyName } = req.params;
        console.log(bodyName);

        // Removed the response variable
        const apiUrl = `https://api.le-systeme-solaire.net/rest/bodies/${bodyName}`;
        await axios.get(apiUrl);

        // Pass only bodyName to processSolarData
        await processSolarData(bodyName, res);
    } catch (error) {
        console.error('Error in fetching data:', error);
        res.status(500).send('Error in fetching data');
    }
};
