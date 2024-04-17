import { storeAstroInfoOnBlockchain } from '../helpers/astroHelper.js';
export async function processAstroInfo(res) {
    try {
        await storeAstroInfoOnBlockchain(res);
    }
    catch (error) {
        console.error('Error processing astro info and storing data on blockchain:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//# sourceMappingURL=astroController.js.map