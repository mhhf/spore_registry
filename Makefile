test: contracts/Spore.sol
	truffle deploy
	cp config/development/contracts.json ../cli/contract.json
	echo "remote_contract = " > ../meteor/lib/remoteSettings.js
	cat config/development/contracts.json |jq '{host:"localhost", port:"8545", address: .[].address}' >> ../meteor/lib/remoteSettings.js
	echo ";" >> ../meteor/lib/remoteSettings.js
	
dev: contracts/Spore.sol
	truffle deploy -e dev --verbose-rpc > rpc.log
	cp config/dev/contracts.json ../cli/contract.json
	echo "remote_contract = " > ../meteor/lib/remoteSettings.js
	cat config/dev/contracts.json |jq '{host:"192.168.59.103", port:"8545", address: .[].address}' >> ../meteor/lib/remoteSettings.js
	echo ";" >> ../meteor/lib/remoteSettings.js
