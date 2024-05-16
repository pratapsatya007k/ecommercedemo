import React from 'react'
import Header from './Header'
import "../public/buynow.css"
const Buynow = () => {
  return (
    <div>
       <Header/>
    <main id="main">
      <div id="dev-add">
        <img
          src="https://imgs.search.brave.com/E28t4AoAE4xcSCZriyaI8qJ5g89o0gMgKUW3GnL7DGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhka2kucG5n"
          alt=""
          id="tick1"
        />
        <div className="sno">1</div>
        <div className="sty1">DELIVERY-ADDRESS</div>
      </div>
      <form action="" id="fdevadd">
        <input
          type="text"
          placeholder="Name"
          name="userdetails"
          size="20"
          ClassName="form-sty"
          id="buyer"
          required
        />
        <input
          type="text"
          placeholder="10-digit mobile number"
          ClassName="form-sty"
          name="userdetails"
          id="mb"
          required
        />
        <input
          type="text"
          placeholder="pincode"
          ClassName="form-sty"
          name="userdetails"
          id="pincode"
          required
        />
        <input
          type="text"
          placeholder="Complete address"
          ClassName="form-sty"
          name="userdetails"
          id="cadd"
          required
        />
        <input
          type="radio"
          id="dev1"
          name="userdetails"
          ClassName="radio"
          required
        />Home(All day delivery) <br />
        <input
          type="radio"
          name="userdetails"
          id="dev2"
          ClassName="radio"
          required
        />Work (delivery between 10AM-9PM) <br />
        <button type="submit" id="save" onclick="save1()">Save</button>
        <button type="reset" id="cancel">Cancel</button>
      </form>
      <div id="od-sum">
        <img
          src="https://imgs.search.brave.com/E28t4AoAE4xcSCZriyaI8qJ5g89o0gMgKUW3GnL7DGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhka2kucG5n"
          alt=""
          id="tick2"
        />
        <div className="sno">2</div>
        <div className="sty1">ORDER-SUMMARY</div>
      </div>
      <div id="od-sumsec">
        <img src="" alt="" id="img" />
        <div id="counter">
          <div id="minus" className="sym" onclick="quantitydecrement()">-</div>
          <div id="count">1</div>
          <div id="plus" className="sym" onclick="quantityincrement()">+</div>
        </div>
        <div
          style={{
            position: "relative",
            position: "absolute",
            top: "10px",
            right: "20px",
            width: "330px",
            height: "350px",
            borderRadius: "10px",
            paddingTop: "15px",
            paddingLeft: "50px"}}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "24px",
              fontFamily: "Arial, Helvetica, sans-serif",
              textDecoration: "underline",
              position: "absolute",
              left: "110px",
              top: "20px"}}
          >
            Price Details
          </h1>
          <div className="bill" style={{position: "absolute",top:"40px",left: "85px"}}>Item-Name:<span id="pname"></span></div>
          <div className="bill" style={{position: "absolute",top: "75px"}}>
            Weight of item: <span id="gms">3</span> Grams
          </div>
          <div className="bill" style={{position: "absolute", top: "110px", left: "100px"}}>
            Item-type: GOLD
          </div>
          <div className="bill" style={{position: "absolute", top: "145px", left: "93px"}}>
            Gold-Rate: ₹5427.3
          </div>
          <div className="bill" style={{position: "absolute", top: "180px", left: "37px"}}>
            Making-charges: ₹500
          </div>
          <div
            className="bill"
            style={{
              paddingTop: "10px",
              textAlign: "center",
              borderTop: "2px solid black",
              width: "180px",
              height: "30px",
              position: "absolute",
              top: "215px",
              left: "80px",
              fontSize: "22px"}}
          >
            Total = ₹<span id="fprice">16781.9</span>
          </div>
        </div>
        <button id="odbtn" onclick="ordernow()">ORDER NOW</button>
        <button id="cancel1" onclick="home1()">Cancel order</button>
      </div>
      <div id="payment">
        <img
          src="https://imgs.search.brave.com/E28t4AoAE4xcSCZriyaI8qJ5g89o0gMgKUW3GnL7DGE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy9r/Y0tvajhka2kucG5n"
          alt=""
          id="tick3"
        />
        <div className="sno">3</div>
        <div className="sty1">PAYMENT</div>
      </div>
      <div
        style={{
          width: "200px",
          height: "150px",
          backgroundColor: "rgb(232, 229, 229)",
          border: "2px solid black",
          boxShadow: "2px 2px 2px black",
          position: "relative",
          position: "absolute",
          top: "320px",
          left: "200px",
          padding: "10px",
          display:"none"
          }}
        id="paymentsec"
      >
        <input
          type="radio"
          name="pay"
          id="p3"
          style={{marginTop: "10px"}}
          required
        />Cash on delivery <br />
        <input
          type="radio"
          name="pay"
          id="p1"
         style={{marginTop: "10px"}}
          required
        />UPI
        <br />
        <input
          type="radio"
          name="pay"
          id="p2"
         style={{marginTop: "10px"}}
          required
        />CARD
        <br />
        <button id="porder" onclick="orderconfirm()">Place an order</button>
      </div>
    </main>
    <div id="wcsheet">
     <div className="img-sty"  id="cartdiv"><img src="https://imgs.search.brave.com/vFYpXTN_KRcHAfx5yrZJaudSQaZNtn8XUYIEdMWu5ao/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3Nob3BwaW5nLWNh/cnQtcG5nL3Nob3Bw/aW5nLWNhcnQtc3Zn/LXBuZy1pY29uLWRv/d25sb2FkLTI4LnBu/Zw" id="cartlogo" onclick="cartclick()"></img></div>
     <div className="wrong" onclick="wrong()"></div>
     <div className="img-sty" id="wishlistdiv">  <img src="https://imgs.search.brave.com/fUAmpTOJj5QuZo1MqNUuGwwoNRsFl0XIVJ8bNXhyC3g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzYzL1N0YXIqLnN2/Zw.svg" id="wishlogo" onclick="wishclick()"></img></div>
      <ul id="cart" type="none" >
        {/* <!--  <li>
          <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="">
          <span>GOLD RING</span>
          <div >
            <button>Add</button>
          <button>Remove</button>
          </div> -->
      </ul>  
      <!-- <img src="https://imgs.search.brave.com/vFYpXTN_KRcHAfx5yrZJaudSQaZNtn8XUYIEdMWu5ao/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3Nob3BwaW5nLWNh/cnQtcG5nL3Nob3Bw/aW5nLWNhcnQtc3Zn/LXBuZy1pY29uLWRv/d25sb2FkLTI4LnBu/Zw" id="msgempty"></img>
      <span id="msg">EMPTY</span> -->
     <ul   id="wishlist-items" type="none">
      <!-- <li>
        <img src="https://www.lalithaajewellery.com/assets/img/ring/1.webp" alt="">
        <span>GOLD RING</span>
        <div >
          <button>Add</button>
        <button>Remove</button>
        </div> -->
      </li> */}
     </ul>
     </div>
     <img src="/thankyoupage" id="thankyou"></img>
    </div>
  )
}

export default Buynow
