import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams(); 
  const [Userdetails, setUserdetails] = useState([]); 

  async function getUserInfo() {
    const res = await fetch(`https://dummyjson.com/users/${id}`);
    const data = await res.json();
    setUserdetails(data);
  }

  useEffect(() => {
    getUserInfo(); 
  }, [id]);


  return (
    <>
      <h1>{Userdetails.firstName} Details</h1>
      <div className='detail-container'>
    <div className='details'>
      <p><b>First Name:</b> {Userdetails.firstName}</p>
      <p><b>Last Name:</b> {Userdetails.lastName}</p>
      <p><b>Gender:</b> {Userdetails.gender}</p>
      <p><b>Birth Date:</b> {Userdetails.birthDate}</p>
      <p><b>Age:</b> {Userdetails.age}</p>
      <p><b>Email:</b> {Userdetails.email}</p>
      <p><b>Phone:</b> {Userdetails.phone}</p>
        </div>
        </div>
    </>
  );
};

export default UserDetail;
