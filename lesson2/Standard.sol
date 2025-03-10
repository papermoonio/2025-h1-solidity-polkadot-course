// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;
contract Storage {
    uint256 number;
    event NewValueSet(address indexed sender, uint256 value);
    constructor() {}
    function store(uint256 num) public {
        number = num;
        emit NewValueSet(msg.sender, num);
    }
    function retrieve() public view returns (uint256) {
        return number;
    }
}
