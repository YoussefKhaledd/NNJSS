import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'
import ViewStaff from './ViewStaff.component'
import { Container,Badge,Modal,Button,Alert } from 'react-bootstrap'
import TableScrollbar from 'react-table-scrollbar';





export default function ViewChangeRequests() { 
    const [changeReq,setChangeReq]=useState([])
    const [id,setId]=useState("")
    const [messageChange,setMessageChange]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let showAlert=false;

    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
            axios.get('http://localhost:5000/viewChangeOff',
            {  
                headers: {
                'auth-token': localStorage.getItem('auth-token')
                }
            })
              .then(res =>{
                  console.log(typeof res.data)
                if(typeof res.data=="string"){
                    setMessageChange(res.data)
                    showAlert=true;
                }else{
                setChangeReq(res.data);  
                showAlert=false;   
                } 
                console.log(showAlert)
              })
              .catch(error =>{
                console.log(error);
              })
              

              function viewAllChangeRequests(list){
                if(typeof list=="string"){
                    setMessageChange(list)
                    showAlert=true;
                } 
                else{
                    console.log(showAlert)
                if(list!==undefined && list.length>0&&list!==null){
                return list.map(elem =>{
                    if(elem.senderId!=null){
                        showAlert=false
                  return(
                  <tr>
                    <td>{elem.senderId}</td>
                    <td>{elem.senderName}</td>
                    <td>{elem.currentDay}</td>
                    <td>{elem.requiredDay}</td>
                    <td>{elem.reason}</td>
                    <Button variant="primary" onClick={handleShow}>
                        Accept/Reject
                    </Button>
                  </tr>
                  )}
                })
              }
              else{
                return "";
              }}}

              const handleAccept = async e=>{
                axios.post('http://localhost:5000/acceptDayOffReq',{
                    staffId:id
                },
                {  
                    headers: {
                    'auth-token': localStorage.getItem('auth-token')
                    }
                })
                  .then(res =>{
                      console.log(res.data)
                      setMessageChange(res.data);
                      handleClose()
                      showAlert=true;
                  })
                  .catch(error =>{
                    console.log(error);
                  })}


                  const handleReject = async e=>{
                    axios.post('http://localhost:5000/rejectChangeReq',{
                        staffId:id
                    },
                    {  
                        headers: {
                        'auth-token': localStorage.getItem('auth-token')
                        }
                    })
                      .then(res =>{
                          setMessageChange(res.data);
                          handleClose()
                          showAlert=true;
                      })
                      .catch(error =>{
                        console.log(error);
                      })}
 
    return (
      <div>
            <NavigationBar />
            <Container style={{height:'300px'}} className="hdCompBig">
              <h3 className="TextLeft">
        Staff Change Day Off Requests </h3>
        <TableScrollbar rows={3}>
       <table hidden={showAlert}  className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Staff Id</th>
            <th>Staff Name</th>
            <th>Current Day Off</th>
            <th>Required Day Off</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {viewAllChangeRequests(changeReq)}
        </tbody>

        </table>
        </TableScrollbar>
        <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{top:'20%'}}
      >
        <Modal.Header closeButton>
          <Modal.Title>Please Verify by  Entering Staff ID </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <input onChange = {e =>setId(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReject}>
            Reject
          </Button>
          <Button onClick={handleAccept} variant="primary">Accept</Button>
        </Modal.Footer>
      </Modal>
    </>

   

 


<Alert hidden={showAlert} variant="success">
  <Alert.Heading> {messageChange}</Alert.Heading>
</Alert>
</Container>
      </div>
        
    )
    }
    


}

