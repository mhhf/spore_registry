import "../spore_packages/owned-TEoYCRgy/contracts/owned";

contract mortal is owned {
  function kill() {
    if (msg.sender == owner) suicide(owner); 
  }
}
