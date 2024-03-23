import axios from 'axios';
const apiKey = 'ey5vX0J0esZav9F6L9hmiOm056LxfOTF44455A0R';
async function fetchApod(date) {
    try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching APOD:', error);
        throw error;
    }
}
export async function processApod(date) {
    try {
        const apodData = await fetchApod(date);
        const simplifiedData = {
            date: apodData.date,
            explanation: apodData.explanation,
            hdurl: apodData.hdurl,
            media_type: apodData.media_type,
            title: apodData.title
        };
        return simplifiedData;
    }
    catch (error) {
        console.error('Error processing APOD:', error);
        throw error;
    }
}
//# sourceMappingURL=apodController.js.map