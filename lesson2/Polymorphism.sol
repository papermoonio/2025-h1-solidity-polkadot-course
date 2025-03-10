// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library math {
    function add(uint a, uint b) public pure returns (uint result) {
        result = a + b;
    }

    function sub(uint a, uint b) public pure returns (uint result) {
        result = a - b;
    }
}

interface mathLib {
    function add(uint a, uint b) external returns (uint result);
    function sub(uint a, uint b) external returns (uint result);
}

abstract contract JustAdd {
    uint256 number;
    function add(uint a, uint b) public pure virtual returns (uint result) {
        result = math.add(a, b);
    }
    function sub(uint a, uint b) external virtual returns (uint result);
}

contract MathImpl is mathLib, JustAdd {
    function add(
        uint a,
        uint b
    ) public pure override(JustAdd, mathLib) returns (uint result) {
        result = JustAdd.add(a, b);
    }

    function sub(
        uint a,
        uint b
    ) public pure override(JustAdd, mathLib) returns (uint result) {
        result = math.sub(a, b);
    }
}
