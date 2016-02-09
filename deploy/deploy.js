var toDeploy = { "spore": "QmQ66tgGfJnHAwQ9EwWSm7W7FKc2T9gafw4DWXVPbyECqQ" };





var spore = Spore.at( Spore.deployed_address );

var keys = Object.keys(toDeploy);
var len = keys.length;

for ( var i=0; i<len; i++ ) {
  spore.registerPackage( keys[i], toDeploy[ keys[i] ] ).then( tx => {
    if( --len == 0) {
      process.exit();
    }
  });
}
