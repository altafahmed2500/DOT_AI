const IPFSAssetManager = artifacts.require("IPFSAssetManager");

module.exports = async function (deployer) {
  // Define the name and symbol for the asset collection
  const collectionName = "IPFS Asset Collection";
  const collectionSymbol = "IPFS";

  // Deploy the contract with the provided constructor arguments
  await deployer.deploy(IPFSAssetManager, collectionName, collectionSymbol);

  // Get the deployed instance for further interactions (optional)
  const instance = await IPFSAssetManager.deployed();

  console.log("IPFSAssetManager deployed at address:", instance.address);
};
