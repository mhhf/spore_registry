var sn;

contract('Spore', function(accounts) {
  
  before( function() {
    sn = Spore.at( Spore.deployed_address );
  })
  
  it("has to be empty", function(done) {
    
    sn.numPackages.call().then( ( num ) => {
      assert.equal( num.toString() ,'0');
      done()
    });
    
  });
  
  it("should register new pacakge", function(done){
    
    sn.registerPackage('a','b').then( (tx) => {
      return sn.numPackages.call();
    }).then( num => {
      assert.equal( num.toString(), '1' );
      done();
    });
    
  });
  
  it("should return the correct package", function(done){
    
    sn.getLink.call('a').then( ipfs => {
      assert.equal( ipfs, 'b' );
      return sn.packagesArray.call(0);
    }).then( ipfs => {
      assert.equal( web3.toAscii(ipfs).replace(/\u0000/g,''), 'a' );
      done();
    });
    
  });

  it("should update old package", function(done){
    
    sn.registerPackage('a','c').then(tx => {
      return sn.numPackages.call();
    }).then( num => {
      assert.equal( num.toString(), '1' );
      return sn.getLink.call('a');
    }).then( ipfs => {
      assert.equal( ipfs, 'c' );
      done();
    });
    
  });

  it("should add an aditional package", function(done){
    
    sn.registerPackage('b','d').then( tx => {
      return sn.numPackages.call();
    }).then( num => {
      assert.equal( num.toString(), '2' );
      done();
    });
    
  });
  
  it("should return an ipfs array of all packages", function(done) {
    sn.getAll.call().then( as => {
      assert.equal(as.length, 2)
      done();
    });
  })
  
});
