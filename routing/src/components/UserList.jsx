import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserList = () => {

  const [user, setData] = useState([]);
  const navigate = useNavigate();
  

  async function getData() {
    
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    setData(data.users);

  }


  useEffect(() => {
    
    getData();
  }, [])
  

  const fetchUserData = (id) => {
    navigate(`./user/${id}`);


  }

  return (
    <>
      <h1>User Information</h1>
      <div className='container'>
        {user.map((value) => (
          <div  className='cards' key={value.id}   onClick={()=>fetchUserData(value.id)}>
            <img src={value.image} alt="images"/>
            <p><b>First Name : </b>{value.firstName}</p>
            <p><b>Last Name : </b>{value.lastName}</p>
          </div>

        ))}
      </div>
    </>
  )
}

export default UserList