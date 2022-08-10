import React, { useRef }   from "react";
import './App.css'
import { useState } from 'react';
const App = () =>{
const inputRef = useRef();
const[show, setshow] = useState([]);
// const[valid, setvalid] = useState();




const userData = async () => {
   const response =  await fetch(`https://fakestoreapi.com/products?limit=${inputRef.current.value}`);
   setshow(await response.json());
   inputRef.current.value="";
   
   if(inputRef.current.value="."){
    alert("Invalid value");
  }
 
  

}





  return(
    <>
    <center><input type="number" ref={inputRef}  style={{padding: '9px 0px'}}/>
    <button style={{width:'200px',}} onClick={userData}>Show Data</button>   
    
    </center>
    
   
<div className="row">
{show.map((value)=>{
  return(
    <div style={{display:'flex', flexWrap:'wrap'}} key={value.id}>
<div className="card" >
        <img src={value.image} alt="phot" style={{width:'100%',}}/>
        <h4>{value.title}</h4>
        <p className="title">{value.price}</p>
        <p>{value.description}</p>
        <button>Buy Now</button>
              </div>
    </div>
   

  )
})

}
  
</div>
    </>
  )
};

export default App;