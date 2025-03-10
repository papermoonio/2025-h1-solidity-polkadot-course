// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DataType {
    bool isValid;
    uint256 counter;
    address otherContract;

    event Something(address indexed who, uint256 id);

    mapping(address => bool) contractExists;
    enum Color {
        Black,
        White,
        Red,
        Blue
    }

    struct Person {
        string name;
        uint8 age;
    }

    Color color;
    Person person;

    constructor() {}

    function handle() public {
        isValid = true;
        counter = 1;
        otherContract = address(0x00);

        if (!contractExists[address(0x00)]) {
            contractExists[address(0x00)] = true;
        }

        color = Color.Black;
        person = Person({name: "name", age: 18});
        emit Something(msg.sender, counter);
    }

    function hangleError(uint256 a) public pure {
        require(a > 0, "a cant be zero");
        // just panic, no error message
        assert(a > 0);

        if (a == 0) {
            revert();
        }
    }

    function encode() public pure returns (bytes memory result) {
        // functin selector
        result = abi.encode("encode(uint256)");
        result = abi.encodePacked("hello");
        return result;
    }

    function getSelector() public pure returns (bytes4 result) {
        result = this.handle.selector;
        return result;
    }
}
