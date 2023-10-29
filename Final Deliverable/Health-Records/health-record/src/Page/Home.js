import React, { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { contract } from "./connector";

function Home() {
 const [Id, setId] = useState("");
 const [name, setName] = useState("");
 const [pAddr, setpAddr] = useState("");
 const [disease, setdisease] = useState("");
 const [contact, setContact] = useState("");
 const [recordId, setrecordId] = useState("");
 const [newOwner, setNewOwner] = useState("");
 const [recordIdData, setrecordIdData] = useState("");
 const [Data, setData] = useState("");
  const [Wallet, setWallet] = useState("");


 const handleId = (e) => {
  setId(e.target.value)
 }

 const handleName = (e) => {
  setName(e.target.value)
 }

 const handlePatientAddress = (e) => {
  setpAddr(e.target.value)
 }

 const handleDisease = (e) => {
  setdisease(e.target.value)
 }

 const handleContact = (e) => {
  setContact(e.target.value)
 }
 
 const handleCreateRecord = async() => {
  try {
   let tx = await contract.createRecord(Id, name, pAddr, disease, contact)
   let wait = await tx.wait()
   alert(wait)
   console.log(wait.transactionHash);
  } catch (error) {
   alert(error)
  }
 }

 const handleRecordId = (e) => {
  setrecordId(e.target.value)
 }

 const handleNewOwner = (e) => {
  setNewOwner(e.target.value)
 }

 const handleTransferRecord = async () => {
  try {
   let tx = await contract.transferRecord(recordId.toString(),newOwner)
   let wait = await tx.wait()
   alert(wait.transactionHash)
   console.log(wait);
  } catch (error) {
   alert(error)
  }
 }
 
 const handleRecordDataId = (e) => {
  setrecordIdData(e.target.value)
 }

 const handleRecordData =async () => {
  try {
  let tx = await contract.getRecordData(recordIdData)
  let arr = []
  tx.map(e => arr.push(e))
    setData(arr)
  // alert(tx)
  console.log(tx);
   
  } catch (error) {
   alert(error)
  }
 }

  const handleWallet = async () => {
    if (!window.ethereum) {
      return alert('please install metamask');
    }

    const addr = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setWallet(addr[0])

  }

 return (
  <div>
   <h1 style={{ marginTop: "30px", marginBottom: "80px" }}>Health Records Using Blockchain</h1>
     {!Wallet ?

       <Button onClick={handleWallet} style={{ marginTop: "30px", marginBottom: "50px" }}>Connect Wallet </Button>
       :
       <p style={{ width: "250px", height: "50px", margin: "auto", marginBottom: "50px", border: '2px solid #2096f3' }}>{Wallet.slice(0, 6)}....{Wallet.slice(-6)}</p>
     }
     <Container style={{ margin:"Auto" }}>
       <Row >
     <Col>
      <div>

       
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleId} type="number" placeholder="Enter Record Id" value={Id} /> <br />
       
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleName} type="string" placeholder="Enter name" value={name} /> <br />
       
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handlePatientAddress} type="string" placeholder="Enter patient Address" value={pAddr} /><br />
       
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleDisease} type="string" placeholder="Enter disease" value={disease} /><br />
      
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleContact} type="string" placeholder="Enter contact Info" value={contact} /><br />

       <Button onClick={handleCreateRecord} style={{ marginTop: "10px" }} variant="primary">Create Record</Button>
      </div>
     </Col>
     <Col>
       <div>
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleRecordId} type="number" placeholder="Enter new record Id" value={recordId} /><br />
       <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleNewOwner} type="string" placeholder="Enter new owner metamask address" value={newOwner} /><br />
       <Button onClick={handleTransferRecord} style={{ marginTop: "10px" }} variant="primary">Transfer Record</Button>

       </div>
     </Col>
    </Row>
     <Col>
      <Row style={{marginTop:"100px"}}>
      
      <input style={{ marginTop: "10px", borderRadius: "5px" }} onChange={handleRecordDataId} type="string" placeholder="Enter Id" value={recordIdData} /><br />


      <Button onClick={handleRecordData} style={{ marginTop: "10px" }} variant="primary">Get Record Data</Button>
        {Data? Data?.map(e => {
        return <p>
          {e.toString()}
        </p> 
        }
        ) : <p></p>}
      </Row>
     </Col>
   </Container>

  </div>
 )
}

export default Home;
