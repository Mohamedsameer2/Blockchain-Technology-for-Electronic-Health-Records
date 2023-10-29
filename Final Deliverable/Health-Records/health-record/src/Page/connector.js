const { ethers } = require("ethers");

const abi = [
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "recordId",
    "type": "uint256"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "patientAddress",
    "type": "address"
   }
  ],
  "name": "RecordCreated",
  "type": "event"
 },
 {
  "anonymous": false,
  "inputs": [
   {
    "indexed": true,
    "internalType": "uint256",
    "name": "recordId",
    "type": "uint256"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "from",
    "type": "address"
   },
   {
    "indexed": true,
    "internalType": "address",
    "name": "to",
    "type": "address"
   }
  ],
  "name": "RecordTransferred",
  "type": "event"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "recordId",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "name",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "_patientAddress",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "_diseases",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "_contactInfo",
    "type": "string"
   }
  ],
  "name": "createRecord",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "recordId",
    "type": "uint256"
   }
  ],
  "name": "getRecordData",
  "outputs": [
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "recordId",
    "type": "uint256"
   }
  ],
  "name": "getRecordOwner",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "name": "records",
  "outputs": [
   {
    "internalType": "string",
    "name": "Name",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "patientAddress",
    "type": "address"
   },
   {
    "internalType": "string",
    "name": "dieses",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "contactInfo",
    "type": "string"
   }
  ],
  "stateMutability": "view",
  "type": "function"
 },
 {
  "inputs": [
   {
    "internalType": "uint256",
    "name": "recordId",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
   }
  ],
  "name": "transferRecord",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
 }
]

if (!window.ethereum) {
 alert('Meta Mask Not Found')
 window.open("https://metamask.io/download/")
}

export const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();
export const address = "0x03D09189EB9B8F4E7B71F9C126C089B82f95daE2"

export const contract = new ethers.Contract(address, abi, signer)
