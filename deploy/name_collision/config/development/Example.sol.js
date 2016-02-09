"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Example = (function (_Pudding) {
    _inherits(Example, _Pudding);

    function Example() {
      _classCallCheck(this, Example);

      _get(Object.getPrototypeOf(Example.prototype), "constructor", this).apply(this, arguments);
    }

    return Example;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Example.abi = [{ "constant": false, "inputs": [], "name": "a", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "a1", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "n", "type": "uint256" }, { "name": "m", "type": "uint256" }], "name": "d", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "s", "type": "string" }, { "name": "n", "type": "uint256" }], "name": "c", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "a3", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "a2", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "n", "type": "uint256" }], "name": "b", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "a4", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  Example.binary = "606060405260008080556001819055600281905560035560fd806100236000396000f36060604052361560635760e060020a60003504630dbe671f81146065578063119552a114607b5780631f3b231b1460835780637072f5eb1460905780639426eef81460d9578063969e9d0c1460e1578063cd580ff31460e9578063f74ea4181460f5575b005b60008054600101908190555b6060908152602090f35b607160005481565b6003805460010190556063565b608060206004803580820135601f810184900490930284016040526060838152606394929360249391928401918190838280828437505060028054600101905550505050505050565b607160025481565b607160015481565b60018054810190556063565b60716003548156";

  if ("0x312481048171bd06678b058bdfb8ee8d7c62ae15" != "") {
    Example.address = "0x312481048171bd06678b058bdfb8ee8d7c62ae15";

    // Backward compatibility; Deprecated.
    Example.deployed_address = "0x312481048171bd06678b058bdfb8ee8d7c62ae15";
  }

  Example.generated_with = "1.0.2";
  Example.contract_name = "Example";

  return Example;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Example = factory;
}