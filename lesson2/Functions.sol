// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Parent {
    bool isValid;
    modifier onlyValid() {
        if (isValid) {
            _;
        }
    }

    function one() public {
        isValid = false;
    }

    function two() public view returns (uint256 result) {
        if (isValid) {
            return 100;
        }
    }

    function three() public pure returns (uint256 result) {
        return 100;
    }

    function four() private {}

    function five() internal {}

    function six() external onlyValid {}
    receive() external payable {}
    fallback() external {}
}

contract Child is Parent {
    function black() public {
        super.one();
        // super.four()
        super.five();
        // super.six();
    }
}
