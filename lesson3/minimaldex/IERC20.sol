// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    // Get the total token supply
    function totalSupply() external view returns (uint256);

    // Get the token balance of an account
    function balanceOf(address account) external view returns (uint256);

    // Transfer tokens to a specified address
    function transfer(address recipient, uint256 amount) external returns (bool);

    // Get the amount of tokens approved for spending by another address
    function allowance(address owner, address spender) external view returns (uint256);

    // Approve a third party to spend tokens from your account
    function approve(address spender, uint256 amount) external returns (bool);

    // Transfer tokens from one address to another within the approved allowance
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    // Event emitted when tokens are transferred
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Event emitted when token spending is approved
    event Approval(address indexed owner, address indexed spender, uint256 value);
}