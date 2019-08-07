import EmbarkJS from '../embarkjs';
let VaultRecoverableJSONConfig = {"contract_name":{"className":"VaultRecoverable","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"ETH()":"8322fff2","allowRecoverability(address)":"7e7db6e1","getRecoveryVault()":"32f0a3b5","transferToVault(address)":"9d4941d8"},"abiDefinition":[{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"filename":"/Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/common/VaultRecoverable.sol","originalFilename":"contracts//Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/common/VaultRecoverable.sol","path":"/Users/Barry/projects/status-im/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/common/VaultRecoverable.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"ETH()":"8322fff2","allowRecoverability(address)":"7e7db6e1","getRecoveryVault()":"32f0a3b5","transferToVault(address)":"9d4941d8"},"abi":[{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ETH","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]};
let VaultRecoverable = new EmbarkJS.Blockchain.Contract(VaultRecoverableJSONConfig);
export default VaultRecoverable;
