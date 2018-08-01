
Web3 = require('web3')
web3 = new Web3()
var ProviderAddress = ''
web3.setProvider(new web3.providers.HttpProvider(ProviderAddress))
var a = 0
console.error = console.log;
var b = 1
var c = 1001
var d = 1491733
console.log('block = {')
console.log('\n\r')
while (a < c) {
 if(a < c)
  var fileName = a
  fs = require('fs');
  util = require('util');
  fileExtention = '.json'
  logFile = fs.createWriteStream('./blocks/'+fileName+fileExtention, { flags: 'a' });
  // Or 'w' to truncate the file every time the process starts.
  logStdout = process.stdout
  console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n\r');
  logStdout.write(util.format.apply(null, arguments) + '\n\r');
 }
  console.log('block_'+a+' = { \n\r')
  console.log(' author: '+web3.eth.getBlock(a).author+'\n\r') // author
  console.log(' difficulty: '+web3.eth.getBlock(a).difficulty+'\n\r') // difficulty
  console.log(' extraData: '+web3.eth.getBlock(a).extraData+'\n\r') // extraData
  console.log(' gasLimit: '+web3.eth.getBlock(a).gasLimit+'\n\r') // gasLimit
  console.log(' gasUsed: '+web3.eth.getBlock(a).gasUsed+'\n\r') // gasUsed
  console.log(' hash: '+web3.eth.getBlock(a).hash+'\n\r') // hash
  console.log(' logsBloom: '+web3.eth.getBlock(a).logsBloom+'\n\r') // logsBloom
  console.log(' miner: '+web3.eth.getBlock(a).miner+'\n\r') // miner
  console.log(' number: '+web3.eth.getBlock(a).number+'\n\r') // number
  console.log(' parentHash: '+web3.eth.getBlock(a).parentHash+'\n\r') // parentHash
  console.log(' receiptsRoot: '+web3.eth.getBlock(a).receiptsRoot+'\n\r') // receiptsRoot
  console.log(' sealFields: '+web3.eth.getBlock(a).sealFields+'\n\r') // sealFields
  console.log(' sha3Uncles: '+web3.eth.getBlock(a).sha3Uncles+'\n\r') // sha3Uncles
  console.log(' signature: '+web3.eth.getBlock(a).signature+'\n\r') // signature
  console.log(' size: '+web3.eth.getBlock(a).size+'\n\r') // size
  console.log(' startRoot: '+web3.eth.getBlock(a).stateRoot+'\n\r') // stateRoot
  console.log(' step: '+web3.eth.getBlock(a).step+'\n\r') // step
  console.log(' timestamp: '+web3.eth.getBlock(a).timestamp+'\n\r') // timestamp
  console.log(' totalDifficulty: '+web3.eth.getBlock(a).totalDifficulty+'\n\r') // totalDifficulty
  console.log(' transactions: '+web3.eth.getBlock(a).transactions+'\n\r') // transactions
  console.log(' transactionsRoot: '+web3.eth.getBlock(a).transactionsRoot+'\n\r') // transactionsRoot
  console.log(' uncles: '+web3.eth.getBlock(a).uncles+'\n\r') // uncles
  console.log('}\n\r')
  var a = a + b
 if(a >= c)
  console.log('\n\r')
}
