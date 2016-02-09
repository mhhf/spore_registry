import "../spore_packages/owned-dAtZ66Qj/contracts/owned";

contract mortal is owned {
  function kill() {
    if (msg.sender == owner) suicide(owner); 
  }
}
