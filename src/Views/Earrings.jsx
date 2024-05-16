import React, { useState } from 'react'
import Header from './Header'
const Earrings = () => {
  const [src1,setSrc1]=useState("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
  function starFn1(){
    setSrc1("https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg");
  }
  return (
    <div>
      <Header/>
    <main>
    <div  className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/9.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}} id="img1" />
    <img
            src={src1}
            className="svg"
            alt=""
            onClick={() =>
              setSrc1(
                "https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg"
              )
            }/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/12.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}} id="img2" /> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg" className="svg"alt=""   id="star2"/></div>
  <div className="orn-img"><img src=" https://www.lalithaajewellery.com/assets/img/earring/7.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}} id="img3" /> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg" className="svg"alt=""id="star3"/></div>
  <div className="orn-txt">
    Rs:<span id="cost1" className="orn-cost">60,200</span>/-<br/>
    <span className="cal" id="vd1" onClick="baropen1()">View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost2"  className="orn-cost">50500</span>/-<br/>
    <span  className="cal" id="vd2"  onClick="baropen2()">View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost3"  className="orn-cost">45550</span>/-<br/>
    <span  className="cal" id="vd3" onClick="baropen3()">View Details</span>
  </div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/4.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img4"/> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg" className="svg"alt="" onClick="wish4()" id="star4"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/2.webp" alt=""   style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img5"/> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg" className="svg"alt="" onClick="wish5()" id="star5"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/1.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img6"/> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg" className="svg"alt="" onClick="wish6()" id="star6"/></div>
  <div className="orn-txt">
    Rs:<span id="cost4" className="orn-cost">51516</span>/- <br/>
    <span  className="cal" id="vd4" onClick="baropen4()">View Details</span>
  </div>
  <div className="orn-txt" >
    Rs:<span id="cost5"  className="orn-cost">54773</span>/- <br/>
    <span  className="cal" id="vd5" onClick="baropen5()">View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost6" className="orn-cost">44461</span>/-  <br/>
    <span  className="cal" id="vd6" onClick="baropen6()">View Details </span>
  </div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/5.webp" alt=""  style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img7"/> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg" className="svg"alt="" onClick="wish7()" id="star7"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/10.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img8"/> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg"className="svg"alt="" onClick="wish8()" id="star8"/></div>
  <div className="orn-img"><img src="https://www.lalithaajewellery.com/assets/img/earring/3.webp" alt="" style={{width: "300px",height: "300px",  borderRadius: "20px"}}  id="img9"/> <img src="https://imgs.search.brave.com/mi-zvLzHi8N0-s_eGNrU-g5QE4sq30M0inIQ5dMJvac/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzE4L0ZpdmUtcG9p/bnRlZF9zdGFyLnN2/Zw.svg"className="svg"alt="" onClick="wish9()" id="star9"/></div>
  <div className="orn-txt">
    Rs:<span id="cost7" className="orn-cost">53688</span>/-  <br/>
    <span  className="cal" id="vd7" onClick="baropen7()">View Details</span>
  </div>
  <div className="orn-txt" >
    Rs:<span id="cost8"  className="orn-cost">58572</span>/-  <br/>
    <span  className="cal" id="vd8" onClick="baropen8()">View Details</span>
  </div>
  <div className="orn-txt">
    Rs:<span id="cost9"  className="orn-cost">51517</span>/-           <br/>
    <span  className="cal" id="vd9" onClick="baropen9()">View Details</span>
  </div>
<div className="details-bar" id="bar1">
    <div className="wrong" onClick="wrong()"></div>
    <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
      <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
       <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms1">11</span> Grams </div>
      <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
      <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
      <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
      <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice1">60,200</span></div>

    </div>
    <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet1"/>
    <button className="cart-add" onClick="addcart1()">Add To Cart</button>
    <button className="buy-now"  on click="buyclick1()">Buy Now</button>
 </div>
 <div className="details-bar" id="bar2">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms2">9.2</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice2">50500</span></div>

  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet2"/>
  <button className="cart-add" onClick="addcart2()">Add To Cart</button>
  <button className="buy-now"  onClick="buyclick2()">Buy Now</button>
