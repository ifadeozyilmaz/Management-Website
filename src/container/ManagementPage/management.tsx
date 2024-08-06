import Notes from "../../components/Notes/notes";
import SideBar from "../../components/SideBar/Sidebar";
import "../ManagementPage/style.css";
import { PieChart } from '@mui/x-charts/PieChart';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { getTaskListLengthFromLocalStorage } from "../../utils/localStorageTasks";
import { useState, useEffect } from "react";
import axios from 'axios';


export default function Management() {

  const handleMailClick = () => {
    window.open("https://mail.google.com", "_blank");
  }
  const taskListLength = getTaskListLengthFromLocalStorage();
  const [projectLength, setProjectLength] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/ProjectLength')
      .then(response => {
        setProjectLength(response.data.length);
      })
      .catch(error => {
        console.error('Error fetching project length:', error);
      });
  }, []);

  return (
    <div className="big-container">
      <SideBar></SideBar>
      <div className="rows">
        <div className="head">
          <h3>Welcome İfade!</h3>
          <div className="head-end">
            <div className="mail" onClick={handleMailClick}>
              <EmailIcon />
            </div>
            <div className="Logout">
              <LogoutIcon />
              Log Out
            </div>
          </div>
        </div>
        <div className="sm-container">
          <div className="cont-rows">
            <div className="row1">
              <div className="cards">
                <div className="cards-name">Projects</div>
                <div className="cards-length"> {projectLength}</div>
              </div>
              <div className="cards">
                <div className="cards-name">Tasks</div>
                <div className="cards-length"> {taskListLength}</div>
              </div>

            </div>
            <div className="row2">
              <Notes></Notes>
              <div className="pie-chart">
                <PieChart
                  colors={['#5D6D7E', '#1A5276']}
                  series={[
                    {
                      data: [
                        { id: 0, value: 10, label: 'in progress', color: '#5D6D7E' },
                        { id: 1, value: 20, label: 'done', color: '#1A5276' },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="users">
            users
          </div>
        </div>
      </div>
    </div>
  )
}