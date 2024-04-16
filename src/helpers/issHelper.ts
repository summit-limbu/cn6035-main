import axios from 'axios';
import algosdk from 'algosdk';
import { Response } from 'express';
import { getClient, getAccount } from '../config/config.js';

export async function fetchIssLocation(): Promise<IssLocation> {
    try {
        const response = await axios.get<IssLocation>('http://api.open-notify.org/iss-now.json');
        return response.data;
    } catch (error) {
        console.error('Error fetching ISS location:', error);
        throw error;
    }
}

export async function storeIssLocationOnBlockchain(res: Response) {
    try {
        const issData = await fetchIssLocation();
        console.log('ISS location:', issData);

        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        const note = algosdk.encodeObj(issData);
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
        
        // Send ISS location data 
        res.json({ issData, txId: sendTxn.txId });
    } catch (error) {
        console.error('Error storing ISS location on blockchain:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
