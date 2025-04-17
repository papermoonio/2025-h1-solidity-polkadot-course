export const ABI = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_symbol",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "_decimals",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "_initialSupply",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "success",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

export const BYTECODE = "0x608060405234801561000f575f80fd5b506040516117043803806117048339818101604052810190610031919061028e565b835f908161003f919061052e565b50826001908161004f919061052e565b508160025f6101000a81548160ff021916908360ff1602179055508160ff16600a61007a9190610759565b8161008591906107a3565b60038190555060035460045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f2081905550505050506107e4565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b610137826100f1565b810181811067ffffffffffffffff8211171561015657610155610101565b5b80604052505050565b5f6101686100d8565b9050610174828261012e565b919050565b5f67ffffffffffffffff82111561019357610192610101565b5b61019c826100f1565b9050602081019050919050565b8281835e5f83830152505050565b5f6101c96101c484610179565b61015f565b9050828152602081018484840111156101e5576101e46100ed565b5b6101f08482856101a9565b509392505050565b5f82601f83011261020c5761020b6100e9565b5b815161021c8482602086016101b7565b91505092915050565b5f60ff82169050919050565b61023a81610225565b8114610244575f80fd5b50565b5f8151905061025581610231565b92915050565b5f819050919050565b61026d8161025b565b8114610277575f80fd5b50565b5f8151905061028881610264565b92915050565b5f805f80608085870312156102a6576102a56100e1565b5b5f85015167ffffffffffffffff8111156102c3576102c26100e5565b5b6102cf878288016101f8565b945050602085015167ffffffffffffffff8111156102f0576102ef6100e5565b5b6102fc878288016101f8565b935050604061030d87828801610247565b925050606061031e8782880161027a565b91505092959194509250565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061037857607f821691505b60208210810361038b5761038a610334565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026103ed7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826103b2565b6103f786836103b2565b95508019841693508086168417925050509392505050565b5f819050919050565b5f61043261042d6104288461025b565b61040f565b61025b565b9050919050565b5f819050919050565b61044b83610418565b61045f61045782610439565b8484546103be565b825550505050565b5f90565b610473610467565b61047e818484610442565b505050565b5b818110156104a1576104965f8261046b565b600181019050610484565b5050565b601f8211156104e6576104b781610391565b6104c0846103a3565b810160208510156104cf578190505b6104e36104db856103a3565b830182610483565b50505b505050565b5f82821c905092915050565b5f6105065f19846008026104eb565b1980831691505092915050565b5f61051e83836104f7565b9150826002028217905092915050565b6105378261032a565b67ffffffffffffffff8111156105505761054f610101565b5b61055a8254610361565b6105658282856104a5565b5f60209050601f831160018114610596575f8415610584578287015190505b61058e8582610513565b8655506105f5565b601f1984166105a486610391565b5f5b828110156105cb578489015182556001820191506020850194506020810190506105a6565b868310156105e857848901516105e4601f8916826104f7565b8355505b6001600288020188555050505b505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f8160011c9050919050565b5f808291508390505b600185111561067f5780860481111561065b5761065a6105fd565b5b600185161561066a5780820291505b80810290506106788561062a565b945061063f565b94509492505050565b5f826106975760019050610752565b816106a4575f9050610752565b81600181146106ba57600281146106c4576106f3565b6001915050610752565b60ff8411156106d6576106d56105fd565b5b8360020a9150848211156106ed576106ec6105fd565b5b50610752565b5060208310610133831016604e8410600b84101617156107285782820a905083811115610723576107226105fd565b5b610752565b6107358484846001610636565b9250905081840481111561074c5761074b6105fd565b5b81810290505b9392505050565b5f6107638261025b565b915061076e8361025b565b925061079b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610688565b905092915050565b5f6107ad8261025b565b91506107b88361025b565b92508282026107c68161025b565b915082820484148315176107dd576107dc6105fd565b5b5092915050565b610f13806107f15f395ff3fe608060405234801561000f575f80fd5b5060043610610091575f3560e01c8063313ce56711610064578063313ce5671461013157806370a082311461014f57806395d89b411461017f578063a9059cbb1461019d578063dd62ed3e146101cd57610091565b806306fdde0314610095578063095ea7b3146100b357806318160ddd146100e357806323b872dd14610101575b5f80fd5b61009d6101fd565b6040516100aa9190610a7e565b60405180910390f35b6100cd60048036038101906100c89190610b2f565b610288565b6040516100da9190610b87565b60405180910390f35b6100eb610375565b6040516100f89190610baf565b60405180910390f35b61011b60048036038101906101169190610bc8565b61037b565b6040516101289190610b87565b60405180910390f35b610139610737565b6040516101469190610c33565b60405180910390f35b61016960048036038101906101649190610c4c565b610749565b6040516101769190610baf565b60405180910390f35b61018761075e565b6040516101949190610a7e565b60405180910390f35b6101b760048036038101906101b29190610b2f565b6107ea565b6040516101c49190610b87565b60405180910390f35b6101e760048036038101906101e29190610c77565b6109ee565b6040516101f49190610baf565b60405180910390f35b5f805461020990610ce2565b80601f016020809104026020016040519081016040528092919081815260200182805461023590610ce2565b80156102805780601f1061025757610100808354040283529160200191610280565b820191905f5260205f20905b81548152906001019060200180831161026357829003601f168201915b505050505081565b5f8160055f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103639190610baf565b60405180910390a36001905092915050565b60035481565b5f8073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036103ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e190610d5c565b60405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044f90610d5c565b60405180910390fd5b8160045f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156104d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104cf90610dc4565b60405180910390fd5b8160055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20541015610593576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058a90610e2c565b60405180910390fd5b8160045f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546105df9190610e77565b925050819055508160045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106329190610eaa565b925050819055508160055f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546106c09190610e77565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107249190610baf565b60405180910390a3600190509392505050565b60025f9054906101000a900460ff1681565b6004602052805f5260405f205f915090505481565b6001805461076b90610ce2565b80601f016020809104026020016040519081016040528092919081815260200182805461079790610ce2565b80156107e25780601f106107b9576101008083540402835291602001916107e2565b820191905f5260205f20905b8154815290600101906020018083116107c557829003601f168201915b505050505081565b5f8073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610859576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085090610d5c565b60405180910390fd5b8160045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205410156108d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d090610dc4565b60405180910390fd5b8160045f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546109259190610e77565b925050819055508160045f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546109789190610eaa565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109dc9190610baf565b60405180910390a36001905092915050565b6005602052815f5260405f20602052805f5260405f205f91509150505481565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610a5082610a0e565b610a5a8185610a18565b9350610a6a818560208601610a28565b610a7381610a36565b840191505092915050565b5f6020820190508181035f830152610a968184610a46565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f610acb82610aa2565b9050919050565b610adb81610ac1565b8114610ae5575f80fd5b50565b5f81359050610af681610ad2565b92915050565b5f819050919050565b610b0e81610afc565b8114610b18575f80fd5b50565b5f81359050610b2981610b05565b92915050565b5f8060408385031215610b4557610b44610a9e565b5b5f610b5285828601610ae8565b9250506020610b6385828601610b1b565b9150509250929050565b5f8115159050919050565b610b8181610b6d565b82525050565b5f602082019050610b9a5f830184610b78565b92915050565b610ba981610afc565b82525050565b5f602082019050610bc25f830184610ba0565b92915050565b5f805f60608486031215610bdf57610bde610a9e565b5b5f610bec86828701610ae8565b9350506020610bfd86828701610ae8565b9250506040610c0e86828701610b1b565b9150509250925092565b5f60ff82169050919050565b610c2d81610c18565b82525050565b5f602082019050610c465f830184610c24565b92915050565b5f60208284031215610c6157610c60610a9e565b5b5f610c6e84828501610ae8565b91505092915050565b5f8060408385031215610c8d57610c8c610a9e565b5b5f610c9a85828601610ae8565b9250506020610cab85828601610ae8565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610cf957607f821691505b602082108103610d0c57610d0b610cb5565b5b50919050565b7f496e76616c6964206164647265737300000000000000000000000000000000005f82015250565b5f610d46600f83610a18565b9150610d5182610d12565b602082019050919050565b5f6020820190508181035f830152610d7381610d3a565b9050919050565b7f496e73756666696369656e742062616c616e63650000000000000000000000005f82015250565b5f610dae601483610a18565b9150610db982610d7a565b602082019050919050565b5f6020820190508181035f830152610ddb81610da2565b9050919050565b7f416c6c6f77616e636520657863656564656400000000000000000000000000005f82015250565b5f610e16601283610a18565b9150610e2182610de2565b602082019050919050565b5f6020820190508181035f830152610e4381610e0a565b9050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610e8182610afc565b9150610e8c83610afc565b9250828203905081811115610ea457610ea3610e4a565b5b92915050565b5f610eb482610afc565b9150610ebf83610afc565b9250828201905080821115610ed757610ed6610e4a565b5b9291505056fea264697066735822122048ab8ead4b74e2005489d9cf3bb88213ae5aad4a5f40718c52f963fdebfdfe4864736f6c634300081a0033"