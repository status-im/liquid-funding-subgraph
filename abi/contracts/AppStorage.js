import EmbarkJS from '../embarkjs';
let AppStorageJSONConfig = {"contract_name":{"className":"AppStorage","args":[],"code":"6060604052341561000f57600080fd5b60f68061001d6000396000f30060606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114604d578063d4aae0c414606f575b600080fd5b3415605757600080fd5b605d60a8565b60405190815260200160405180910390f35b3415607957600080fd5b607f60ae565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582089361f72a7818fb7a57006952f8ba1911617be41b680b9def915c4895fc46e740029","runtimeBytecode":"60606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114604d578063d4aae0c414606f575b600080fd5b3415605757600080fd5b605d60a8565b60405190815260200160405180910390f35b3415607957600080fd5b607f60ae565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582089361f72a7818fb7a57006952f8ba1911617be41b680b9def915c4895fc46e740029","realRuntimeBytecode":"60606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114604d578063d4aae0c414606f575b600080fd5b3415605757600080fd5b605d60a8565b60405190815260200160405180910390f35b3415607957600080fd5b607f60ae565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820","linkReferences":{},"swarmHash":"89361f72a7818fb7a57006952f8ba1911617be41b680b9def915c4895fc46e74","gasEstimates":{"creation":{"codeDepositCost":"49200","executionCost":"94","totalCost":"49294"},"external":{"appId()":"373","kernel()":"410"}},"functionHashes":{"appId()":"80afdea8","kernel()":"d4aae0c4"},"abiDefinition":[{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],"filename":"/Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/apps/AppStorage.sol","originalFilename":"contracts//Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/apps/AppStorage.sol","path":"/Users/Barry/projects/status-im/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/apps/AppStorage.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b60f68061001d6000396000f30060606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114604d578063d4aae0c414606f575b600080fd5b3415605757600080fd5b605d60a8565b60405190815260200160405180910390f35b3415607957600080fd5b607f60ae565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582089361f72a7818fb7a57006952f8ba1911617be41b680b9def915c4895fc46e740029","runtime_bytecode":"60606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114604d578063d4aae0c414606f575b600080fd5b3415605757600080fd5b605d60a8565b60405190815260200160405180910390f35b3415607957600080fd5b607f60ae565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582089361f72a7818fb7a57006952f8ba1911617be41b680b9def915c4895fc46e740029","real_runtime_bytecode":"60606040526004361060485763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166380afdea88114604d578063d4aae0c414606f575b600080fd5b3415605757600080fd5b605d60a8565b60405190815260200160405180910390f35b3415607957600080fd5b607f60ae565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015481565b60005473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a72305820","swarm_hash":"89361f72a7818fb7a57006952f8ba1911617be41b680b9def915c4895fc46e74","gas_estimates":{"creation":{"codeDepositCost":"49200","executionCost":"94","totalCost":"49294"},"external":{"appId()":"373","kernel()":"410"}},"function_hashes":{"appId()":"80afdea8","kernel()":"d4aae0c4"},"abi":[{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]};
let AppStorage = new EmbarkJS.Blockchain.Contract(AppStorageJSONConfig);
export default AppStorage;
