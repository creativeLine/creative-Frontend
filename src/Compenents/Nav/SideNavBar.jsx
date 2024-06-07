import SideNav, {Toggle,NavItem, NavText, NavIcon} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenToSquare,faTrash, faHouse ,faUser,faUserPlus, faUsers, faCalendar, faSignOut} from "@fortawesome/free-solid-svg-icons";
import './nav.css';
import { useNavigate } from "react-router-dom";




function SideNavBar(){
    const navigate = useNavigate();
     return(
     <SideNav className ="nav" onSelect={Selected=>{
       navigate("/"+Selected)
       
    }}>
        <SideNav.Toggle className = "sideNav-toggle"></SideNav.Toggle>
        
        <SideNav.Nav>
            <NavItem eventKey= "home">
                <NavIcon><FontAwesomeIcon icon={faHouse}/></NavIcon>
                <NavText>Home</NavText>
            </NavItem>

            <NavItem  eventKey = "employee">
                <NavIcon ><FontAwesomeIcon icon={faUser}/></NavIcon>
                <NavText>Employee</NavText>
            </NavItem>


            <NavItem eventKey = "update">
                <NavIcon ><FontAwesomeIcon icon={faPenToSquare} /></NavIcon>
                <NavText>update</NavText>
            </NavItem>
            <NavItem eventKey = "Delete">
                <NavIcon ><FontAwesomeIcon icon={faTrash} /></NavIcon>
                <NavText>Delete</NavText>
            </NavItem>
            <NavItem eventKey = "addEmployee">
                <NavIcon> <FontAwesomeIcon icon={faUserPlus} /></NavIcon>
                <NavText>AddEmployee</NavText>
            </NavItem>
            <NavItem eventKey = "getEmployees">
                <NavIcon><FontAwesomeIcon icon={faUsers} /></NavIcon>
                <NavText>Employees</NavText>
            </NavItem>
            <NavItem eventKey = "Attendance">
                <NavIcon ><FontAwesomeIcon icon={faCalendar} /></NavIcon>
                <NavText>Attendance</NavText>
            </NavItem>
            <NavItem eventKey="logOut">
                <NavIcon s><FontAwesomeIcon icon={faSignOut} /></NavIcon>
                <NavText>logOut</NavText>
            </NavItem>



           
        </SideNav.Nav>
    </SideNav>
    );
}   


export default SideNavBar