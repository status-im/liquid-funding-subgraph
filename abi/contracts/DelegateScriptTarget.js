import EmbarkJS from '../embarkjs';
let DelegateScriptTargetJSONConfig = {"contract_name":{"className":"DelegateScriptTarget","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"exec()":"c1c0e9c4"},"abiDefinition":[{"constant":false,"inputs":[],"name":"exec","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"filename":"/Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/evmscript/executors/DelegateScript.sol","originalFilename":"contracts//Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/evmscript/executors/DelegateScript.sol","path":"/Users/Barry/projects/status-im/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/evmscript/executors/DelegateScript.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"exec()":"c1c0e9c4"},"abi":[{"constant":false,"inputs":[],"name":"exec","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]};
let DelegateScriptTarget = new EmbarkJS.Blockchain.Contract(DelegateScriptTargetJSONConfig);
export default DelegateScriptTarget;
