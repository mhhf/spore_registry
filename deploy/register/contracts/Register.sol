import "../spore_packages/mortal-Qn4p5PNT/contracts/mortal";

contract priced {
  // Modifiers can receive arguments:
  modifier costs(uint price) { if (msg.value >= price) _ }
}
contract Register is priced, mortal{
  mapping (address => bool) registeredAddresses;
  uint price;
  function Register(uint initialPrice) { price = initialPrice; }
  function register() costs(price) {
    registeredAddresses[msg.sender] = true;
  }
  function changePrice(uint _price) onlyowner {
    price = _price;
  }
}
