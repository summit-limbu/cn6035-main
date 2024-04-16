import { Response } from 'express';
import { storeIssLocationOnBlockchain } from '../helpers/issHelper.js';

export async function processIssLocationAndStoreOnBlockchain(res: Response) {
    try {
        await storeIssLocationOnBlockchain(res);
    } catch (error) {
        console.error('Error processing ISS location and storing data on blockchain:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
