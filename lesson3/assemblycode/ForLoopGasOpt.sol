// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SumNormal {

    function sumNormal() public pure returns (uint) {
        uint sum;
        for (uint i = 0; i < 10; i++) {
            sum += i;
        }
        return sum;
    }

}



contract SumAsm {
    function sumAssembly() public pure returns (uint sum) {
        assembly {
            let i := 0
            for { } lt(i, 10) { i := add(i, 1) } {
                sum := add(sum, i)
            }
        }
    }
}