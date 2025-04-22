// Setup: npm install alchemy-sdk
// Github: https://github.com/alchemyplatform/alchemy-sdk-js
import { Network, Alchemy } from "alchemy-sdk";

// Optional config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "eRrL1DAPaPRmVCEYMs0MicACtK9MPsx8", // Replace with your Alchemy API Key.
  network: Network.ETH_SEPOLIA, // Replace with your network.
};
const alchemy = new Alchemy(settings);