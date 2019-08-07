import EmbarkJS from '../embarkjs';
let DeployDelegateScriptJSONConfig = {"contract_name":{"className":"DeployDelegateScript","args":[],"code":"6060604052341561000f57600080fd5b6104738061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa610435565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181527f4000000000000000000000000000000000000000000000000000000000000000602052604090205490925073ffffffffffffffffffffffffffffffffffffffff169050801515610211576101ae89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610257945050505050565b60008381527f400000000000000000000000000000000000000000000000000000000000000060205260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61024a8188888080601f016020809104026020016040519081016040528181529291906020840183838082843750610279945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b1560018114610040575b50919050565b610281610435565b610289610435565b61029284610364565b151561029d57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1660008451116102ca576102c5610397565b6102cc565b835b60405180828051906020019080838360005b838110156102f65780820151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f4915050151561034557600080fd5b61034d6103cd565b9050600081511161035d57600080fd5b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8316151561038d5760009150610273565b50506000903b1190565b61039f610435565b6103c87fc1c0e9c4000000000000000000000000000000000000000000000000000000006103f3565b905090565b6103d5610435565b3d6040519150602081018201604052808252806000602084013e5090565b6103fb610435565b610403610435565b60046040518059106104125750595b8181526020601f909201601f191681018201604052908101939093525090919050565b602060405190810160405260008152905600a165627a7a723058205449088182cae5005b73a10886318b8c8e5f45159863160fd842f7b9abbac6d20029","runtimeBytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa610435565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181527f4000000000000000000000000000000000000000000000000000000000000000602052604090205490925073ffffffffffffffffffffffffffffffffffffffff169050801515610211576101ae89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610257945050505050565b60008381527f400000000000000000000000000000000000000000000000000000000000000060205260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61024a8188888080601f016020809104026020016040519081016040528181529291906020840183838082843750610279945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b1560018114610040575b50919050565b610281610435565b610289610435565b61029284610364565b151561029d57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1660008451116102ca576102c5610397565b6102cc565b835b60405180828051906020019080838360005b838110156102f65780820151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f4915050151561034557600080fd5b61034d6103cd565b9050600081511161035d57600080fd5b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8316151561038d5760009150610273565b50506000903b1190565b61039f610435565b6103c87fc1c0e9c4000000000000000000000000000000000000000000000000000000006103f3565b905090565b6103d5610435565b3d6040519150602081018201604052808252806000602084013e5090565b6103fb610435565b610403610435565b60046040518059106104125750595b8181526020601f909201601f191681018201604052908101939093525090919050565b602060405190810160405260008152905600a165627a7a723058205449088182cae5005b73a10886318b8c8e5f45159863160fd842f7b9abbac6d20029","realRuntimeBytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa610435565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181527f4000000000000000000000000000000000000000000000000000000000000000602052604090205490925073ffffffffffffffffffffffffffffffffffffffff169050801515610211576101ae89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610257945050505050565b60008381527f400000000000000000000000000000000000000000000000000000000000000060205260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61024a8188888080601f016020809104026020016040519081016040528181529291906020840183838082843750610279945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b1560018114610040575b50919050565b610281610435565b610289610435565b61029284610364565b151561029d57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1660008451116102ca576102c5610397565b6102cc565b835b60405180828051906020019080838360005b838110156102f65780820151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f4915050151561034557600080fd5b61034d6103cd565b9050600081511161035d57600080fd5b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8316151561038d5760009150610273565b50506000903b1190565b61039f610435565b6103c87fc1c0e9c4000000000000000000000000000000000000000000000000000000006103f3565b905090565b6103d5610435565b3d6040519150602081018201604052808252806000602084013e5090565b6103fb610435565b610403610435565b60046040518059106104125750595b8181526020601f909201601f191681018201604052908101939093525090919050565b602060405190810160405260008152905600a165627a7a72305820","linkReferences":{},"swarmHash":"5449088182cae5005b73a10886318b8c8e5f45159863160fd842f7b9abbac6d2","gasEstimates":{"creation":{"codeDepositCost":"227800","executionCost":"264","totalCost":"228064"},"external":{"execScript(bytes,bytes,address[])":"infinite"},"internal":{"deploy(bytes memory)":"infinite"}},"functionHashes":{"execScript(bytes,bytes,address[])":"279cea35"},"abiDefinition":[{"constant":false,"inputs":[{"name":"_script","type":"bytes"},{"name":"_input","type":"bytes"},{"name":"_blacklist","type":"address[]"}],"name":"execScript","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"}],"filename":"/Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/evmscript/executors/DeployDelegateScript.sol","originalFilename":"contracts//Users/Barry/projects/status-im/liquid-funding/.embark/node_modules/@aragon/os/contracts/evmscript/executors/DeployDelegateScript.sol","path":"/Users/Barry/projects/status-im/liquid-funding/contracts/.embark/node_modules/@aragon/os/contracts/evmscript/executors/DeployDelegateScript.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b6104738061001e6000396000f3006060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa610435565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181527f4000000000000000000000000000000000000000000000000000000000000000602052604090205490925073ffffffffffffffffffffffffffffffffffffffff169050801515610211576101ae89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610257945050505050565b60008381527f400000000000000000000000000000000000000000000000000000000000000060205260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61024a8188888080601f016020809104026020016040519081016040528181529291906020840183838082843750610279945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b1560018114610040575b50919050565b610281610435565b610289610435565b61029284610364565b151561029d57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1660008451116102ca576102c5610397565b6102cc565b835b60405180828051906020019080838360005b838110156102f65780820151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f4915050151561034557600080fd5b61034d6103cd565b9050600081511161035d57600080fd5b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8316151561038d5760009150610273565b50506000903b1190565b61039f610435565b6103c87fc1c0e9c4000000000000000000000000000000000000000000000000000000006103f3565b905090565b6103d5610435565b3d6040519150602081018201604052808252806000602084013e5090565b6103fb610435565b610403610435565b60046040518059106104125750595b8181526020601f909201601f191681018201604052908101939093525090919050565b602060405190810160405260008152905600a165627a7a723058205449088182cae5005b73a10886318b8c8e5f45159863160fd842f7b9abbac6d20029","runtime_bytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa610435565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181527f4000000000000000000000000000000000000000000000000000000000000000602052604090205490925073ffffffffffffffffffffffffffffffffffffffff169050801515610211576101ae89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610257945050505050565b60008381527f400000000000000000000000000000000000000000000000000000000000000060205260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61024a8188888080601f016020809104026020016040519081016040528181529291906020840183838082843750610279945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b1560018114610040575b50919050565b610281610435565b610289610435565b61029284610364565b151561029d57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1660008451116102ca576102c5610397565b6102cc565b835b60405180828051906020019080838360005b838110156102f65780820151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f4915050151561034557600080fd5b61034d6103cd565b9050600081511161035d57600080fd5b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8316151561038d5760009150610273565b50506000903b1190565b61039f610435565b6103c87fc1c0e9c4000000000000000000000000000000000000000000000000000000006103f3565b905090565b6103d5610435565b3d6040519150602081018201604052808252806000602084013e5090565b6103fb610435565b610403610435565b60046040518059106104125750595b8181526020601f909201601f191681018201604052908101939093525090919050565b602060405190810160405260008152905600a165627a7a723058205449088182cae5005b73a10886318b8c8e5f45159863160fd842f7b9abbac6d20029","real_runtime_bytecode":"6060604052600436106100405763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663279cea358114610045575b600080fd5b341561005057600080fd5b61007b60246004803582810192908201359181358083019290820135916044359182019101356100f2565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156100b757808201518382015260200161009f565b50505050905090810190601f1680156100e45780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100fa610435565b600080831561010857600080fd5b88886040518083838082843782019150509250505060405190819003902060008181527f4000000000000000000000000000000000000000000000000000000000000000602052604090205490925073ffffffffffffffffffffffffffffffffffffffff169050801515610211576101ae89898080601f016020809104026020016040519081016040528181529291906020840183838082843750610257945050505050565b60008381527f400000000000000000000000000000000000000000000000000000000000000060205260409020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff831617905590505b61024a8188888080601f016020809104026020016040519081016040528181529291906020840183838082843750610279945050505050565b9998505050505050505050565b60006004825103602483016000f09050803b1560018114610040575b50919050565b610281610435565b610289610435565b61029284610364565b151561029d57600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1660008451116102ca576102c5610397565b6102cc565b835b60405180828051906020019080838360005b838110156102f65780820151838201526020016102de565b50505050905090810190601f1680156103235780820380516001836020036101000a031916815260200191505b509150506000604051808303818561646e5a03f4915050151561034557600080fd5b61034d6103cd565b9050600081511161035d57600080fd5b9392505050565b60008073ffffffffffffffffffffffffffffffffffffffff8316151561038d5760009150610273565b50506000903b1190565b61039f610435565b6103c87fc1c0e9c4000000000000000000000000000000000000000000000000000000006103f3565b905090565b6103d5610435565b3d6040519150602081018201604052808252806000602084013e5090565b6103fb610435565b610403610435565b60046040518059106104125750595b8181526020601f909201601f191681018201604052908101939093525090919050565b602060405190810160405260008152905600a165627a7a72305820","swarm_hash":"5449088182cae5005b73a10886318b8c8e5f45159863160fd842f7b9abbac6d2","gas_estimates":{"creation":{"codeDepositCost":"227800","executionCost":"264","totalCost":"228064"},"external":{"execScript(bytes,bytes,address[])":"infinite"},"internal":{"deploy(bytes memory)":"infinite"}},"function_hashes":{"execScript(bytes,bytes,address[])":"279cea35"},"abi":[{"constant":false,"inputs":[{"name":"_script","type":"bytes"},{"name":"_input","type":"bytes"},{"name":"_blacklist","type":"address[]"}],"name":"execScript","outputs":[{"name":"","type":"bytes"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]};
let DeployDelegateScript = new EmbarkJS.Blockchain.Contract(DeployDelegateScriptJSONConfig);
export default DeployDelegateScript;
