import axios from 'axios'; 
import { Response } from 'express';

async function fetchIssLocation(): Promise<IssLocation> {
    try {
        const response = await axios.get<IssLocation>('http://api.open-notify.org/iss-now.json');
        return response.data;
    } catch (error) {
        console.error('Error fetching ISS location:', error);
        throw error; // Rethrow the error 
    }
}

export async function processIssLocation(res: Response) {
    try {
        const issData = await fetchIssLocation();
        console.log('ISS location:', issData.iss_position); 
        res.json(issData);
    } catch (error) {
        // Handle error
        console.error('Error processing ISS location:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
