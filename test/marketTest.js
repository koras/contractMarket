// mocha
//const PrivatRabbit = artifacts.require("./PrivatRabbit.sol");
var Web3 = require('web3');

const Market = artifacts.require("./Market.sol");



contract('Market Contract ', function(accounts) {
 
 //accounts[1] = '0xeddb036a52a6d2c375e501be7c8c8cd45d07e796';
  //  assert.isTrue(true);
  //  done();
  
 // gas: 6700000,
 // gasPrice: 10000000000,

  var incrimentTestGen = 0;
  var GasCost = 4700000;
  var gasPrice_value = 10000000000; 
  var contractAddress = '0x0000000000000000000'; 
  var meta;
  var ItterTest = 0;
  //var accounts = {};
  //accounts[0] = '0x4a174BaF2E41f5B8A68fc79139C054a541402c79';
// buyBunny(uint32 _bunnyId) public payable
// stopMarket(uint32 _bunnyId) public returns(uint) 
//   function startMarket(uint32 _bunnyId, uint _money) public returns (uint) {
  // function currentPrice(uint32 _bunnyid) public view returns(uint) { 


  it("Deploy contract ", function() {
    return Market.deployed().then(function(instance) {
              meta = instance;  
              contractAddress = instance.address;
          return instance.getInWhitelist(accounts[0]); 
   }) 
    .then((result) => {
       assert.equal(result  ,true , 'Ошибка : '+accounts[0]+' ' +result   );  
     // done();
    });
  });
 




 // return;transferFromBunny(
var bunny = 3;

  ItterTest++;
  it(ItterTest + ") Устанавливаем кошелёк для приёма общих средств по контракту " , function() {
    return meta.transferFromBunny(bunny, {from: accounts[0], gas:  GasCost ,gasPrice:gasPrice_value}).then(function(instance) {
      //  return web3.eth.getBalance(accounts[5]);
   //  }).then( (result ) => {
       // oldBalance[5] =result;  startMarket(
       return  meta.startMarket(bunny,1000000000000000, {from: accounts[0], gas:  GasCost ,gasPrice:gasPrice_value})
      }).then( (result ) => {
      assert.equal(result , 1, 'Ошибка выставление кролика на продажу ' + result); 
 // return;
    });
  });

});


 
