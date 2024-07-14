import React, { useState,useEffect } from 'react'
import './form.css'

const FormReg = () => {
    const [currentState,setCurrentState]=useState("normal");
    const [pageState,setPageState]=useState(false);
    const [data,setData]=useState({
        name:"",
        email:"",
        age:"",
        guest:""
      })
      const onChangeHandler =(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData(data=>({...data,[name]:value}))
      }
      const onsubmit =async (event)=>{
        event.preventDefault()
       if(data.age>0){
        alert(`Name :${data.name} `);
        setPageState(true);
       }else{
        alert("Inavalid data")
       }
      
        
       }

       if(pageState){
        return(
          <div className='summery-box'>
          <div className="login-popup-title">
                <h2>Summary </h2>
                
            </div>
            <div className="login-popup-input">
                <div  className='summery'><span>Name :</span> {data.name}</div>
                <div className='summery'><span>Email :</span> {data.email}</div>
                <div className='summery'><span>Age :</span> {data.age}</div>
                {currentState==="normal"?<></>: <div className='summery'><span>Guest Name :</span> {data.guest}</div>}
            </div>
            <div className="thanks">
              <p>Thank you for visiting on that page</p>
            </div>
             
             
        </div>
        )
      }

  
  return (
    
        <div className='login-popup'>
        {<form action=""onSubmit={onsubmit} className="login-popup-container">

            <div className="login-popup-title">
                <h2>Registration </h2>
                
            </div>
            <div className="login-popup-input">
                <input type="text" placeholder='Name' name='name'  value={data.name} onChange={onChangeHandler} required />
                
                <input type="email" placeholder='emali' name='email' value={data.email} onChange={onChangeHandler} required />
                <input type="number" placeholder='Age'name='age' min="1" max="100"value={data.age} onChange={onChangeHandler} required />
                {currentState==="normal"?<></>:<input type="text" placeholder='Guest Name' name='guest'value={data.guest} onChange={onChangeHandler}  required />}
            </div>
            <button type='submit'>submit</button>
             <div className="login-popup-condition">
                <input type="checkbox" onClick={()=>currentState==="normal"?setCurrentState("guest"):setCurrentState("normal")} />
                <p className='para'>Are you attending with a guest?</p>
             </div>
             
             
             
        </form>}


        
      
    </div>
      
    
  )
}

export default FormReg
