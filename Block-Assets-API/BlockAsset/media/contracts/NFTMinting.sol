// SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFTMinting is ERC721URIStorage {
    uint256 public tokenCounter;

    constructor() ERC721("SUBI", "SUBIC") {
        tokenCounter = 0; // Initialize token counter
    }

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(recipient, newTokenId);
        _setTokenURI(newTokenId, tokenURI); // Set the token's URI to the IPFS hash
        tokenCounter++;
        return newTokenId;
    }
}

