pragma solidity >=0.4.21 <0.7.0;

contract Klip {
    address adminKlip; // Klip admin
    uint256 organizationIdCount = 0; // Organization counter
    mapping(address => uint256) organizationId; // To get the Organization ID from address
    mapping(uint256 => Organization) organization; // To get the organization data from ID

    struct Organization {
        string name;
        string description;
        address owner; // Organization owner
        bool exists; // Used for soft deletion
        uint256 timestampCreated;
    }

    uint256 projectIdCount = 0; // Project counter
    mapping(uint256 => Project) project; // To get the project data from ID

    struct Project {
        address organization; // Organization that offers the project
        address beneficiary; // DIDI user choosen as project beneficiary
        string name;
        string description;
        ProjectState state; // Detailed below
        bool exists; // Used for soft deletion
        uint256 timestampCreated;
        uint256 timestampActivated;
        uint256 timestampStarted;
        uint256 timestampFinished;
    }

    /**
        STATES
        DRAFT => Project is not visible for participants
        ACTIVE => Project is visible for participants and they can interact with it
        STARTED => Project is started and participants can upload data
        FINISHED => Project is finished and participants can't interact with it
     */
    enum ProjectState {DRAFT, ACTIVE, STARTED, FINISHED}

    uint256 phaseIdCount = 0;
    mapping(uint256 => Phase) phase;

    struct Phase {
        uint256 projectId; // Linked to project
        string name;
        string description;
        PhaseState state; // Detailed below
        uint256 budget;// Budget approved for the phase
        bool exists; // Used for soft deletion
    }

    /**
        STATES
        CREATED => Phase is visible for participants and they can interact with it
        STARTED => Phase is started and participants can upload data
        FINISHED => Phase is finished and participants can't interact with it
     */
    enum PhaseState {CREATED, STARTED, FINISHED}

    uint256 evidenceIdCount = 0;
    mapping(uint256 => Evidence) evidence;

    struct Evidence {
        uint256 phaseId; // Linked to phase
        string name;
        string description;
        string format;
        string ipfsPath; // IPFS path or cid
        string comments; // Any comments from the evaluation
        EvidenceState state; // Detailed below
        bool exists; // Used for soft deletion
        uint256 timestampLoaded;
    }

    /**
        STATES
        EMPTY => Evidence is visible for participants and they can interact with it
        CREATED => Evidence is visible for participants and they can interact with it
        APPROVED => Evidence is started and participants can upload data
        REJECTED => Evidence is finished and participants can't interact with it
     */
    enum EvidenceState {EMPTY, CREATED, APPROVED, REJECTED}

    /**
        Modifier for Klip Amin check access to perform certain operations
    */
    modifier onlyAdminKlip() {
        require(isAdminKlip(), "Is not admin!");
        _;
    }

    /**
        Check if sender is Klip Amin
    */
    function isAdminKlip() public view returns (bool) {
        return msg.sender == adminKlip;
    }

    /**
        Modifier for Organization Owner check access to perform certain operations
    */
    modifier onlyOrganizationOwner() {
        require(isOrganizationOwner(), "Is not the Organization Owner!");
        _;
    }

    /**
        Check if sender is the Organization Owner
    */
    function isOrganizationOwner() public view returns (bool) {
        uint256 _id = organizationId[msg.sender];
        return msg.sender == organization[_id].owner;
    }

    /**
        Modifier for Organization Owner check access to perform certain operations
    */
    modifier onlyProjectOrganizationOwner(uint256 _id) {
        require(isProjectOrganizationOwner(_id), "Is not the project Organization Owner!");
        _;
    }

    /**
        Check if sender is the Organization Owner
    */
    function isProjectOrganizationOwner(uint256 _id) public view returns (bool) {
        return msg.sender == project[_id].organization;
    }

    /**
        Modifier for Organization Owner and Beneficiary check access to perform certain operations
    */
    modifier onlyBeneficiaryOrOrganization(uint256 _projectId) {
        require(isBeneficiaryOrOrganization(_projectId), "Is not the Project Beneficiary!");
        _;
    }

    /**
        Check if sender is Organization that host the project or Beneficiary (DIDI User)
    */
    function isBeneficiaryOrOrganization(uint256 _projectId) public view returns (bool) {
        bool isProjectBeneficiary = msg.sender == project[_projectId].beneficiary;
        bool isProjectOrganization = msg.sender == project[_projectId].organization;
        return isProjectBeneficiary || isProjectOrganization;
    }

    /**
        Constructor set the account that deploy contracts as Admin Klip
    */
    constructor() public {
        adminKlip = msg.sender;
        return;
    }

    /**
        Admin Klip creates the Organization
    */
    function createOrganization(string memory _name, string memory _description, address organizacionAddress) public onlyAdminKlip() {
        uint256 _id = organizationIdCount + 1;
        organization[_id].name = _name;
        organization[_id].description = _description;
        organization[_id].owner = organizacionAddress;
        organization[_id].exists = true;
        organization[_id].timestampCreated = block.timestamp;
        organizationId[organizacionAddress] = _id;
        organizationIdCount++;

    }

    /**
        Get the organization data
    */
    function getOrganization(uint256 _id) public view returns(string memory, string memory) {
        return (organization[_id].name, organization[_id].description);
    }

    /**
        Check if the organization id exists
     */
    function organizationExists(uint256 _id) public view returns (bool) {
        return organization[_id].exists;
    }

    /**
        Get the organization counter
    */
    function organizationCounter() external view returns (uint256) {
        return organizationIdCount;
    }

    /**
        Organization creates the project
    */
    function createProject(address _beneficiary, string memory _name, string memory _description) public onlyOrganizationOwner() {
        uint256 _organizationId = organizationId[msg.sender];
        require(_organizationId!=0, "Organization id doesn't exists!");
        uint256 _id = projectIdCount + 1;
        project[_id].name = _name;
        project[_id].description = _description;
        project[_id].organization = msg.sender;
        project[_id].beneficiary = _beneficiary;
        project[_id].state = ProjectState.DRAFT;
        project[_id].timestampCreated = block.timestamp;
        project[_id].exists = true;
        projectIdCount++;
    }

    /**
        Organization set the project Beneficiary address
    */
    function setProjectBeneficiaryAddress(uint256 _id, address _beneficiaryAddress) public onlyProjectOrganizationOwner(_id) {
        project[_id].beneficiary = _beneficiaryAddress;
    }

    /**
        Organization activates the project
    */
    function activateProject(uint256 _id) public onlyProjectOrganizationOwner(_id) {
        project[_id].state = ProjectState.ACTIVE;
        project[_id].timestampActivated = block.timestamp;
    }

    /**
        Organization or Beneficiary starts the project
    */
    function startProject(uint256 _id) public onlyBeneficiaryOrOrganization(_id) {
        project[_id].state = ProjectState.STARTED;
        project[_id].timestampStarted = block.timestamp;
    }

    /**
        Organization or Beneficiary finish the project
    */
    function finishProject(uint256 _id) public onlyBeneficiaryOrOrganization(_id) {
        project[_id].state = ProjectState.FINISHED;
        project[_id].timestampFinished = block.timestamp;
    }

    /**
       En esta funcion se debe llamar al Issuer de DIDI para generar las
       credenciales verificables de proyecto social realizado por organizacion,
       y las credenciales verificables de proyecto ejecutado exitosamente por
       Usuario DIDI con las siguientes direcciones:
       address organizacion = project[_id].organization;
       address beneficiary = project[_id].beneficiary;
    */
    function createClaims() public view onlyAdminKlip() returns (string memory) {
        string memory dummyCreateClaims = "Credenciales verificables";
        return dummyCreateClaims;
    }

    /**
        Get the project data
    */
    function getProject(uint256 _id)
        public view onlyBeneficiaryOrOrganization(_id)
        returns (string memory, string memory, address, ProjectState) {
        return (project[_id].name, project[_id].description,
            project[_id].organization, project[_id].state);
    }

    /**
       Check if the project id exists
     */
    function projectExists(uint256 _id) public view returns (bool) {
        return project[_id].exists;
    }

    /**
        Get the project counter
    */
    function projectCounter() external view returns (uint256) {
        return projectIdCount;
    }

    /**
        Organization creates the phase
    */
    function createPhase(
        uint256 _projectId,
        string memory _name,
        string memory _description,
        uint256 _budget) public onlyProjectOrganizationOwner(_projectId) {
        uint256 _id = phaseIdCount + 1;
        phase[_id].name = _name;
        phase[_id].description = _description;
        phase[_id].budget = _budget;
        phase[_id].projectId = _projectId;
        phase[_id].state = PhaseState.CREATED;
        phase[_id].exists = true;
        phaseIdCount++;
    }

    /**
        Organization or beneficiary start the phase
    */
    function startPhase(uint256 _id) public onlyBeneficiaryOrOrganization(_id) {
        phase[_id].state = PhaseState.STARTED;
    }

    /**
        Organization or beneficiary finish the phase
    */
    function finishPhase(uint256 _id) public onlyProjectOrganizationOwner(phase[_id].projectId) {
        phase[_id].state = PhaseState.FINISHED;
    }

    /**
        Get the phase data
    */
    function getPhase(uint256 _id) public view returns (string memory, string memory, uint256, PhaseState) {
        return (phase[_id].name, phase[_id].description, phase[_id].projectId, phase[_id].state);
    }

    /**
        Check if the phase id exists
     */
    function phaseExists(uint256 _id) public view returns (bool) {
        return phase[_id].exists;
    }

    /**
        Get the phase counter
    */
    function phaseCounter() external view returns (uint256) {
        return phaseIdCount;
    }

    /**
        Organization creates the evidence
    */
    function createEvidence(
        uint256 _phaseId,
        string memory _name,
        string memory _description,
        string memory _format) public onlyProjectOrganizationOwner(phase[_phaseId].projectId) {
        uint256 _id = evidenceIdCount + 1;
        evidence[_id].name = _name;
        evidence[_id].description = _description;
        evidence[_id].format = _format;
        evidence[_id].phaseId = _phaseId;
        evidence[_id].state = EvidenceState.EMPTY;
        evidence[_id].exists = true;
        evidenceIdCount++;
    }

    /**
        Organization or beneficiary load the evidence
    */
    function loadEvidence(uint256 _id, string memory _ipfsPath) public onlyBeneficiaryOrOrganization(_id) {
        evidence[_id].ipfsPath = _ipfsPath;
        evidence[_id].state = EvidenceState.CREATED;
        evidence[_id].timestampLoaded = block.timestamp;
    }

    /**
        Organization approve the evidence
    */
    function approveEvidence(uint256 _id, string memory _comments) public
    onlyProjectOrganizationOwner(phase[evidence[_id].phaseId].projectId) {
        evidence[_id].comments = _comments;
        evidence[_id].state = EvidenceState.APPROVED;
    }

    /**
        Organization reject the evidence
    */
    function rejectEvidence(uint256 _id, string memory _comments) public
    onlyProjectOrganizationOwner(phase[evidence[_id].phaseId].projectId) {
        evidence[_id].comments = _comments;
        evidence[_id].state = EvidenceState.REJECTED;
    }

    /**
        Get the evidence data
    */
    function getEvidence(uint256 _id) public view onlyBeneficiaryOrOrganization(_id)
    returns (string memory, string memory, uint256, EvidenceState) {
        return (evidence[_id].name, evidence[_id].description, evidence[_id].phaseId, evidence[_id].state);
    }

    /**
        Check if the Evidence id exists
     */
    function evidenceExists(uint256 _id) public view returns (bool) {
        return evidence[_id].exists;
    }

    /**
        Get the evidence counter
    */
    function evidenceCounter() external view returns (uint256) {
        return evidenceIdCount;
    }

}
