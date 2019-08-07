import EmbarkJS from '../embarkjs';
let TestSimpleDelegatePluginJSONConfig = {"contract_name":{"className":"TestSimpleDelegatePlugin","args":[],"code":"6060604052341561000f57600080fd5b6040516020806105798339810160405280805191505033600160a060020a039081163291909116141561004157600080fd5b6000805460e060020a60ff0219600160a060020a039093166801000000000000000002604060020a60e060020a031990911617919091167c01000000000000000000000000000000000000000000000000000000001790556104d1806100a86000396000f3006060604052600436106100485763ffffffff60e060020a60003504166320fe5c2a811461004d5780637c032d5f1461007d578063ad1483c31461011e578063d4edf5e514610153575b600080fd5b341561005857600080fd5b61006061019a565b60405167ffffffffffffffff909116815260200160405180910390f35b341561008857600080fd5b61011c60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101aa915050565b005b341561012957600080fd5b61011c67ffffffffffffffff600435811690602435811690604435811690606435166084356103a4565b341561015e57600080fd5b61018867ffffffffffffffff60043581169060243581169060443581169060643516608435610423565b60405190815260200160405180910390f35b60005467ffffffffffffffff1681565b60005460e060020a900460ff1615156101c257600080fd5b600060089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352dc7dcc8484843060006040516020015260405160e060020a63ffffffff871602815267ffffffffffffffff8316604482015273ffffffffffffffffffffffffffffffffffffffff82166064820152608060048201908152908190602481019060840187818151815260200191508051906020019080838360005b8381101561028f578082015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102f25780820151838201526020016102da565b50505050905090810190601f16801561031f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b151561034157600080fd5b6102c65a03f1151561035257600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff92909216919091177fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905550505050565b60005460e060020a900460ff16156103bb57600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805460e060020a900460ff161561043b57600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a72305820339f4189a97ce41047c269bfa43a051bc460f8595c05551ac91641b6239a40540029","runtimeBytecode":"6060604052600436106100485763ffffffff60e060020a60003504166320fe5c2a811461004d5780637c032d5f1461007d578063ad1483c31461011e578063d4edf5e514610153575b600080fd5b341561005857600080fd5b61006061019a565b60405167ffffffffffffffff909116815260200160405180910390f35b341561008857600080fd5b61011c60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101aa915050565b005b341561012957600080fd5b61011c67ffffffffffffffff600435811690602435811690604435811690606435166084356103a4565b341561015e57600080fd5b61018867ffffffffffffffff60043581169060243581169060443581169060643516608435610423565b60405190815260200160405180910390f35b60005467ffffffffffffffff1681565b60005460e060020a900460ff1615156101c257600080fd5b600060089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352dc7dcc8484843060006040516020015260405160e060020a63ffffffff871602815267ffffffffffffffff8316604482015273ffffffffffffffffffffffffffffffffffffffff82166064820152608060048201908152908190602481019060840187818151815260200191508051906020019080838360005b8381101561028f578082015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102f25780820151838201526020016102da565b50505050905090810190601f16801561031f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b151561034157600080fd5b6102c65a03f1151561035257600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff92909216919091177fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905550505050565b60005460e060020a900460ff16156103bb57600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805460e060020a900460ff161561043b57600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a72305820339f4189a97ce41047c269bfa43a051bc460f8595c05551ac91641b6239a40540029","realRuntimeBytecode":"6060604052600436106100485763ffffffff60e060020a60003504166320fe5c2a811461004d5780637c032d5f1461007d578063ad1483c31461011e578063d4edf5e514610153575b600080fd5b341561005857600080fd5b61006061019a565b60405167ffffffffffffffff909116815260200160405180910390f35b341561008857600080fd5b61011c60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101aa915050565b005b341561012957600080fd5b61011c67ffffffffffffffff600435811690602435811690604435811690606435166084356103a4565b341561015e57600080fd5b61018867ffffffffffffffff60043581169060243581169060443581169060643516608435610423565b60405190815260200160405180910390f35b60005467ffffffffffffffff1681565b60005460e060020a900460ff1615156101c257600080fd5b600060089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352dc7dcc8484843060006040516020015260405160e060020a63ffffffff871602815267ffffffffffffffff8316604482015273ffffffffffffffffffffffffffffffffffffffff82166064820152608060048201908152908190602481019060840187818151815260200191508051906020019080838360005b8381101561028f578082015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102f25780820151838201526020016102da565b50505050905090810190601f16801561031f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b151561034157600080fd5b6102c65a03f1151561035257600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff92909216919091177fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905550505050565b60005460e060020a900460ff16156103bb57600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805460e060020a900460ff161561043b57600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a72305820","linkReferences":{},"swarmHash":"339f4189a97ce41047c269bfa43a051bc460f8595c05551ac91641b6239a4054","gasEstimates":{"creation":{"codeDepositCost":"246600","executionCost":"20994","totalCost":"267594"},"external":{"afterTransfer(uint64,uint64,uint64,uint64,uint256)":"2800","beforeTransfer(uint64,uint64,uint64,uint64,uint256)":"2870","idDelegate()":"451","init(string,string,uint64)":"infinite"}},"functionHashes":{"afterTransfer(uint64,uint64,uint64,uint64,uint256)":"ad1483c3","beforeTransfer(uint64,uint64,uint64,uint64,uint256)":"d4edf5e5","idDelegate()":"20fe5c2a","init(string,string,uint64)":"7c032d5f"},"abiDefinition":[{"constant":true,"inputs":[],"name":"idDelegate","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pledgeAdmin","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"afterTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pledgeAdmin","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"beforeTransfer","outputs":[{"name":"maxAllowed","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_liquidPledging","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pledgeAdmin","type":"uint64"},{"indexed":false,"name":"pledgeFrom","type":"uint64"},{"indexed":false,"name":"pledgeTo","type":"uint64"},{"indexed":false,"name":"context","type":"uint64"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"BeforeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pledgeAdmin","type":"uint64"},{"indexed":false,"name":"pledgeFrom","type":"uint64"},{"indexed":false,"name":"pledgeTo","type":"uint64"},{"indexed":false,"name":"context","type":"uint64"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"AfterTransfer","type":"event"}],"filename":"/Users/Barry/projects/status-im/liquid-funding/.embark/contracts/test/TestSimpleDelegatePlugin.sol","originalFilename":"contracts/test/TestSimpleDelegatePlugin.sol","path":"/Users/Barry/projects/status-im/liquid-funding/contracts/test/TestSimpleDelegatePlugin.sol","gas":"auto","type":"file","deploy":false,"_gasLimit":6000000,"error":false},"code":"6060604052341561000f57600080fd5b6040516020806105798339810160405280805191505033600160a060020a039081163291909116141561004157600080fd5b6000805460e060020a60ff0219600160a060020a039093166801000000000000000002604060020a60e060020a031990911617919091167c01000000000000000000000000000000000000000000000000000000001790556104d1806100a86000396000f3006060604052600436106100485763ffffffff60e060020a60003504166320fe5c2a811461004d5780637c032d5f1461007d578063ad1483c31461011e578063d4edf5e514610153575b600080fd5b341561005857600080fd5b61006061019a565b60405167ffffffffffffffff909116815260200160405180910390f35b341561008857600080fd5b61011c60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101aa915050565b005b341561012957600080fd5b61011c67ffffffffffffffff600435811690602435811690604435811690606435166084356103a4565b341561015e57600080fd5b61018867ffffffffffffffff60043581169060243581169060443581169060643516608435610423565b60405190815260200160405180910390f35b60005467ffffffffffffffff1681565b60005460e060020a900460ff1615156101c257600080fd5b600060089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352dc7dcc8484843060006040516020015260405160e060020a63ffffffff871602815267ffffffffffffffff8316604482015273ffffffffffffffffffffffffffffffffffffffff82166064820152608060048201908152908190602481019060840187818151815260200191508051906020019080838360005b8381101561028f578082015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102f25780820151838201526020016102da565b50505050905090810190601f16801561031f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b151561034157600080fd5b6102c65a03f1151561035257600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff92909216919091177fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905550505050565b60005460e060020a900460ff16156103bb57600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805460e060020a900460ff161561043b57600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a72305820339f4189a97ce41047c269bfa43a051bc460f8595c05551ac91641b6239a40540029","runtime_bytecode":"6060604052600436106100485763ffffffff60e060020a60003504166320fe5c2a811461004d5780637c032d5f1461007d578063ad1483c31461011e578063d4edf5e514610153575b600080fd5b341561005857600080fd5b61006061019a565b60405167ffffffffffffffff909116815260200160405180910390f35b341561008857600080fd5b61011c60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101aa915050565b005b341561012957600080fd5b61011c67ffffffffffffffff600435811690602435811690604435811690606435166084356103a4565b341561015e57600080fd5b61018867ffffffffffffffff60043581169060243581169060443581169060643516608435610423565b60405190815260200160405180910390f35b60005467ffffffffffffffff1681565b60005460e060020a900460ff1615156101c257600080fd5b600060089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352dc7dcc8484843060006040516020015260405160e060020a63ffffffff871602815267ffffffffffffffff8316604482015273ffffffffffffffffffffffffffffffffffffffff82166064820152608060048201908152908190602481019060840187818151815260200191508051906020019080838360005b8381101561028f578082015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102f25780820151838201526020016102da565b50505050905090810190601f16801561031f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b151561034157600080fd5b6102c65a03f1151561035257600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff92909216919091177fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905550505050565b60005460e060020a900460ff16156103bb57600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805460e060020a900460ff161561043b57600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a72305820339f4189a97ce41047c269bfa43a051bc460f8595c05551ac91641b6239a40540029","real_runtime_bytecode":"6060604052600436106100485763ffffffff60e060020a60003504166320fe5c2a811461004d5780637c032d5f1461007d578063ad1483c31461011e578063d4edf5e514610153575b600080fd5b341561005857600080fd5b61006061019a565b60405167ffffffffffffffff909116815260200160405180910390f35b341561008857600080fd5b61011c60046024813581810190830135806020601f8201819004810201604051908101604052818152929190602084018383808284378201915050505050509190803590602001908201803590602001908080601f0160208091040260200160405190810160405281815292919060208401838380828437509496505050923567ffffffffffffffff1692506101aa915050565b005b341561012957600080fd5b61011c67ffffffffffffffff600435811690602435811690604435811690606435166084356103a4565b341561015e57600080fd5b61018867ffffffffffffffff60043581169060243581169060443581169060643516608435610423565b60405190815260200160405180910390f35b60005467ffffffffffffffff1681565b60005460e060020a900460ff1615156101c257600080fd5b600060089054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166352dc7dcc8484843060006040516020015260405160e060020a63ffffffff871602815267ffffffffffffffff8316604482015273ffffffffffffffffffffffffffffffffffffffff82166064820152608060048201908152908190602481019060840187818151815260200191508051906020019080838360005b8381101561028f578082015183820152602001610277565b50505050905090810190601f1680156102bc5780820380516001836020036101000a031916815260200191505b50838103825286818151815260200191508051906020019080838360005b838110156102f25780820151838201526020016102da565b50505050905090810190601f16801561031f5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b151561034157600080fd5b6102c65a03f1151561035257600080fd5b50505060405180516000805467ffffffffffffffff191667ffffffffffffffff92909216919091177fffffff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905550505050565b60005460e060020a900460ff16156103bb57600080fd5b7fd3b94fd0ec63b2f94d5dcc25db5025576f742d1da773c386b38e308b43841bba858585858560405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a15050505050565b6000805460e060020a900460ff161561043b57600080fd5b7fb5ecb36c4ccb2023ce7243cc977d0c33d9931336485a793d948379f39f700ea3868686868660405167ffffffffffffffff9586168152938516602085015291841660408085019190915293166060830152608082015260a001905180910390a1959450505050505600a165627a7a72305820","swarm_hash":"339f4189a97ce41047c269bfa43a051bc460f8595c05551ac91641b6239a4054","gas_estimates":{"creation":{"codeDepositCost":"246600","executionCost":"20994","totalCost":"267594"},"external":{"afterTransfer(uint64,uint64,uint64,uint64,uint256)":"2800","beforeTransfer(uint64,uint64,uint64,uint64,uint256)":"2870","idDelegate()":"451","init(string,string,uint64)":"infinite"}},"function_hashes":{"afterTransfer(uint64,uint64,uint64,uint64,uint256)":"ad1483c3","beforeTransfer(uint64,uint64,uint64,uint64,uint256)":"d4edf5e5","idDelegate()":"20fe5c2a","init(string,string,uint64)":"7c032d5f"},"abi":[{"constant":true,"inputs":[],"name":"idDelegate","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"url","type":"string"},{"name":"commitTime","type":"uint64"}],"name":"init","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pledgeAdmin","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"afterTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"pledgeAdmin","type":"uint64"},{"name":"pledgeFrom","type":"uint64"},{"name":"pledgeTo","type":"uint64"},{"name":"context","type":"uint64"},{"name":"amount","type":"uint256"}],"name":"beforeTransfer","outputs":[{"name":"maxAllowed","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_liquidPledging","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pledgeAdmin","type":"uint64"},{"indexed":false,"name":"pledgeFrom","type":"uint64"},{"indexed":false,"name":"pledgeTo","type":"uint64"},{"indexed":false,"name":"context","type":"uint64"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"BeforeTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"pledgeAdmin","type":"uint64"},{"indexed":false,"name":"pledgeFrom","type":"uint64"},{"indexed":false,"name":"pledgeTo","type":"uint64"},{"indexed":false,"name":"context","type":"uint64"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"AfterTransfer","type":"event"}]};
let TestSimpleDelegatePlugin = new EmbarkJS.Blockchain.Contract(TestSimpleDelegatePluginJSONConfig);
export default TestSimpleDelegatePlugin;