</div>
<div className="details-bar" id="bar3">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms3">8.3</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice3">45550</span></div>

  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet3"/>
  <button className="cart-add" onClick="addcart3()">Add To Cart</button>
  <button className="buy-now"  onClick="buyclick3()">Buy Now</button>
</div>
<div className="details-bar" id="bar4">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms4">9.4</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice4">51516</span></div>

  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet4"/>
  <button className="cart-add" onClick="addcart4()">Add To Cart</button>
  <button className="buy-now"  onClick="buyclick4()">Buy Now</button>
</div>
<div className="details-bar" id="bar5">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms5">10.0</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice5">54773</span></div>
  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt=""className='img-det' id="imgdet5"/>
  <button className="cart-add" onClick="addcart5()">Add To Cart</button>
  <button className="buy-now" onClick="buyclick5()">Buy Now</button>
    {/* <!-- <button id="cancelbtn" onClick="wrong()">close</button> --> */}
</div>
<div className="details-bar" id="bar6">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms6">8.1</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice6">44461</span></div>

  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet6"/>
  <button className="cart-add" onClick="addcart6()">Add To Cart</button>
  <button className="buy-now"  onClick="buyclick6()">Buy Now</button>
</div>
<div className="details-bar" id="bar7" >
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms7">9.8</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice7">53688</span></div>

  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet7"/>
  <button className="cart-add" onClick="addcart7()">Add To Cart</button>
  <button className="buy-now" onClick="buyclick7()">Buy Now</button>
</div>
<div className="details-bar" id="bar8">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms8">10.7</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice8">58572</span></div>
  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/6.webp" alt="" className="img-det" id="imgdet8"/>
  <button className="cart-add" onClick="addcart8()">Add To Cart</button>
  <button className="buy-now" onClick="buyclick8()">Buy Now</button>

</div>
<div className="details-bar" id="bar9">
  <div className="wrong" onClick="wrong()"></div>
  <div style={{position:"relative",position: "absolute",top: "70px", right: "50px",width: "330px",height: "350px",borderRadius: "10px",paddingTop: "15px",paddingLeft: "50px"}}>
    <h1 style={{fontWeight: "bold",fontSize: "30px",fontFamily: "Arial, Helvetica, sans-serif", textDecoration: "underline", position: "absolute",left: "80px"}}>Price Details</h1>
     <div className="bill" style={{position: "absolute", top:"50px"}}>Weight of item: <span id="gms9">9.4</span> Grams </div>
    <div className="bill" style={{position: "absolute", top:"95px",left: "100px"}}>Item-type: GOLD</div>
    <div  className="bill" style={{position: "absolute", top: "140px", left: "93px"}}>Gold-Rate: ₹5427.3</div>
    <div className="bill" style={{position: "absolute", top:"180px",left: "37px"}}>Making-charges: ₹500</div>
    <div  className="bill" style={{paddingTop: "10px", textAlign:"center",borderTop:  "2px solid black", width: "180px",height: "30px",position: "absolute", top:"225px",left: "100px", fontSize: "22px"}} >Total = ₹<span id="fprice9">51517</span></div>

  </div>
  <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="" className="img-det" id="imgdet9"/>
  <button className="cart-add" onClick="addcart9()">Add To Cart</button>
  <button className="buy-now" onClick="buyclick9()">Buy Now</button>
</div>
 <div id="wcsheet">
  <img src="https://imgs.search.brave.com/vFYpXTN_KRcHAfx5yrZJaudSQaZNtn8XUYIEdMWu5ao/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3Nob3BwaW5nLWNh/cnQtcG5nL3Nob3Bw/aW5nLWNhcnQtc3Zn/LXBuZy1pY29uLWRv/d25sb2FkLTI4LnBu/Zw" id="cartlogo" onClick="cartclick()"></img>
 
  <img src="https://imgs.search.brave.com/fUAmpTOJj5QuZo1MqNUuGwwoNRsFl0XIVJ8bNXhyC3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYzL1N0YXIqLnN2/Zw.svg" id="wishlogo" onClick="wishclick()"></img>
  <ul id="cart" type="none" >
  </ul> 
 <ul   id="wishlist-items" type="none">
 </ul>
 </div>
    </main>
    </div>
  )
}

export default Earrings
