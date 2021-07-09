pragma solidity >=0.4.21 <0.7.0;

contract Projects {

    uint256 projectIdCount = 0;
    mapping(uint256 => Project) project;

    struct Project {
        uint256 organizationId;
        string name;
        string description;
        ProjectState state;
        bool exists;
    }

    /**
    STATES
    PUBLISHED => Project is visible for participants
    DRAFT => Project is not visible
     */
    enum ProjectState {PUBLISHED, DRAFT}

    uint256 phaseIdCount = 0;
    mapping(uint256 => Phase) phase;

    struct Phase {
        uint256 projectId;
        string name;
        string description;
        PhaseState state;
        bool exists;
    }

    /**
    STATES
    PUBLISHED => Project is visible for participants
    DRAFT => Project is not visible
     */
    enum PhaseState {CREATED, INPROGRESS, DONE}

    uint256 phaseIdCount = 0;
    mapping(uint256 => Evidence) phase;

    struct Evidence {
        uint256 phaseId;
        string name;
        string description;
        string formats;
        EvidenceState state;
        bool exists;
    }

    /**
    STATES
    PUBLISHED => Project is visible for participants
    DRAFT => Project is not visible
     */
    enum EvidenceState {WAITING, INREVIEW, APPROVED, DECLINED}

    function createProject(uint256 _organizationId) public { // onlyProjectOwner
        projectIdCount++;
        uint256 id = projectIdCount;
        project[id].name = 'Nombre';
        project[id].organizationId = _organizationId;
        project[id].state = ProjectState.DRAFT;
        project[id].exists  = true;
    }

    function publishProject(uint256 _id) public { // onlyProjectOwner
        project[_id].state = ProjectState.PUBLISHED;
        // return project[_id].state;
    }
    
    function getProjectName(uint256 _id) public view returns (string memory) {
        return project[_id].name;
    }

    /**
     * @dev checks if the project id exists
     */
    function projectExists(uint256 _id) public view returns (bool) {
        return project[_id].exists;
    }

    /**
     * @dev Returns the id counter.
     */
    function projectCounter() external view returns (uint256) {
        return projectIdCount;
    }

}
