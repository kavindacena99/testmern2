import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function App(){
  const [data,setData] = useState('');

  useEffect(()=>{
    axios.get('/api/data')
    .then(response => {
      setData(response.data.message); // Set data to state
    })
    .catch(error => {
      console.error('There was an error fetching the data!', error);
    });
  },[]);

  return(
    <div>
      <h1>bn</h1>
    </div>
  );
}

export default App;