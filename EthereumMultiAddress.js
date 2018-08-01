
var BigNumber = require('bignumber.js');


Web3 = require('web3')
web3 = new Web3()
var AddressProvider = ''
web3.setProvider(new web3.providers.HttpProvider(AddressProvider))
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
  var ethersTotal = new BigNumber(0);
  var T_name = 'RealmKoin'
  console.log('Balance Query Provided By: RealmKoin. ')
  console.log("Data:   #     Account                                     Provided By: "+T_name+"                            ETH");
  console.log("Data: ------- ------------------------------------------ ---------------------------- --------------------------");
  var i =0;
  // Standard accounts
  var accounts = eth.accounts;
  // Add additional accounts
  accounts.push('0x0010f94b296a852aaac52ea6c5ac72e03afd032d');
  accounts.push('0x00a0a24b9f0e5ec7aa4c7389b8302fd0123194de');
  accounts.push('0x0000000000000000000000000000000000000000');
  accounts.push('0x00521965e7bd230323c423d96c657db5b79d099f');
  accounts.push('0x0092bebe0ea0a47ccca053773564d92622feddc2');
  accounts.push("0xd39379d7887c6a9ebd01007e2b96efc774652047");
  accounts.forEach( function(e){
    var ethers = web3.fromWei(eth.getBalance(e), "ether");
    ethersTotal = ethersTotal.add(ethers);
    console.log("Data:   " + i + "\t" + e + " " +'                                   '+ " " + padTokens(ethers, 18, 26));
    i++;
  })
  console.log("Data: ------- ------------------------------------------ ---------------------------- --------------------------");
  console.log("Data:   " + i + "     Total                                      " +'           '+ " " + padTokens(ethersTotal, 18, 26));
};

checkAllBalances()

console.log('Calculation Of Balance Done By RealmKoin Team, Thanks For Utilizing This Object!');
console.log('Please Donate To The RealmKoin Project! [ETH/TOKEN] Address: [0xdb436485f38d0f9c78acfb20ededc97419eb2ea5]');
