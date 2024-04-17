import axios from 'axios';
import algosdk from 'algosdk';
import { getClient, getAccount } from '../config/config.js';
export async function fetchAstroInfo() {
    try {
        const response = await axios.get('http://api.open-notify.org/astros.json');
        return response.data.people;
    }
    catch (error) {
        console.error('Error fetching astro info:', error);
        throw error;
    }
}
export async function storeAstroInfoOnBlockchain(res) {
    try {
        const astroData = await fetchAstroInfo();
        console.log('Astro info:', astroData);
        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();
        const note = algosdk.encodeObj(astroData);
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = await client.sendRawTransaction(signedTxn).do();
        console.log("Transaction ID:", sendTxn.txId);
        // Send astro info and transaction ID in the response
        res.json({ astroData, txId: sendTxn.txId });
    }
    catch (error) {
        console.error('Error storing astro info on blockchain:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
//# sourceMappingURL=astroHelper.js.map