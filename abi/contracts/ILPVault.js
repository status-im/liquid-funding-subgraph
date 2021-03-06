import EmbarkJS from '../embarkjs';
let ILPVaultJSONConfig = {"contract_name":{"className":"ILPVault","args":[],"code":"","runtimeBytecode":"","realRuntimeBytecode":"","linkReferences":{},"swarmHash":"","gasEstimates":null,"functionHashes":{"authorizePayment(bytes32,address,address,uint256)":"a5426df1"},"abiDefinition":[{"constant":false,"inputs":[{"name":"_ref","type":"bytes32"},{"name":"_dest","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"authorizePayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"filename":"/Users/Barry/projects/status-im/liquid-funding/.embark/contracts/LiquidPledgingStorage.sol","originalFilename":"contracts/LiquidPledgingStorage.sol","path":"/Users/Barry/projects/status-im/liquid-funding/contracts/LiquidPledgingStorage.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"","runtime_bytecode":"","real_runtime_bytecode":"","swarm_hash":"","gas_estimates":null,"function_hashes":{"authorizePayment(bytes32,address,address,uint256)":"a5426df1"},"abi":[{"constant":false,"inputs":[{"name":"_ref","type":"bytes32"},{"name":"_dest","type":"address"},{"name":"_token","type":"address"},{"name":"_amount","type":"uint256"}],"name":"authorizePayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]};
let ILPVault = new EmbarkJS.Blockchain.Contract(ILPVaultJSONConfig);
export default ILPVault;
