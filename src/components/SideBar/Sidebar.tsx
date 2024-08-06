import "./style.css";
import { SideBarData } from "./SideBarData";
import CalendarComp from "../Calendar/calendar";


export default function SideBar(){

    return(
        <div className="Sidebar">
            <div className="SidebarList">
            {SideBarData.map((val,key)=>{
                return(
                    <li className="SidebarRow" key={key} 
                    id={window.location.pathname === val.link ? "active" :""}
                    onClick={()=>{window.location.pathname = val.link}}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                ) 
            })}
            </div>
            <div className="side-calendar"><CalendarComp/></div>
        </div>
    )
}