import React ,{useEffect, useState} from "react";

function Form() {
    const data={name:"",email:"",password:""};
    const [inputData,setInputData]=useState(data);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log("registered")
    },{flag})

    function handleData(e){
        setInputData({...inputData,[e.target.name]:e.target.value})
    }
    // console.log(inputData)

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name){
            alert("Name is Missing");
        }
        if(!inputData.email){
            alert("Email is Missing");
        }
        if(!inputData.password){
            alert("Password is missing");
        }
        if(inputData.name && inputData.email && inputData.password){
            setFlag(true)
        }

    }
  return (
    <>
    <pre>{(flag)?<h2 className="u;-define">Hello {inputData.name},
    You've Registered Successfully</h2>:""}</pre>
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" placeholder="Enter Your name" name="name" value={inputData.name}
         onChange={handleData}></input>
      </div>
      <div>
        <input type="text" placeholder="Enter your Email" name="email" value={inputData.email}
        onChange={handleData}>
        </input>
      </div>
      <div>
        <input type="text" placeholder="Enter your Password" name="password" value={inputData.password}
        onChange={handleData}></input>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  );
}

export default Form;
