



Web3 = require('web3')
web3 = new Web3()
ProviderAddress = ''
web3.setProvider(new web3.providers.HttpProvider(ProviderAddress))
AugurABI =
 [ { constant: false,
    inputs: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    name: 'createTradeContract',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object] ],
    name: 'ownerWithdrawERC20Token',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: true,
    inputs: [ [Object] ],
    name: 'verify',
    outputs:
     [ [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object] ],
    payable: false,
    type: 'function' },
  { constant: true,
    inputs: [],
    name: 'owner',
    outputs: [ [Object] ],
    payable: false,
    type: 'function' },
  { constant: false,
    inputs: [ [Object] ],
    name: 'transferOwnership',
    outputs: [],
    payable: false,
    type: 'function' },
  { payable: false, type: 'fallback' },
  { anonymous: false,
    inputs:
     [ [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object],
       [Object] ],
    name: 'TradeListing',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'OwnerWithdrewERC20Token',
    type: 'event' },
  { anonymous: false,
    inputs: [ [Object], [Object] ],
    name: 'OwnershipTransferred',
    type: 'event' } ]
Augur = web3.eth.contract(AugurABI)
AugurContract = Augur.at('0x66bdad9baac0deed299bcd6331e02bc92865db8d')
address = '0x66bdad9baac0deed299bcd6331e02bc92865db8d'
myContractInstance = Augur.at(address)

fs = require('fs');
util = require('util');
testName = 'AugurData'
fileNum = 1
fileNumString = fileNum.toString()
logFile = fs.createWriteStream('./blocks/'+testName+'.json', { flags: 'a' });
  // Or 'w' to truncate the file every time the process starts.
logStdout = process.stdout;

console.log = function () {
  logFile.write(util.format.apply(null, arguments) + '\n\r');
  logStdout.write(util.format.apply(null, arguments) + '\n\r');
}
console.error = console.log;

// watch for an event with {some: 'args'}
events = myContractInstance.allEvents({fromBlock: 0, toBlock: 'latest'})
events.watch(function(error, result){
   if(!error)
     console.log('\n\r')
     console.log(result)
     console.log('\n\r')
   if(!result)
     console.log('\n\r')
     console.error(error)
     console.log('\n\r')
})

// would get all past logs again.
events.get(function(error, logs){
   if(!error)
     console.log('\n\r')
     console.log(logs)
     console.log('\n\r')
   if(!logs)
     console.log('\n\r')
     console.error(error)
     console.log('\n\r')
 });


// would stop and uninstall the filter
// myEvent.stopWatching();
