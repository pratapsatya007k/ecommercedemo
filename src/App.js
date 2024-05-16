import Login from "../src/Views/Login";
import Home from "../src/Views/Home";
import SignUp from "../src/Views/Signup";
import Rings from "../src/Views/Rings";
import Earrings from "../src/Views/Earrings";
import Bangles from "../src/Views/Bangles";
import Bracelets from "../src/Views/Bracelets";
import Necklace from "../src/Views/Necklace";
import Platinum from "../src/Views/Platinum";
import Sliver from "../src/Views/Sliver";
import Buynow from "../src/Views/Buynow";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Aboutus from "./Views/Aboutus";
import Account from "./Views/Account";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/gold/rings' element={<Rings />} />
          <Route path='/gold/earrings' element={<Earrings />} />
          <Route path='/gold/bangles' element={<Bangles />} />
          <Route path='/gold/necklace' element={<Necklace />} />
          <Route path='/gold/bracelets' element={<Bracelets />} />
          <Route path='/sliver' element={<Sliver />} />
          <Route path='/platinum' element={<Platinum />} />
          <Route path='/buynow' element={<Buynow />} />
          <Route path='/account' element={<Account />} />
          <Route path='/aboutus' element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
