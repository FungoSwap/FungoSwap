const SocioTope = artifacts.require("SocioTope");
const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = async (deployer, _, accounts) => {
  const socioTopeInstance = await SocioTope.new(accounts[0]);
  console.log(socioTopeInstance.constructor._json.deployedBytecode.length);

  await deployer.deploy(SocioTope, accounts[0]);
  await deployer.deploy(SimpleStorage, 0);
};
