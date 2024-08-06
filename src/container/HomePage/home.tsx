import NavBar from "../../components/NavBar/navbar";
import HomeGif from "../../assets/home.gif";
import "../HomePage/style.css";
import Trail from "../../components/Trail/trail";
import { useState } from "react";


export function Home (){
  const [open, setOpen] = useState(true)

    return(
        <div>
            <NavBar/>
            <div className="grid">
            <div className="container" onClick={()=>setOpen(state => state)}>
              <Trail open={open}>
              <span>Plan</span>
              <span>For</span>
              <span>The</span>
              <span>Future!</span>
              </Trail>
            </div>
            <div className="homeGif">
              <img alt="gif" src={HomeGif}></img>
            </div>
       
            </div>
        </div>
    )
}