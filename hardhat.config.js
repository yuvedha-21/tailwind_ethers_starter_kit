require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
// PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    sepolia: {
      // url: "https://sepolianetwork.com",
      url: "https://rpc.sepolia.org",
      // chainId: 170,
      accounts: [
        `0x736a61c7b4b6bd0a4b8fb66e5d76ac69329d7c8f4553063716c01f07364742cc`,
      ],
    },
  },
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: "H9WZ8W46J7DF5YFWBY6UDFCMBAMHWJBX69",
  // },
  solidity: {
    version: "0.8.11",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./src/contracts",
    artifacts: "./src/abis",
  },
  mocha: {
    timeout: 40000,
  },
};
