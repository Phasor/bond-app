const { web3tx, toWad, wad4human } = require("@decentral.ee/web3-helpers");
const deployFramework = require("@superfluid-finance/ethereum-contracts/scripts/deploy-framework");
const deployTestToken = require("@superfluid-finance/ethereum-contracts/scripts/deploy-test-token");
const deploySuperToken = require("@superfluid-finance/ethereum-contracts/scripts/deploy-super-token");
const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Bond = artifacts.require("/contracts/Bond.sol");

contract("Bond", async (accounts) => {
    const errorHandler = (err) => {
        if (err) throw err;
    };

    const names = ["Admin", "Alice", "Bob", "Carol", "Dan", "Emma", "Frank"];
    accounts = accounts.slice(0, names.length);

    let sf;

	await deployFramework(errorHandler, {
		web3,
		from: accounts[0],
	});
    
	await deploySuperToken(errorHandler, [":", "Bond"], {
		web3,
		from: accounts[0],
	});

	sf = new SuperfluidSDK.Framework({
		web3,
		version: "test",
		tokens: ["Bond"],
	});

	await sf.initialize();
});