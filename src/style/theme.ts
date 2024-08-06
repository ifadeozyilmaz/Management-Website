import { createTheme} from '@mui/material/styles';

export const theme = createTheme({

    components:{
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius:"50px",
                    boxShadow:"none",
                    backgroundColor:'#34495E',
                    marginTop:'40px',
                    marginRight:2,
                    color:'#FFFFFF',
                    '&:hover': {
                        backgroundColor:'#85929E',
                        boxShadow:"none",
                        color:'#FFFFFF',
                    },
                    ":disabled":{
                        backgroundColor: '#85929E',
                        color:'#FFFFFF',
                    }
                }
            }
        },
        MuiTextField:{
            styleOverrides:{
                root:{
                    marginTop:10,
                    marginBottom:20,
                }
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    padding:25,
                    height:'34rem',
                    width: 400,
                    margin:"30px 0 0 90px",
                    borderRadius:'20px',
                    border:"2px solid #85929E",
                    color:"#1F6E8C",
                },
            }
        },
        MuiLink:{
            styleOverrides:{
                root:{
                    color:'#1F6E8C',
                }
            }
        },
        
     }
   }
 );


