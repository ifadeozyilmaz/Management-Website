import { Fragment } from "react";
import "../SignUp/style.css";
import { Button, Paper,Link, TextField } from "@mui/material";
import { RouteTypes } from "../../enums/routes";
import {  useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/signUp.png";

export function SignUp (){
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate(RouteTypes.Management)
    }

    return(
        <Fragment>
            <div className="grid">
                <div className="image">
                    <img alt="img" src={SignUpImg}>
                    </img>
                </div>
                <div className="form">
                    <Paper>
                        <h2>Sign Up</h2>
                        <TextField label = ' E-Mail' placeholder="Enter Your E-Mail" fullWidth />
                        <TextField label = ' Password' placeholder="Enter Your Password" fullWidth type="password" />
                        <TextField label = ' Password Check' placeholder="Enter Your Password" fullWidth type="password" />
                        <Link href = "/SignIn"> Already have an account ? Sign In </Link>
                        <Button variant="contained" fullWidth onClick={handleSignUp}>Sign Up</Button>

                    </Paper>
                </div>

            </div>
        </Fragment>
    )
}