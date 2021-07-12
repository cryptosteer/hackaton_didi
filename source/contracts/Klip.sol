pragma solidity >=0.4.21 <0.7.0;

contract Klip {

    address adminKlip;
    uint256 organizationIdCount = 0;
    mapping(address => uint256) organizationId;
    mapping(uint256 => Organization) organization;

    struct Organization {
        string name;
        string description;
        address owner;
        bool exists;
    }

    uint256 projectIdCount = 0;
    mapping(uint256 => Project) project;

    struct Project {
        address organization;
        address beneficiary;
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
    enum ProjectState {DRAFT, ACTIVE, STARTED, FINISHED}

    uint256 phaseIdCount = 0;
    mapping(uint256 => Phase) phase;

    struct Phase {
        uint256 projectId;
        string name;
        string description;
        PhaseState state;
        uint256 budget;
        bool exists;
    }

    /**
    STATES
    PUBLISHED => Phase is visible for participants
    DRAFT => Phase is not visible
     */
    enum PhaseState {CREATED, STARTED, FINISHED}

    uint256 evidenceIdCount = 0;
    mapping(uint256 => Evidence) evidence;

    struct Evidence {
        uint256 phaseId;
        string name;
        string description;
        string ipfsPath;
        string comments;
        EvidenceState state;
        bool exists;
    }

    /**
    STATES
    PUBLISHED => Project is visible for participants
    DRAFT => Project is not visible
     */
    enum EvidenceState {EMPTY, CREATED, APPROVED, REJECTED}

    modifier onlyAdminKlip() {
        require(isAdminKlip(), "Is not admin!");
        _;
    }

    function isAdminKlip() public view returns (bool) {
        return msg.sender == adminKlip;
    }

    modifier onlyOrganizationOwner() {
        uint256 _id = organizationId[msg.sender];
        require(isOrganizationOwner(_id), "Is not the Organization Owner!");
        _;
    }

    function isOrganizationOwner(uint256 _id) public view returns (bool) {
        return msg.sender == organization[_id].owner;
    }

    modifier onlyBeneficiaryOrOrganization(uint256 _projectId) {
        require(isBeneficiaryOrOrganization(_projectId), "Is not the Project Beneficiary!");
        _;
    }

    function isBeneficiaryOrOrganization(uint256 _projectId) public view returns (bool) {
        bool isProjectBeneficiary = msg.sender == project[_projectId].beneficiary;
        bool isProjectOrganization = msg.sender == project[_projectId].organization;
        return isProjectBeneficiary || isProjectOrganization;
    }

    /**
        Modifier for Organization Owner check access to perform certain operations over a Organization
    */
    constructor() public {
        adminKlip = msg.sender;
        return;
    }

    function createOrganization(string memory _name, string memory _description, address organizacionAddress) public onlyAdminKlip() {
        uint256 _id = organizationIdCount + 1;
        organization[_id].name = _name;
        organization[_id].description = _description;
        organization[_id].owner = organizacionAddress;
        organization[_id].exists  = true;
        organizationId[organizacionAddress] = _id;
        organizationIdCount++;
    }

    function setOrganizationAddress(uint256 _id, address _organizacionAddress) public onlyAdminKlip() {
        organization[_id].owner = _organizacionAddress;
    }

    function getOrganization(uint256 _id) public view returns(string memory, string memory) {
        return (organization[_id].name, organization[_id].description);
    }

    function organizationCounter() external view returns (uint256) {
        return organizationIdCount;
    }

    function createProject(address _beneficiary, string memory _name, string memory _description) public onlyOrganizationOwner() {
        uint256 _organizationId = organizationId[msg.sender];
        require(_organizationId!=0, "Organization id doesn't exists!");
        uint256 _id = projectIdCount + 1;
        project[_id].name = _name;
        project[_id].description = _description;
        project[_id].organization = msg.sender;
        project[_id].beneficiary = _beneficiary;
        project[_id].state = ProjectState.DRAFT;
        project[_id].exists  = true;
        projectIdCount++;
    }

    function setProjectBeneficiaryAddress(uint256 _id, address _beneficiaryAddress) public onlyOrganizationOwner() {
        project[_id].beneficiary = _beneficiaryAddress;
    }

    function activateProject(uint256 _id) public onlyOrganizationOwner() {
        project[_id].state = ProjectState.ACTIVE;
    }
    
    function startProject(uint256 _id) public onlyBeneficiaryOrOrganization(_id) {
        project[_id].state = ProjectState.STARTED;
    }
    
    function finishProject(uint256 _id) public onlyBeneficiaryOrOrganization(_id) {
        project[_id].state = ProjectState.FINISHED;
    }

    /**
     * En esta funcion se debe llamar al Issuer de DIDI para generar las credenciales verificables para los usuarios registrados en el proyecto con las siguientes direcciones:
     *  address organizacion = project[_id].organization;
     *  address beneficiary = project[_id].beneficiary;
     */
    function createClaims(uint256 _id) public onlyAdminKlip() returns (string memory) {
        string memory dummyCreateClaims = "Credenciales verificables de proyecto social realizado por organizacion. Y credenciales verificables de proyecto ejecutado exitosamente por Usuario DIDI";
        return dummyCreateClaims;
    }
    
    function getProject(uint256 _id) public view onlyBeneficiaryOrOrganization(_id) returns (string memory, string memory, address, ProjectState) {
        return (project[_id].name, project[_id].description, project[_id].organization, project[_id].state);
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

    function createPhase(uint256 _projectId, string memory _name, string memory _description) public onlyOrganizationOwner() {
        uint256 _id = phaseIdCount + 1;
        phase[_id].name = _name;
        phase[_id].description = _description;
        phase[_id].projectId = _projectId;
        phase[_id].state = PhaseState.CREATED;
        phase[_id].exists  = true;
        phaseIdCount++;
    }

    function startPhase(uint256 _id) public onlyBeneficiaryOrOrganization(_id) {
        phase[_id].state = PhaseState.STARTED;
    }
    
    function finishPhase(uint256 _id) public onlyOrganizationOwner() {
        phase[_id].state = PhaseState.FINISHED;
    }
    
    function getPhase(uint256 _id) public view returns (string memory, string memory, uint256, PhaseState) {
        return (phase[_id].name, phase[_id].description, phase[_id].projectId, phase[_id].state);
    }

    /**
     * @dev checks if the project id exists
     */
    function phaseExists(uint256 _id) public view returns (bool) {
        return phase[_id].exists;
    }

    /**
     * @dev Returns the id counter.
     */
    function phaseCounter() external view returns (uint256) {
        return phaseIdCount;
    }

    function createEvidence(uint256 _phaseId, string memory _name, string memory _description) public onlyOrganizationOwner() {
        uint256 _id = evidenceIdCount + 1;
        evidence[_id].name = _name;
        evidence[_id].description = _description;
        evidence[_id].phaseId = _phaseId;
        evidence[_id].state = EvidenceState.EMPTY;
        evidence[_id].exists  = true;
        evidenceIdCount++;
    }

    function loadEvidence(uint256 _id, string memory _ipfsPath) public onlyBeneficiaryOrOrganization(_id) {
        evidence[_id].ipfsPath = _ipfsPath;
        evidence[_id].state = EvidenceState.CREATED;
    }

    function approveEvidence(uint256 _id, string memory _comments) public onlyOrganizationOwner() {
        evidence[_id].comments = _comments;
        evidence[_id].state = EvidenceState.APPROVED;
    }

    function rejectEvidence(uint256 _id, string memory _comments) public onlyOrganizationOwner() {
        evidence[_id].comments = _comments;
        evidence[_id].state = EvidenceState.REJECTED;
    }

    function getEvidence(uint256 _id) public view onlyBeneficiaryOrOrganization(_id) returns (string memory, string memory, uint256, EvidenceState) {
        return (evidence[_id].name, evidence[_id].description, evidence[_id].phaseId, evidence[_id].state);
    }

    /**
     * @dev checks if the project id exists
     */
    function evidenceExists(uint256 _id) public view returns (bool) {
        return evidence[_id].exists;
    }

    /**
     * @dev Returns the id counter.
     */
    function evidenceCounter() external view returns (uint256) {
        return evidenceIdCount;
    }

}
