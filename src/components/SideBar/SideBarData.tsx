import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import FolderIcon from '@mui/icons-material/Folder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export const SideBarData =[
    {
        title:"Dashboard",
        icon:<HomeIcon/>,
        link:"/Management",
    },
    {
        title:"Task",
        icon:<TaskIcon/>,
        link:"/Task",
    },
    {
        title:"Project",
        icon:<FolderIcon/>,
        link:"/Project",
    },
    {
        title:"Calendar",
        icon:<CalendarMonthIcon/>,
        link:"/Calendar",
    },
]