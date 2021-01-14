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
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { MDBIcon,MDBBtn,MDBDropdownItem,MDBDropdown,MDBDropdownToggle,MDBDropdownMenu,MDBCard,MDBCardHeader, MDBCardBody,MDBCardTitle,MDBCardText,MDBContainer} from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Container from 'react-bootstrap/Container'



const drawerWidth = 180 ;

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
export default function CIHomePage() {
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
           
              <ListItem button component={Link} to="/CIHomePage">
              <ListItemIcon onClick={handleClick} ><HomeIcon style={{ fontSize: 20 }} />
</ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
              <Divider />
              
              <Divider />
              <ListItem button component={Link} to="/ViewTA">
              <ListItemIcon><TransferWithinAStationIcon style={{ fontSize: 20 }}/></ListItemIcon>
                <ListItemText  primary={"Profile"} />
              </ListItem>    
              <ListItem ></ListItem>
              <ListItem ></ListItem>
              <ListItem ></ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem ></ListItem><ListItem ></ListItem> <ListItem >
              </ListItem><ListItem ></ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem ></ListItem> <ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem ></ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem >
              </ListItem><ListItem ></ListItem><ListItem >
              </ListItem><ListItem ></ListItem>
              <ListItem button component={Link} to="/LogOut">
              <ListItemIcon><ExitToAppIcon style={{ fontSize: 30 }}/></ListItemIcon>
                <ListItemText  primary={"Log Out"} />
              </ListItem>


          </List>

          
        </Drawer>

        <Container className="HDBACKGRD">
          <div className="container">
     <div class="row">
     <div class="col-sm-4">
     <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
        View All Staff <MDBIcon icon="search"  className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/ViewStaffInDepartment"> View All Staff in Department </MDBDropdownItem>
        <MDBDropdownItem href="/ViewStaffPerCourse">View All Staff per Course</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
       <p>View All Staff in Department/Per Course</p>
     </div>

     <div class="col-sm-4">
     <MDBDropdown dropright>
      <MDBDropdownToggle caret color="primary">
      Assignment Of Academic Member <MDBIcon icon="user-edit"   className="ml-1" />
      </MDBDropdownToggle>
      <MDBDropdownMenu basic>
        <MDBDropdownItem href="/UpdateACInCourse"> Update Assignment Of AC Member </MDBDropdownItem>
        <MDBDropdownItem href="/DeleteACInCourse">Delete Assignment Of AC Member</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>

       <p>Update/Delete Assignment Of AC Member</p>
     </div>

     <div class="col-sm-4">
     
     <MDBBtn rounded size="m" color="primary" href="/AssignACMEM">Assign Academic Member<MDBIcon icon="spinner"    className="ml-1" /></MDBBtn>
       <p>Assign AC Member to Unassigned slots</p>
     </div>

     
    
   </div>
 
   <div class = "row"> 
 
   <div class="col-sm-4"style={{padding:10}} >
   <MDBBtn rounded size="lg" color="primary"  href="/ViewSlotAssignment">Slots' Assignment<MDBIcon icon="chalkboard-teacher"   className="ml-1" /></MDBBtn>
       <p>View The Slots' Assignment Of Courses </p>
     </div>
     
   <div class="col-sm-4" style={{padding:10}}>
   <MDBBtn rounded size="lg" color="primary" href="/ViewCourseCoverageAC">Course Coverage <MDBIcon icon="spinner"    className="ml-1" /></MDBBtn>
       <p>View Assigned Courses Coverage </p>
     </div>
     <div class="col-sm-4" style={{padding:10}}>
   <MDBBtn rounded size="lg" color="primary"  href="/AssignACTOCC">Assign to Coordinator<MDBIcon icon="chalkboard-teacher"   className="ml-1" /></MDBBtn>
       <p>Assign Academic Member to Coordinator </p>
     </div>

     
   </div>
   </div>
   </Container>
        
      </div>
    )
}
