var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "reflect strong mixed space rug swallow insane figure estate lens grit drama";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 4500000
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};