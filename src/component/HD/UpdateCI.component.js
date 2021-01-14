import Dropdown from 'react-bootstrap/Dropdown';
import React,{useState} from 'react'
import NavigationBar from './HODNavigationBar'
import axios from 'axios'
import { Container,Modal,Button,Row } from 'react-bootstrap'
import './hdComponent.css'


export default function UpdateCI() {
    const [state,setState] = useState("")
    const [ci,setCi]= useState("")
    const [id,setId]=useState("")
    const [Newid,setNewId]=useState("")
    const [courses,setCourses]=useState([])
    const [newCourses,setNewCourses]=useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true) ;
  
    let selectedC="Select the Old Course"
    let NewselectedC="Select the New Course"
    if(id!=""){
        selectedC=id
    }
    if(Newid!=""){
        NewselectedC=Newid
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
      const getAllNewCourses=(list)=>{
        if(list!==undefined && list.length>0&&list!==null){
        return list.map(elem1 =>{
          return(
            <Dropdown.Item onSelect= {e =>setNewId(elem1)}>{elem1}</Dropdown.Item>
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
          setNewCourses(res.data)
      })
      .catch(error =>{
        console.log(error);
      })

      const handleSubmit = async e=>{
        e.preventDefault();
         axios.post('http://localhost:5000/updateCI',{staffId:ci,oldCourseId:id,courseId:Newid},
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
                    <Container className="hdCompBig">
                    <h3 className="TextLeft">
        Updating Course Instructor </h3>
            
        <h5 className="TextLeftSub">Old Course ID :<span style={{display:'inline-block'}}>
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {selectedC}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {getAllCourses(courses)}
            </Dropdown.Menu>
            </Dropdown>
            </span>
            </h5>
            <h5 className="TextLeftSub">New Course ID :<span style={{display:'inline-block'}}>
            <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
            {NewselectedC}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            {getAllNewCourses(newCourses)}
            </Dropdown.Menu>
            </Dropdown>
            </span>
            </h5>
            <h5 className="TextLeftSub"> Course Instructor Name : <span style={{display:'inline-block'}}> <input onChange = {e =>setCi(e.target.value)}></input></span><span><Button className='buttonAssign' onClick={handleSubmit}>
        Update Course Instructor
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
