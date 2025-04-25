require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },
    beam: {
      url: process.env.BEAM_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 4337
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
    customChains: [
      {
        network: "beam",
        chainId: 4337,
        urls: {
          apiURL: "https://build.onbeam.com/api",
          browserURL: "https://build.onbeam.com"
        }
      }
    ]
  },
  sourcify: {
    enabled: true
  }
};
