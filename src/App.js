import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./component/LogIn.component";
import Logout from './component/LogOut.component';
import HODhomePage from './component/HD/HOD.component.js'
import assignCI from './component/HD/AssignCI.component.js'
import updateCI from './component/HD/UpdateCI.component.js'
import deleteCI from './component/HD/DeleteCI.component.js'
import viewChangeRequests from './component/HD/ViewChangeRequests.component.js'
import courseCoverage from './component/HD/CourseCoverage.component.js'
import responseChangeReq from './component/HD/ResponseChangeReq.component.js'
import staffMembs from './component/HD/StaffMembs.component.js'
import viewLeaveRequest from './component/HD/ViewLeaveRequest.component.js'
import acceptLeave from './component/HD/AcceptLeave.component.js'
import rejectLeave from './component/HD/RejectLeave.component.js'
import staffMembsOfCourse from './component/HD/staffMembsOfCourse.component.js'
import HOD from './component/HD/HOD.component.js'
import AddLocation from './component/HR/AddLocation.js'
import HRHomePage from './component/HR/HRHomePage.js'


import ACHomePage from './component/AC/AC.component.js'
import ACSched from './component/AC/Schedule.component.js'
import ACReplacements from './component/AC/ReplacementRequests.component.js'
import ACChangeOff from './component/AC/ACChangeOff.component.js'

function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={LogIn} />
            <Route path="/LogIn" exact component={LogIn} />
            <Route path="/LogOut" component={Logout}/>
            <Route path ="/AddCI" exact component= {assignCI} />
            <Route path="/UpdateCI" exact component={updateCI} />
            <Route path="/DeleteCI" exact component={deleteCI} />
            <Route path="/HODhomePage" exact component={HODhomePage} />
            <Route path="/ChangeDayOffRequests" exact component={viewChangeRequests} />
            <Route path="/ViewCourseCoverage" exact component={courseCoverage} />
            <Route path="/responseChangeReq" exact component={responseChangeReq} />
            <Route path="/staffMembs" exact component={staffMembs} />
            <Route path="/LeaveRequests" exact component={viewLeaveRequest} />
            <Route path="/acceptLeave" exact component={acceptLeave} />
            <Route path="/rejectLeave" exact component={rejectLeave} />
            <Route path="/HODHomePage" exact component={HOD} />
            
            <Route path="/CIHomePage" exact component={ACHomePage} />
            <Route path="/CISchedule" exact component={ACSched} />
            <Route path="/replacementRequests" exact component={ACReplacements} />
            <Route path="/SendChangeOff" exact component={ACChangeOff} />
            
            replacementRequests

            <Route path="/staffMembsOfCourse" exact component={staffMembsOfCourse} />
            <Route path ="/AddLocation" exact component={AddLocation} />
            <Route path ="/HRHomePage" exact component={HRHomePage} />


          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;