var Bond = artifacts.require("./Bond.sol");

ISuperfluid host,
IConstantFlowAgreementV1 cfa,
var acceptedToken = 0xdd5462a7db7856c9128bc77bd65c2919ee23c6e1; //ethx on Kovan
var fundingTarget = 5000000000000000000000; //in wei
var fundingRate = 1000; //basis points
var loanTerm = 360; //length of loan, days
var admin = '0x870ac8121ba4a31dE8E5D91675edf3f937B8D7e9';


module.exports = function(deployer) {  
  deployer.deploy(Bond);
}; 