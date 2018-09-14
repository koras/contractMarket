pragma solidity ^0.4.4;
/*
** WARNING:  THIS PRODUCT IS HIGHLY ADDICTIVE.  IF YOU HAVE AN ADDICTIVE NATURE.  DO NOT PLAY.
*/

/*    
* Author:  Konstantin G...
* Telegram: @bunnygame
* 
* email: info@bunnycoin.co
* site : http://bunnycoin.co
* @title Ownable
* @dev The Ownable contract has an owner address, and provides basic authorization control
* functions, this simplifies the implementation of "user permissions".
*/

contract Ownable {
    
    address owner;
    address ownerMoney;   
    
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
 

    /**
    * @dev The Ownable constructor sets the original `owner` of the contract to the sender
    * account.
    */    
    constructor() public {
        owner = msg.sender;
        ownerMoney = msg.sender;
    }

    /**
    * @dev Throws if called by any account other than the owner.
    */
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

 

    function transferMoney(address _add) public  onlyOwner {
        if (_add != address(0)) {
            ownerMoney = _add;
        }
    }
    
 
    function transferOwner(address _add) public onlyOwner {
        if (_add != address(0)) {
            owner = _add;
        }
    } 
      
    function getOwnerMoney() public view onlyOwner returns(address) {
        return ownerMoney;
    } 
 
}

 