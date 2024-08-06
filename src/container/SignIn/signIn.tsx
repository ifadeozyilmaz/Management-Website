import "../SignIn/style.css";
import { Button, Paper, TextField } from "@mui/material";
import { RouteTypes } from "../../enums/routes";
import { useNavigate } from "react-router-dom";
import SignInImg from "../../assets/signIn.png";



export function SignIn() {
    const navigate = useNavigate();


    const handleLogin = () => {
        navigate(RouteTypes.Management)
    }

    const handleSignUp = () =>{
        navigate(RouteTypes.SignUp)
    }

    return (
        <div className="signin">
            <div className="image">
                <img alt="img" src={SignInImg}>
                </img>
            </div>
            <div className="form">
                <Paper>
                    <h2>Sign In</h2>
                    <TextField label=' E-Mail' placeholder="Enter Your E-Mail" fullWidth />
                    <TextField label=' Password' placeholder="Enter Your Password" fullWidth type="password" />
                    <Button variant="contained" fullWidth onClick={handleLogin}>Login</Button>
                    <Button variant="contained" fullWidth onClick={handleSignUp}>Or Sign Up</Button>
                </Paper>
            </div>
        </div>

    )
}