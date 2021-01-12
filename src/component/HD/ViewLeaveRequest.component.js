import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'
import ViewStaff from './ViewStaff.component'
import { Container,Badge,Modal,Button,Alert } from 'react-bootstrap'
import TableScrollbar from 'react-table-scrollbar';

 

export default function ViewLeaveRequest() {
    const [leaveReq,setLeaveReq]=useState([])
    const [id,setId]=useState("")
    const [messageLeave,setMessageLeave]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let showAlert=false;

    if(localStorage.getItem('auth-token') === null){
        window.location.href = "/login";
    }
    else{
        function getLeaveRequests(list){
            if(list!==undefined && list.length>0&&list!==null){
            return list.map(elem =>{
                if(typeof list=='string'){
                setMessageLeave(list)
                showAlert=true;}
                else{
                    if(elem.senderId!=null){
                        showAlert=false
              return(
                
              <tr>
                <td>{elem.senderName}</td>
                <td>{elem.senderId}</td>
                <td>{elem.type}</td>
                <td>{elem.status}</td>
                <td>{elem.reason}</td>
                <td>{elem.month}</td>
                <td>{elem.day}</td>
                <Button variant="primary" onClick={handleShow}>
                        Accept/Reject
                    </Button>
              </tr>
              )}}
            })
          }
          else{
            return "";
          }}


            axios.get('http://localhost:5000/viewLeave',
            {  
                headers: {
                'auth-token': localStorage.getItem('auth-token')
                }
            })
              .then(res =>{
                  console.log(typeof res.data)
                if(typeof res.data=="string"){
                    setLeaveReq(res.data)
                    showAlert=true;
                }else{
                setLeaveReq(res.data);  
                showAlert=false;   
                } 
                console.log(showAlert)
              })
              .catch(error =>{
                console.log(error);
              })
              

              const handleAccept = async e=>{
                axios.post('http://localhost:5000/acceptLeaveReq',{
                    staffId:id
                },
                {  
                    headers: {
                    'auth-token': localStorage.getItem('auth-token')
                    }
                })
                  .then(res =>{
                      console.log(res.data)
                      setMessageLeave(res.data);
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
                          setMessageLeave(res.data);
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
        Staff Leave Requests </h3>
        <TableScrollbar rows={3}>
       <table hidden={showAlert}  className="table table-sm table-dark">
        <thead className = "thead-light">
          <tr>
            <th>Staff Id</th>
            <th>Staff Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Day</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {getLeaveRequests(leaveReq)}
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
          <Modal.Title>Please Verify Enter Staff ID </Modal.Title>
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
  <Alert.Heading> {messageLeave}</Alert.Heading>
</Alert>
</Container>
        </div>
    )
}
}