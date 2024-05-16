import React from 'react'
import "../public/header.css"
import { useState,useEffect } from 'react';
import Search from './search';
const Header = () => {
  const [borderBottomhome,setborderBottomhome]=useState("3px solid #f3ef11");
  const [borderBottomaboutus,setborderBottomaboutus]=useState("none");
  const [borderBottomaccount,setborderBottomaccount]=useState("none");
  function borderbottomfn(url="none"){    
    if(url==="account"){
      window.location.href="/account"
      setborderBottomhome("none");
      setborderBottomaboutus("none");
      setborderBottomaccount("3px solid #f3ef11")
    }else if(url==="aboutus"){
      window.location.href="/aboutus"
      setborderBottomaboutus("3px solid #f3ef11");
      setborderBottomhome("none");
      setborderBottomaccount("none");
    } else if (url==="home"){
      window.location.href="/home";
      setborderBottomhome("3px solid #f3ef11");
      setborderBottomaccount("none");
      setborderBottomaboutus("none");
    }
    else{
      setborderBottomhome("none");
      setborderBottomaccount("none");
      setborderBottomaboutus("none");
    }
  }
  
 
  return (
    <div>
       <header>
      <div id="logo"></div>
      <div id="name">NEELIMA JEWELLERY</div>
      <nav id="nav-bar">
        <div id="home" onClick={()=>borderbottomfn("home")} style={{borderBottom:borderBottomhome}}>Home</div>
        <div id="account" onClick={()=>borderbottomfn("account")} style={{borderBottom:borderBottomaccount}}>Account</div>
        <div id="aboutus" onClick={()=>borderbottomfn("aboutus")} style={{borderBottom:borderBottomaboutus}}>About us</div>
      </nav>
     
    </header>
    
    </div>
  )
}

export default Header
