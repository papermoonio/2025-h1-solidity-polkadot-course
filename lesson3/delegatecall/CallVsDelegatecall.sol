// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Proxy {

    function callTarget(address _to, bool is_delegate) public {

        bytes memory data = abi.encode(Incrementer.increment.selector);
        if(is_delegate) {
            assembly {
                pop(delegatecall(gas(), _to, add(data, 0x20), mload(data), 0, 0))
            }
        } else {
            assembly {
                pop(call(gas(), _to, 0, add(data, 0x20), mload(data), 0, 0))
            }
        }
    }


    function getStorage(uint _slot) public view returns (bytes32 data) {
        assembly {
            data := sload(_slot)
        }
    }

}


contract Incrementer {

    uint256 public a; // slot 0

    function increment() public {
        a += 1;
    }

}