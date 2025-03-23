import React from "react";

function App(){
  const getUser = () => {
    fetch("/api/user")
    .then(res => res.json())
    .then(json => console.log(json))
  }

  useEffect(()=>{
    getUser();
  },[]);

  return(
    <div>
      <h1>ccue</h1>
    </div>
  );
}

export default App;