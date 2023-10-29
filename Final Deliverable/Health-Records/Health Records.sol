// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HealthRecords {

    struct PatientRecord {
        string Name;
        address patientAddress;
        string dieses;
        string contactInfo;
    }

    mapping(uint256 => PatientRecord) public records;

    event RecordCreated(uint256 indexed recordId, address indexed patientAddress);
    event RecordTransferred(
        uint256 indexed recordId,
        address indexed from,
        address indexed to
    );

    

    modifier onlyOwner(uint256 recordId) {
        require(msg.sender == records[recordId].patientAddress,"Only contract owner can call this");
        _;
    }

    function createRecord(
        uint256 recordId,
        string memory name, address _patientAddress, string memory _diseases, string memory _contactInfo
    ) external {

        records[recordId].Name = name;
        records[recordId].patientAddress = _patientAddress;
        records[recordId].dieses = _diseases;
        records[recordId].contactInfo = _contactInfo;

        emit RecordCreated(recordId, _patientAddress);
    }

    function transferRecord(uint256 recordId, address newOwner) external onlyOwner(recordId) {

        //require(records[recordId].patientAddress == newOwner, "New Owner should have different Address");

        require(records[recordId].patientAddress == msg.sender, "Only record owner can transfer");

        records[recordId].patientAddress = newOwner;

        emit RecordTransferred(recordId, records[recordId].patientAddress, newOwner);
    }

    function getRecordData(
        uint256 recordId
    ) external view returns (string memory, address, string memory,string memory) {
        return (records[recordId].Name,
        records[recordId].patientAddress,
        records[recordId].dieses,
        records[recordId].contactInfo);
    }

    function getRecordOwner(uint256 recordId) external view returns (address) {
        return records[recordId].patientAddress;
    }
}
