import React, { useState, useEffect } from 'react';
import { MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput,MDBDropdownItem,MDBDropdown,MDBDropdownMenu,MDBDropdownToggle } from "mdbreact";
import './styles.css';
import ReactDOM from 'react-dom'
import axios from'axios';


//these are for the locationSettingsPage
 function CollapsedBar() {
  const [state, setstate] = useState('collapse');//for the add 
  const [state1, setstate1] = useState('collapse');//for the update
  const [state2, setstate2] = useState('collapse');//for the delete
  var [locationName, setLocationName] = useState('');
  var [locationCapacity, setLocationCapacity] = useState('');
  const [locationTypeGet, setLocationType] = useState('');
  var [locationNameUpdate, setLocationNameUpdate] = useState('');
  var [locationCapacityUpdate, setLocationCapacityUpdate] = useState('');
  const [locationTypeUpdate, setLocationTypeUpdate] = useState('');
  var [locationNameDelete,setlocationNameDelete]= useState('');

 
    return (
        <div class="container">
        <h2>Available Options</h2>
        <p><strong>Note: Make sure to enter the correct location </strong> </p>
   {/* ---------------------------------------------- */}
  <div class="card" className="fCard">
    <div class="card-header" id="headingOne">
    <div type="button" onClick={()=>setstate('collapse')} class={state} style={{marginRight:-1000}}>
 <MDBIcon far icon="window-close" />
    </div>
        <button class="btn  btn-primary btn-rounded" type="button" onClick={()=>setstate('collapse show')} data-toggle="collapse" data-target="#collapseOne" aria-controls="collapseOne" style={{}} >
          Add Location
        </button> 
          </div>
         <text className="locText" class={state}>Enter Location name here:</text>
         <input type="text" class={state}  placeholder="Location Name" style={{marginLeft:10} } onChange={event => setLocationName(event.target.value)} >
           </input>
          <div  class={state}>
          <text >Enter Location capacity here:</text> 
          <input type="number" class={state} placeholder="Location capacity" style={{marginLeft:5,marginTop:10}} onChange={event=>setLocationCapacity(event.target.value)}></input>
          </div>
           <div class={state}>
          <text className="location-type" >Select the location Type:</text>
          <select className="top-buffer"  onChange={(e)=>{
          const loc=e.target.value
           setLocationType(loc)
          }
          }>
          <option  value='lab'>Lab</option>
          <option  value='room'>Room</option>
          <option  value='hall'>Hall</option>
          <option  value='office'>Office</option>
          </select>
        </div> 
        
        

         
    <div class ={state}>
      <MDBBtn rounded size="md"  color="  mdb-color lighten-1" style={{marginTop:20}} onClick={()=>addNewLocation(locationName,locationTypeGet,locationCapacity)}>
      <text className="btnSubmit">Add</text></MDBBtn>
      </div>

    {/*---------------------------------First card-----------------------------  */}

    <div id="collapseOne"  class={state} aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      </div>
    </div>
  </div>
  <div class="card" className="fCard">
  <div class="card-header" id="headingTwo">
  <div type="button" onClick={()=>setstate1('collapse')} class={state1} style={{marginRight:-1000}}>
 <MDBIcon far icon="window-close" />
    </div>
        <button class="btn  btn-primary btn-rounded" type="button" onClick={()=>setstate1('collapse show')} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Update Location
        </button>
           </div>
          <div id="collapseTwo" class={state1} aria-labelledby="headingTwo">
      
          <div class={state1}>
          
          <text>Enter Location Name :</text> 
          <input  class="up" placeholder="Location Name" onChange={event=>setLocationNameUpdate(event.target.value)}></input>
          <div>

          <text >Enter location Capacity :</text> 
          <input type="number" class="up" placeholder="Location Capacity" onChange={event=>setLocationCapacityUpdate(event.target.value)}  ></input>
          </div>
          <text   className="location-type"> Select the location Type:</text>
          <select className="top-buffer"  onChange={(e)=>{
            const loc=e.target.value
           setLocationTypeUpdate(loc)
          }
          }>
          <option  value="lab">Lab</option>
          <option  value="room">Room</option>
          <option  value="hall">Hall</option>
          <option  value="office">Office</option>
          </select>
          <div>
          <MDBBtn rounded size="md"  color="  mdb-color lighten-1" style={{marginTop:20}} onClick={()=>updateLoc(locationNameUpdate,locationTypeUpdate,locationCapacityUpdate)}>
      <text className="btnSubmit">Update</text></MDBBtn>
          </div>

</div>
    </div>
  </div>
  {/* ---------------------Third---------------- */}
  <div class="card" className="fCard">
    <div class="card-header" id="headingThree">
    <div type="button" onClick={()=>setstate2('collapse')} class={state2} style={{marginRight:-1000}}>
 <MDBIcon far icon="window-close" />
    </div>
        <button class="btn  btn-primary btn-rounded" type="button" onClick={()=>setstate2('collapse show')} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         Delete Location
        </button>
    </div>
    <div id="collapseThree" class={state2} aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class={state2} >
      <text>Enter the location you want to delete:</text>
      <input style={{marginLeft:15}}placeholder="Location Name" onChange={event=>setlocationNameDelete(event.target.value)}></input>
      <div>
      <MDBBtn rounded size="md"  color="  mdb-color lighten-1" style={{marginTop:20}} onClick={()=>deleteLoc(locationNameDelete)}>
      <text className="btnSubmit">Delete</text></MDBBtn>
      </div>
      </div>

    </div>
  </div>
</div>
)   
}


const addNewLocation = async (name,type,cap) => {
  axios.post('http://localhost:5000/addLocation', 
    {
        locationName : name,
        locationType:type,
        locationCapacity:cap,
    },

    {  
        headers: {
        'auth-token': localStorage.getItem('auth-token'),
        }
    }).then(response => {
            console.log(response)
      }).catch(error => {
            console.log(error.response)
      })}

const updateLoc = async (name,type,cap) => {
    axios.post('http://localhost:5000/updateLocation', 
          {
              locationName : name,
              locationType:type,
              locationCapacity:cap,
          },
      
          {  
              headers: {
              'auth-token': localStorage.getItem('auth-token'),
              }
          }).then(response => {
                  console.log(response)
            }).catch(error => {
                  console.log(error.response)
            })}
            
  const deleteLoc = async(name)=>{
    axios.post('http://localhost:5000/deleteLocation', 
    { 
      locationName : name,
  },
  {  headers: {
      'auth-token': localStorage.getItem('auth-token'),
      }
  }).then(response => {
          console.log(response)
    }).catch(error => {
          console.log(error.response)
    })}
  
      
export default CollapsedBar;