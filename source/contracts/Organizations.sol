pragma solidity >=0.4.21 <0.7.0;

import "./Projects.sol";

contract Organizations is Projects {

    uint256 organizationIdCount = 0;
    mapping(uint256 => Organization) organization;

    struct Organization {
        string name;
        string description;
        address owner;
        bool exists;
    }

    /**
        Modifier for Organization Owner check access to perform certain operations over a Organization
    */
    modifier onlyOrganizationOwner(uint256 _id) {
        require(msg.sender == organization[_id].owner, "Is not the Organization Owner!");
        _;
    }

    constructor() public {
        return;
    }

    function createOrganization() public { // onlyProjectOwner
        organizationIdCount++;
        uint256 id = organizationIdCount;
        organization[id].name = 'Nombre';
        organization[id].owner = msg.sender;
        organization[id].exists  = true;
    }

}
