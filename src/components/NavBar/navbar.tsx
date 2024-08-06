import { Link } from "react-router-dom";
import "../NavBar/style.css";

export default function NavBar() {
    return (
        <nav className="nav">
            <h3> MANAGEMENT</h3>
            <div className="btns">
            <Link to={"/SignIn"} >Sign In</Link>
            <Link to={"/SignUp"}>Sign Up</Link>
            </div>
        </nav>
    );
}
