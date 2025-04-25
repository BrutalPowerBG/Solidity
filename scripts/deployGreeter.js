async function main() {
  // Get the contract factory
  const Greeter = await ethers.getContractFactory("Greeter");
  
  // Deploy the contract with an initial greeting
  console.log("Deploying Greeter...");
  const greeter = await Greeter.deploy("Hello, Blockchain!");
  
  // Wait for deployment to finish
  await greeter.waitForDeployment();
  
  // Get the deployed contract address
  const greeterAddress = await greeter.getAddress();
  console.log("Greeter deployed to:", greeterAddress);
}

// Execute the deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });