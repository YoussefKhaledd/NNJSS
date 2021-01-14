import Dropdown from 'react-bootstrap/Dropdown';
import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'
import { Container,Modal,Button,Row } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert';
import './hdComponent.css'


    

export default function AssignCI() {
    const [state,setState] = useState("")
    const [ci,setCi]= useState("")
    const [id,setId]=useState("")
    const [courses,setCourses]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true) ;
  
    let selectedC=" Select a course"
    if(id!=""){
        selectedC=id
    }
    

    const getAllCourses=(list)=>{
        if(list!==undefined && list.length>0&&list!==null){
        return list.map(elem =>{
          return(
            <Dropdown.Item onSelect= {e =>setId(elem)}>{elem}</Dropdown.Item>
          )
        })
      }
      else{
        return "";
      }}

    axios.get('http://localhost:5000/HDCourses',
    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token')
        }
    })
      .then(res =>{
          setCourses(res.data);
      })
      .catch(error =>{
        console.log(error);
      })

      const handleSubmit = async e=>{
        e.preventDefault();
         axios.post('http://localhost:5000/assignCI',{staffId:ci,courseId:id},
{  
    headers: {
    'auth-token': localStorage.getItem('auth-token')
    }
})
  .then(res =>{
    setState(res.data);
    handleShow();
      

  })
  .catch(error =>{
    console.log(error);
  })
}

  
    return (

        <div>
            <NavigationBar />
            <Container className="hdComp">
              <h3 className="TextLeft">
        Assigning Course Instructor </h3>
        

        <h5 className="TextLeftSub">Course ID :<span style={{display:'inline-block'}}>
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedC}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {getAllCourses(courses)}
            </Dropdown.Menu>
            </Dropdown></span></h5>

        <h5 className="TextLeftSub"> Course Instructor ID : <span style={{display:'inline-block'}}><input onChange = {e =>setCi(e.target.value)}></input></span> <span> <Button className='buttonAssign' onClick={handleSubmit}>
        Add Course Instructor
      </Button></span></h5>    
     

      <Modal show={show} onHide={handleClose} style={{marginTop:'15%'}}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:'center'}}>{state}</Modal.Title>
        </Modal.Header>
      </Modal>



    </Container>   
        </div>
    )
}
