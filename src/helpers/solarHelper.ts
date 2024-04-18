import axios from 'axios';
import algosdk from 'algosdk';
import { Response } from 'express';
import { getClient, getAccount } from '../config/config.js';

export async function fetchSolarData(bodyName: string): Promise<SolarInfo> {
    try {
        const response = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies/${bodyName}`);
        const solarData = {
            englishName: response.data.englishName,
            isPlanet: response.data.isPlanet,
            gravity: response.data.gravity,
            meanRadius: response.data.meanRadius,
            avgTemp: response.data.avgTemp,
        };
        return solarData;
    } catch (error) {
        console.error('Error fetching solar data:', error);
        throw error;
    }
}

export async function processSolarData(bodyName: string, res: Response) {
    try {
        const solarData = await fetchSolarData(bodyName);
        console.log('Solar data:', solarData);

        const client = getClient();
        const account = getAccount();
        const suggestedParams = await client.getTransactionParams().do();

        const note = algosdk.encodeObj(solarData);
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

        // Send solar data and transaction ID in the response
        res.json({ solarData, txId: sendTxn.txId });
        
    } catch (error) {
        console.error('Error processing solar data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
