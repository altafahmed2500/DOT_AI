// SPDX-License-Identifier: MIT
pragma solidity >=0.4.16 <0.9.0;

contract IPFSAssetManager {
    // Struct to represent a tokenized asset
    struct IPFSToken {
        uint256 id;           // Unique token ID
        string ipfsHash;      // IPFS hash for the asset
        address owner;        // Owner of the token
        string name;          // Name of the token/asset
    }

    // Contract-level metadata
    string public name;       // Name of the asset collection
    string public symbol;     // Symbol for the asset collection

    // Mapping from token ID to token details
    mapping(uint256 => IPFSToken) private tokens;

    // Mapping from owner to their list of token IDs
    mapping(address => uint256[]) private ownerToTokens;

    // Counter for token IDs
    uint256 private tokenCounter;

    // Events
    event TokenCreated(uint256 tokenId, string ipfsHash, string name, address owner);
    event TokenTransferred(uint256 tokenId, address from, address to);

    // Constructor to set the collection name and symbol
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }

    // Function to create a new token by uploading an IPFS hash
    function createToken(string memory _ipfsHash, string memory _assetName) public {
        uint256 newTokenId = tokenCounter; // Assign a new unique token ID
        tokenCounter++; // Increment the counter

        // Create the token
        IPFSToken memory newToken = IPFSToken({
            id: newTokenId,
            ipfsHash: _ipfsHash,
            owner: msg.sender,
            name: _assetName
        });

        // Store the token
        tokens[newTokenId] = newToken;

        // Update the owner's token list
        ownerToTokens[msg.sender].push(newTokenId);

        // Emit the creation event
        emit TokenCreated(newTokenId, _ipfsHash, _assetName, msg.sender);
    }

    // Function to transfer a token to another address
    function transferToken(uint256 _tokenId, address _to) public {
        require(tokens[_tokenId].owner == msg.sender, "You do not own this token");

        // Remove token from the current owner's list
        _removeTokenFromOwner(msg.sender, _tokenId);

        // Update ownership
        tokens[_tokenId].owner = _to;

        // Add token to the new owner's list
        ownerToTokens[_to].push(_tokenId);

        // Emit the transfer event
        emit TokenTransferred(_tokenId, msg.sender, _to);
    }

    // Function to check the balance of tokens for an account
    function balanceOf(address _owner) public view returns (uint256) {
        return ownerToTokens[_owner].length;
    }

    // Function to get the owner of a specific token
    function ownerOf(uint256 _tokenId) public view returns (address) {
        return tokens[_tokenId].owner;
    }

    // Function to get the total token count
    function totalTokens() public view returns (uint256) {
        return tokenCounter;
    }

    // Function to get the IPFS hash of a token by ID
    function getIPFSHash(uint256 _tokenId) public view returns (string memory) {
        return tokens[_tokenId].ipfsHash;
    }

    // Function to get the name of a token by ID
    function getTokenName(uint256 _tokenId) public view returns (string memory) {
        return tokens[_tokenId].name;
    }

    // Internal function to remove a token from an owner's list
    function _removeTokenFromOwner(address _owner, uint256 _tokenId) internal {
        uint256[] storage tokenList = ownerToTokens[_owner];
        for (uint256 i = 0; i < tokenList.length; i++) {
            if (tokenList[i] == _tokenId) {
                // Replace the token to remove with the last token
                tokenList[i] = tokenList[tokenList.length - 1];
                tokenList.pop(); // Remove the last token
                break;
            }
        }
    }
}
