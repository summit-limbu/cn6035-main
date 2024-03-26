import axios from 'axios'; 
import { Response } from 'express';


async function fetchAstroInfo(): Promise<AstroInfo> {
    try {
        const response = await axios.get<AstroInfo>('http://api.open-notify.org/astros');
        return response.data;
    } catch (error) {
        console.error('Error fetching:', error);
        throw error; // Rethrow the error 
    }
}

export async function processAstroInfo(res: Response) {
    try {
        const astroData = await fetchAstroInfo();
        console.log('Astro info:', astroData); 
        res.json(astroData);
    } catch (error) {
        // Handle error
        console.error('Error processing:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
