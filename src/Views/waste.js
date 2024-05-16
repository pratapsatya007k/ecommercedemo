<header>
      <div id="logo"></div>
      <div id="name">NEELIMA JEWELLERY</div>
      <nav id="nav-bar">
        <div id="home" onclick="home()">Home</div>
        <div id="account">Account</div>
        <div id="aboutus">About us</div>
        <div id="contactus">Contact us</div>
      </nav>
      <section id="products">
        <div id="rectify" style="display: none">GOLD NECKLACE</div>
        <img
          src="https://imgs.search.brave.com/4IIGkWn0hsiodBjRk8E5i6Vn4-wB9z-JyuPHVkKWqzI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvNTYvNTY3NjMu/cG5n"
          id="threebtn"
          onclick="wcopen()"
        />
        <div id="product">Product Type:</div>
        <button id="gold">Gold Ornaments</button>
      </section>
      <section id="orn-bar">
        <div className="orn" id="rings" onclick="ringsopen()">Rings</div>
        <div className="orn" id="earrings" onclick="earringsopen()">Ear Rings</div>
        <div className="orn" id="necklace" onclick="necklaceopen()">Necklace</div>
        <div className="orn" id="bangles" onclick="banglesopen()">Bangles</div>
        <div className="orn" id="bracelets" onclick="braceletsopen()">Bracelets</div>
      </section>
    </header>