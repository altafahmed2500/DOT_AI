module.exports = {
  networks: {
    hardhat: {
      gas: 12000000, // Set custom gas limit
      blockGasLimit: 12000000, // Optional: Set block gas limit
      hardfork: "cancun", // Optional: Set hard fork
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      gas: 12000000, // Set gas limit for localhost network
    },
  },
  solidity: {
    version: "0.8.27",
  },
};
