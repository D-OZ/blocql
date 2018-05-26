const Web3 = require("web3");
const { address, ABI } = require("../constants/database.js");

const infura = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/51AwWne0Nn1feikQwUXb")); // Rinkeby address
const contract = new infura.eth.Contract(ABI, address);

module.exports = { contract };