// Requires npm install eth-token-tracker -S
Address = '0xdb436485f38d0f9c78acfb20ededc97419eb2ea5'
ProviderAddress = ''
Web3 = require('web3')
web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider(ProviderAddress))

const TokenTracker = require('eth-token-tracker')
 
var tokenTracker = new TokenTracker({
 
  userAddress: Address, // whose balance to track 
  provider: web3,                  // a web3-style provider  
  // Tell it about the tokens to track: 
  tokens: [
    {
      address: '0xa7a8C21c218C45d9742154e4369cE8eFd18a002b',
    }
  ],
})
 
// You can use this method to check the state of the tokens 
var balances = tokenTracker.serialize()
 
// You can also subscribe to updates 
tokenTracker.on('update', function (balances) {
  console.log(`Your balance of ${balances[0].symbol} is ${balances[0].string}`)
})
 
// Make sure to clean up, or it will hold a reference: 
tokenTracker.stop()
