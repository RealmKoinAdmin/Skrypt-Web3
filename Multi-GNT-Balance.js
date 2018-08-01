
var BigNumber = require('bignumber.js');

ProviderAddress = ''
Web3 = require('web3')
web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider(ProviderAddress))
eth = web3.eth

function padTokens(s, n, m) {
  var o = s.toFixed(n);
  while (o.length < m) {
    o = " " + o;
  }
  return o;
}


function padEthers(s, n) {
  var o = s.toFixed(18);
  while (o.length < 27) {
    o = " " + o;
  }
  return o;
}

function checkAllBalances() {
  var erc20ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"golemFactory","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_master","type":"address"}],"name":"setMigrationMaster","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"migrate","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalize","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"migrationMaster","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_agent","type":"address"}],"name":"setMigrationAgent","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"migrationAgent","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingEndBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalMigrated","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationMin","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"funding","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenCreationRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"fundingStartBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"create","outputs":[],"payable":true,"type":"function"},{"inputs":[{"name":"_golemFactory","type":"address"},{"name":"_migrationMaster","type":"address"},{"name":"_fundingStartBlock","type":"uint256"},{"name":"_fundingEndBlock","type":"uint256"}],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Migrate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Refund","type":"event"}];
  var tokenAddress = "0xa74476443119a942de498590fe1f2454d7d4ac0d";
  var tokenContract = eth.contract(erc20ABI).at(tokenAddress);
  var tokenTotal = new BigNumber(0);
  var ethersTotal = new BigNumber(0);
  var T_name = 'GolemTokens'
  console.log('Balance Query Provided By: RealmKoin. ')
  console.log("Data:   #     Account                                                  "+T_name+"                            ETH");
  console.log("Data: ------- ------------------------------------------ ---------------------------- --------------------------");
  var i =0;
  // Standard accounts
  var accounts = eth.accounts;
  // Add additional accounts
  accounts.push("0x4319c142f7b6cd722fc3a49289b8a22a7a51ca1e");
  accounts.push("0x168ae36b4386cea14475faa41498a0ea63c67dd7");
  accounts.push("0xd39379d7887c6a9ebd01007e2b96efc774652047");
  accounts.push("0xa74476443119a942de498590fe1f2454d7d4ac0d");
  accounts.forEach( function(e){
    var tokenTokens = tokenContract.balanceOf(e).div(1);
    tokenTotal = tokenTotal.add(tokenTokens);
    var ethers = web3.fromWei(eth.getBalance(e), "ether");
    ethersTotal = ethersTotal.add(ethers);
    console.log("Data:   " + i + "\t" + e + " " + padTokens(tokenTokens, 18, 28) + " " + padTokens(ethers, 18, 26));
    i++;
  })
  console.log("Data: ------- ------------------------------------------ ---------------------------- --------------------------");
  console.log("Data:   " + i + "     Total                                      " + padTokens(tokenTotal, 18, 28) + " " + padTokens(ethersTotal, 18, 26));
};

checkAllBalances()

console.log('Calculation Of Balance Done By RealmKoin Team, Thanks For Utilizing This Object!');
console.log('Please Donate To The RealmKoin Project! [ETH/TOKEN] Address: [0xdb436485f38d0f9c78acfb20ededc97419eb2ea5]');
