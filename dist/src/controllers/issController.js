import { storeIssLocationOnBlockchain } from '../helpers/issHelper.js';
export async function processIssLocationAndStoreOnBlockchain(res) {
    try {
        await storeIssLocationOnBlockchain(res);
    }
    catch (error) {
        console.error('Error processing ISS location and storing data on blockchain:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//# sourceMappingURL=issController.js.map