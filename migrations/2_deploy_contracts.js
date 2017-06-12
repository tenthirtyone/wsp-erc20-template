var TemplateCoin = artifacts.require("./TemplateCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(TemplateCoin, 10000, 'TemplateCoin', 18, 'TMP');
};
