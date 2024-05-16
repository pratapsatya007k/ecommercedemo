import React from 'react'
import logo from "../public/wish.png"
import "../public/account.css"
import Header from './Header'
import axios from 'axios'
import { useEffect,useState } from 'react'
const Account = () => {
  const [data, setData] = useState([]);
  const [id,setid]=useState();
  const key="username";
  const value="pratap";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/insert', {
          params: { key, value }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/insert', {
        params: { key, value }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  // Function to generate item key based on item type
  const generateItemKey = (itemType) => {
    // Example: If itemType is 'rings', key will be 'R1'
    return itemType.charAt(0).toUpperCase() + (data.filter(item => item.itemType === itemType).length + 1).toString();
  };

  const wishdeletefn = async (itemId) => {
    try {
      await axios.delete('/insert', { data: { key: "itemid", value: itemId } });
      // Handle successful deletion
      console.log('Data deleted successfully.');
      // Refresh data after deletion
      const response = await axios.get('/insert', {
        params: { key, value }
      });
      setData(response.data);
    } catch (error) {
      // Handle error
      console.error('Error deleting data:', error);
    }
    fetchData();
  };

  
  return (
    <div>
        <Header/>
      <section id="accountbar">
        {/* <img src={nj} className='img sty'/> */}
        <img src={logo} alt="No image" className='imgsty' />
        <img src="https://img.icons8.com/?size=80&id=8aHMCM4GMJHR&format=png" alt=""  className='imgsty'/>
        <img src="https://icons.veryicon.com/128/Business/Pretty%20Office%203/Order%20history.png" alt="" className='imgsty' />
        <img src="https://img.icons8.com/?size=80&id=Eidz314LhGsr&format=png" alt="" className='imgsty' />
      </section>
      <ul id='wishlist'>
        {data.map(item=>(
        <li className='wishitem'> 
          <img src={item.imgsrc} className='wishimg'/>
          <span className='itemname'>{item.item}</span>
          <img src ="https://img.icons8.com/?size=80&id=fP1wKLeDNr9s&format=png"className='add'></img>
          <img src="https://img.icons8.com/?size=48&id=isPYXsxrQrzW&format=png"className='delete' onClick={() => wishdeletefn(generateItemKey(item.itemType))}></img>
        </li>
        ))}
      </ul>
      {/* <ul>
        {data.map(item => (
          <li key={item._id} className='wish-sty'>
            <img src={item.src} className=''></img>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default Account
