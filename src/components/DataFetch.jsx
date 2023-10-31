import React, { useState, useEffect } from 'react';
import Display from "./Display";
import axios from "axios";


function DataFetch() {
  const [users, setUsers] = useState([]);
  

  useEffect(() => {
        
    axios.get("https://dummyjson.com/users").then((response) => {
       setUsers(response.data.users) ;
       
  }); } ,  []);

  return (
    <div className='App'>
      <h1>Dummy Data</h1>
      <Display data={users} />
    </div>
  );
}

export default DataFetch;
