// import React from 'react'
// import {  Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
// import image from '../logo.png'
// import '../../App.css'


// export default function HODNavigationBar() {
//     return (
//         <div className='NavBar'>
//              <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
//             <img src={image} alt="Logo" width='30px' />
//             <Navbar.Brand href="/HODHomePage">Home</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//             <NavDropdown title="Course Instructor">
//             <NavDropdown.Item href="/AddCI">Add Course Instructor </NavDropdown.Item>
//             <NavDropdown.Item href="/UpdateCI">Update Course Instructor</NavDropdown.Item>
//             <NavDropdown.Item href="/DeleteCI">Delete Course Instructor</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Staff">
//             <NavDropdown.Item href="/StaffMembs">View All Staff in Department</NavDropdown.Item>
//             <NavDropdown.Item href="/CourseStaff">View All Staff in a specific Course</NavDropdown.Item>
//             <Dropdown.Divider />
//             <NavDropdown.Item href="/ViewDayOff">View Staff Day off </NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Requests">
//             <NavDropdown.Item href="/ChangeDayOffRequests">Change Day Off Requests</NavDropdown.Item>
//             <NavDropdown.Item href="/LeaveRequests">Leave Requests</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Courses">
//             <NavDropdown.Item href="/ViewCourseCoverage">View Course Coverage</NavDropdown.Item>
//             <NavDropdown.Item href="/ViewTA">View Teaching Assignments</NavDropdown.Item>
//             </NavDropdown>
//             </Nav>

            
//                         <Nav >
//                         <Nav.Link className='LogOutButton'  href="/LogOut">LogOut</Nav.Link>
//                 </Nav>
//             </Navbar.Collapse>
//             </Navbar>
//         </div>
//     )
// }




import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import {  Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import GroupIcon from '@material-ui/icons/Group';
import TodayIcon from '@material-ui/icons/Today';
import ListAltIcon from '@material-ui/icons/ListAlt';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 203 ;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {backgroundColor:'rgb(21, 24, 76)',
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: { 
        backgroundColor:'rgb(21, 24, 76)',  
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
        
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7) + 1,
      },
    },
    toolbar: {
    backgroundColor:'rgb(21, 24, 76)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

export default function Trial() {
  if(localStorage.getItem('auth-token') === null){
    window.location.href = "/login";
}
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [anchorEll, setAnchorEll] = React.useState(null);

  const handleClickL = (event) => {
    setAnchorEll(event.currentTarget);
  };

  const handleCloseL = () => {
    setAnchorEll(null);
  };

  const [anchorElll, setAnchorElll] = React.useState(null);

  const handleClickLL = (event) => {
    setAnchorElll(event.currentTarget);
  };

  const handleCloseLL = () => {
    setAnchorElll(null);
  };

  const [anchorEllll, setAnchorEllll] = React.useState(null);

  const handleClickLLL = (event) => {
    setAnchorEllll(event.currentTarget);
  };

  const handleCloseLLL = () => {
    setAnchorEllll(null);
  };


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton  onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
           
              <ListItem button component={Link} to="/HODHomePage">
              <ListItemIcon onClick={handleClick} ><HomeIcon style={{ fontSize: 20 }} />
</ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <Divider />
              <ListItem button>
              <ListItemIcon onClick={handleClick} ><AssignmentInd style={{ fontSize: 20 }}  /></ListItemIcon>
              <ListItemText onClick={handleClick} primary={"Instructor"} />
                <Menu
                id="CourseInstructor"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                <MenuItem component={Link} to="/AddCI">Add Course Instructor</MenuItem>
                <MenuItem component={Link} to="/UpdateCI">Update Course Instructor</MenuItem>
                <MenuItem component={Link} to="/DeleteCI">Delete Course Instructor</MenuItem>
                </Menu>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon onClick={handleClickL}><GroupIcon style={{ fontSize: 20 }}  /></ListItemIcon>
                <ListItemText onClick={handleClickL} primary={"Staff"} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEll}
                    keepMounted
                    open={Boolean(anchorEll)}
                    onClose={handleCloseL}
                >
                    <MenuItem component={Link} to="/StaffMembs">View All Staff in Department</MenuItem>
                    <MenuItem component={Link} to="/CourseStaff">View All Staff in a specific Course</MenuItem>
                </Menu>
              </ListItem>
              <Divider />
              <ListItem button >
                <ListItemIcon onClick={handleClickLL}><TodayIcon style={{ fontSize: 20 }}/></ListItemIcon>
                <ListItemText  onClick={handleClickLL} primary={"View Day Off"} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElll}
                    keepMounted
                    open={Boolean(anchorElll)}
                    onClose={handleCloseLL}
                >
                    <MenuItem component={Link} to="/ViewDayOffOne">Specific Staff Member</MenuItem>
                    <MenuItem component={Link} to="/ViewDayOff">All Staff Member</MenuItem>
                </Menu>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon onClick={handleClickLLL}><ListAltIcon style={{ fontSize: 20 }}/></ListItemIcon>
                <ListItemText onClick={handleClickLLL} primary={"Requests"} />
                <Menu
                id="simple-menu"
                anchorEl={anchorEllll}
                keepMounted
                open={Boolean(anchorEllll)}
                onClose={handleCloseLLL}
            >
                <MenuItem component={Link} to="/ChangeDayOffRequests">View Change Day Off Requests</MenuItem>
                <MenuItem component={Link} to="/LeaveRequestHD">View Leave Requests</MenuItem>
            </Menu>
              </ListItem>
              <Divider />

              <ListItem button component={Link} to="/ViewCourseCoverage">
                <ListItemIcon><TimelapseIcon style={{ fontSize: 20 }}/></ListItemIcon>
                <ListItemText primary={"Course Coverage"} />
              </ListItem>
              <Divider />
              <ListItem button component={Link} to="/ViewTA">
              <ListItemIcon><TransferWithinAStationIcon style={{ fontSize: 20 }}/></ListItemIcon>
                <ListItemText  primary={"Teaching Assign"} />
              </ListItem><ListItem ></ListItem><ListItem ></ListItem><ListItem ></ListItem><ListItem ></ListItem>       
              <ListItem ></ListItem><ListItem ></ListItem><ListItem > </ListItem><ListItem ></ListItem><ListItem >
            </ListItem><ListItem ></ListItem>

              <ListItem button component={Link} to="/LogOut">
              <ListItemIcon><ExitToAppIcon style={{ fontSize: 30 }}/></ListItemIcon>
                <ListItemText  primary={"Log Out"} />
              </ListItem>


          </List>

          
        </Drawer>
        
      </div>
    )
}
