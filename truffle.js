// geth --datadir ./testnet     --nodiscover --maxpeers 25 --rpc --rpcapi db,eth,net,web3     --rpcport 9545 --port 30303 --identity footh --rpccorsdomain "*"     --networkid 531453 --mine --minerthreads 1 --etherbase 0xebee17d2d1aa3b21bd291360fea65597daa203d5     console


//geth --datadir "~/ethpriv" --mine --rpc  --rpcapi db,eth,net,web3   --rpcport 9545   --unlock 0  console
// geth --datadir=./ethpriv --password ./password.txt account new > ./ethpriv/acc/account5.txt
// https://github.com/ethereum/go-ethereum/issues/14831


// https://habr.com/post/341466/

module.exports = {
  networks: {


    development: {
        host: "127.0.0.1",
        port: 8545, 
        network_id: "*",
        gas: 5570000,
        gasPrice: 12000000000,
       gasLimit: 2000, 
        // from: '0x4ea09368d89917fb6f2f773c8f6018d711b525b6',
      // from: "0x4a174BaF2E41f5B8A68fc79139C054a541402c79", // default address to use for any transaction Truffle makes during migrations
    },
    //  truffle migrate --reset --network rinkeby
    // работатет
    rinkeby: {
      host: "127.0.0.1",
      port: 8545, 
      network_id: "*",
      //  gas: 6095000,
        //    gasLimit: 22000000,
        //   from: '0x15c7c1d8754e7f47d49126e1ab8964f23c1bf6de',
          //  from: "0x4a174BaF2E41f5B8A68fc79139C054a541402c79", // default address to use for any transaction Truffle makes during migrations
        //gasPrice: 1000000000,
        gasPrice: 10000000000,

    }
    //,
  //  rinkeby: {
  //    host: "127.0.0.1", // Connect to geth on the specified
  //    port: 8545,
  //    from: "0x4a174BaF2E41f5B8A68fc79139C054a541402c79", // default address to use for any transaction Truffle makes during migrations
  //    network_id: 4,
  //    gas: 9612388, // Gas limit used for deploys
  //   // gasPrice: 100000000000,
  //  }
  },	
 // rpc: {
  //  host: "127.0.0.1",
  //  gas: 7700000,
//    gasPrice: 100000200000,
//		port: 8545
//	},
	solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
};
