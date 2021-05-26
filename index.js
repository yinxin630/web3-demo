const Web3 = require('web3');

// console.log(Web3);
console.log(Web3.givenProvider);

const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://mainnet.infura.io/ws'));
console.log(web3.eth.accounts);

const myContract = new web3.eth.Contract(myABI, myContractAddress);
