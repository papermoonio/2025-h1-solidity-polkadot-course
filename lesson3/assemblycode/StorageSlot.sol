// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorageSlot {

    uint256 a = 5;

    function readStorage(uint slot) public view returns (bytes32 value) {
        assembly {
            value := sload(slot)
        }
    }

}