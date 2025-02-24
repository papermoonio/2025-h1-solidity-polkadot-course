// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Called {

    function mustGTFive(uint256 _value) public pure returns (uint256) {
        require(_value > 5, "LT Five");
        return _value;
    }
 }


 contract Calling {
    address called;

    constructor(address _called) {
        called = _called;
    }

    function withoutAsm() public view {
        Called(called).mustGTFive(4);
    }

    function withAsm() public returns (bool) {
        bytes memory data = abi.encode(Called.mustGTFive.selector, 4);
        bool success;
        assembly {
            success := call(gas(), called.slot, 0, add(data, 0x20), mload(data), 0, 0)
        }

        return success;
    }
 }