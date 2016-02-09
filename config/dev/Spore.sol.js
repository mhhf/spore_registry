"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Spore = (function (_Pudding) {
    _inherits(Spore, _Pudding);

    function Spore() {
      _classCallCheck(this, Spore);

      _get(Object.getPrototypeOf(Spore.prototype), "constructor", this).apply(this, arguments);
    }

    return Spore;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Spore.abi = [{ "constant": true, "inputs": [], "name": "numPackages", "outputs": [{ "name": "number", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "bytes32" }, { "name": "ipfs", "type": "string" }], "name": "registerPackage", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [], "name": "getAll", "outputs": [{ "name": "names", "type": "bytes32[]" }], "type": "function" }, { "constant": true, "inputs": [], "name": "version", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "packagesArray", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "name", "type": "bytes32" }, { "name": "to", "type": "address" }], "name": "transfearOwner", "outputs": [], "type": "function" }, { "constant": true, "inputs": [{ "name": "name", "type": "bytes32" }], "name": "getOwner", "outputs": [{ "name": "owner", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "name", "type": "bytes32" }], "name": "getLink", "outputs": [{ "name": "link", "type": "string" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "name", "type": "bytes32" }, { "indexed": false, "name": "ipfs", "type": "string" }], "name": "Update", "type": "event" }];
  Spore.binary = "606060405261060a806100126000396000f36060604052361561006c5760e060020a60003504633e6b1c16811461006e5780634089462d1461007857806353ed51431461010657806354fd4d501461018657806356260a71146101af57806358b83ba4146101eb578063deb931a21461023f578063f729112114610263575b005b6102dc6000545b90565b60408051602060248035600481810135601f81018590048502860185019096528585526102dc958135959194604494929390920191819084018382808284375094965050505050505060008281526001602052604081208054600160a060020a031682148015906100f857508054600160a060020a039081163390911614155b1561046b5760009150610464565b6040805160208181018352600080835283518154808402820184019095528481526102ee94909283018282801561017a579080526020028101907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563905b816000505481526020019060010190808311610163575b50505050509050610075565b6102dc7f302e302e32000000000000000000000000000000000000000000000000000000610075565b6102dc600435600080548290811015610002575080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563015481565b61006c600435602435600082815260016020526040902054600160a060020a0390811633909116141561023b576040600020805473ffffffffffffffffffffffffffffffffffffffff1916821790555b5050565b610338600435600081815260016020526040902054600160a060020a03165b919050565b6103556004356040805160208181018352600080835284815260018083528451918590208101805460029281161561010002600019011691909104601f810184900484028301840190955284825292939092918301828280156105fe5780601f106105d3576101008083540402835291602001916105fe565b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b60408051600160a060020a03929092168252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b50509050507f6e7287b110b0d2f738952766cb4d4281ce49164b34e66493ebaf76c6c75c0adf848460405180838152602001806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156104515780820380516001836020036101000a031916815260200191505b50935050505060405180910390a1600191505b5092915050565b8054600160a060020a0316600014156104f25760008054600181018083559091908280158290116104af578183600052602060002091820191016104af919061058b565b505060008054879350909150600019810190811015610002575080549080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56201555b6040805180820182523381526020818101868152600088815260018084529481208451815473ffffffffffffffffffffffffffffffffffffffff191617815591518051838701805481855293869020969794969095600295851615610100026000190190941694909404601f90810184900485019491939192909101908390106105a357805160ff19168380011785555b506103c39291505b8082111561059f576000815560010161058b565b5090565b82800160010185558215610583579182015b828111156105835782518260005055916020019190600101906105b5565b820191906000526020600020905b8154815290600101906020018083116105e157829003601f168201915b5050505050905061025e56";

  if ("0x9507bd128f75df2c7af38aaec839841e73c3a3ab" != "") {
    Spore.address = "0x9507bd128f75df2c7af38aaec839841e73c3a3ab";

    // Backward compatibility; Deprecated.
    Spore.deployed_address = "0x9507bd128f75df2c7af38aaec839841e73c3a3ab";
  }

  Spore.generated_with = "1.0.2";
  Spore.contract_name = "Spore";

  return Spore;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Spore = factory;
}