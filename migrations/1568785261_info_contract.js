var Mycontract = artifacts.require("./InfoContract.sol");
module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Mycontract);
};
