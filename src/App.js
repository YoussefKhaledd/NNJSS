import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
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
import acceptLeave from './component/HD/AcceptLeave.component.js'
import rejectLeave from './component/HD/RejectLeave.component.js'
import staffMembsOfCourse from './component/HD/staffMembsOfCourse.component.js'
import ACLeaveReq from './component/AC/ACLeaveReq.js'
import viewLeaveRequest from './component/HD/ViewLeaveRequest.component.js'
import Notifications from   './component/AC/Notifications.component.js'
import HOD from './component/HD/HOD.component.js'
import AllRequests from './component/AC/AllRequests.component.js'
import courseStaffMems from './component/HD/staffMembsOfCourse.component.js'
import ViewDayOff  from './component/HD/ViewDayOff.component.js'
import ViewDayOffOne from './component/HD/ViewDayOffOne.component.js'
import LocationSettings from './component/HR/LocationSettings.js'
import HRHomePage from './component/HR/HRHomePage.js'
import ACHomePage from './component/AC/AC.component.js'
import ACSched from './component/AC/Schedule.component.js'
import ACReplacements from './component/AC/ReplacementRequests.component.js'
import SlotLinkings from './component/AC/SlotLinkings.component.js'
import ACChangeOff from './component/AC/ACChangeOff.component.js'
import StaffAdjustment from './component/HR/StaffAdjustment.js'
import DepartmentOptions from './component/HR/DepartmentOptions.js'
import CoursesOptions from './component/HR/CoursesOptions.js'
import FacultyOptions from './component/HR/FacultyOptions.js'
import CheckHoursOrDays from './component/HR/CheckHoursOrDays'
import UpdateSalary from './component/HR/UpdateSalary.js'
import CheckAttendance from './component/HR/CheckAttendance'
import ManualSignOut from './component/HR/ManualSignOut'
import ManualSignIn from './component/HR/ManualSignIn'
import profile from './component/ALL/Profile'
import UpdateAge from './component/ALL/UpdateAge'
import ResetPassword from './component/ALL/ResetPassword'
import Sign from './component/ALL/Sign'
import ViewAttendance from './component/ALL/ViewAttendance'
import MissingDays from './component/ALL/MissingDays'
import Hours from './component/ALL/Hours1'




function App() {
  return (<Router>
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={LogIn} />
            <Route path="/LogIn" exact component={LogIn} />
            <Route path="/LogOut" component={Logout}/>=
            <Route path ="/Profile" exact component={profile} />
            <Route path ="/UpdateAge" exact component={UpdateAge} />
            <Route path ="/ResetPassword" exact component={ResetPassword} />
            <Route path ="/Sign" exact component={Sign} />
            <Route path ="/ViewAttendance" exact component={ViewAttendance} />
            <Route path ="/MissingDays" exact component={MissingDays} />
            <Route path ="/Hours" exact component={Hours} />
            <Route path ="/AddCI" exact component= {assignCI} />
            <Route path="/UpdateCI" exact component={updateCI} />
            <Route path="/DeleteCI" exact component={deleteCI} />
            <Route path="/HODhomePage" exact component={HODhomePage} />
            <Route path="/ChangeDayOffRequests" exact component={viewChangeRequests} />
            <Route path="/ViewCourseCoverage" exact component={courseCoverage} />
            <Route path="/responseChangeReq" exact component={responseChangeReq} />
            <Route path="/staffMembs" exact component={staffMembs} />
            <Route path="/LeaveRequests" exact component={ACLeaveReq} />
            <Route path="/CourseStaff" exact component={courseStaffMems} /> 
            <Route path="/acceptLeave" exact component={acceptLeave} />
            <Route path="/rejectLeave" exact component={rejectLeave} />
            <Route path="/HODHomePage" exact component={HOD} />
            <Route path="/ViewDayOff" exact component={ViewDayOff} /> 
            <Route path="/ViewDayOffOne" exact component={ViewDayOffOne} /> 
            <Route path="/CIHomePage" exact component={ACHomePage} />
            <Route path="/CISchedule" exact component={ACSched} />
            <Route path="/replacementRequests" exact component={ACReplacements} />
            <Route path="/slotLinking" exact component={SlotLinkings} />
            <Route path="/SendChangeOff" exact component={ACChangeOff} />
            <Route path="/sendLeaveRequest" exact component={ACLeaveReq} />
            <Route path="/Notifications" exact component={Notifications} />
            <Route path="/AllRequests" exact component={AllRequests} />
            <Route path ="/LocationSettings" exact component={LocationSettings} />
            <Route path ="/HRHomePage" exact component={HRHomePage} />
            <Route path ="/StaffAdjustment" exact component={StaffAdjustment} />
            <Route path ="/DepartmentOptions" exact component={DepartmentOptions} />
            <Route path ="/CoursesOptions" exact component={CoursesOptions} />
            <Route path ="/FacultyOptions" exact component={FacultyOptions} />
            <Route path ="/CheckHoursOrDays" exact component={CheckHoursOrDays} />
            <Route path ="/UpdateSalary" exact component={UpdateSalary} />
            <Route path ="/CheckAttendance" exact component={CheckAttendance} />
            <Route path ="/ManualSignOut" exact component={ManualSignOut} />
            <Route path ="/ManualSignIn" exact component={ManualSignIn} />


            


          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;