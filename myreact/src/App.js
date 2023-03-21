// Simple functional Component
// ***************************************/

// import logo from './logo.svg';
// import './App.css';
// import User from './User';
// function App() {

//   function click(){
//     alert("Hello Bolendra Moran")
//   }
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <User/>
//       <button onClick={click}>Click Me</button>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************
// Using STATE in functional Component
// ***************************************/

// import './App.css';
// import User from './User';

// import React, { useState } from 'react'

// const App = () => {

//   const [data,setData]=useState("Bolendra Moran")
//   function updateData(){
//     setData("Bolendra Moran is learning REACT")
//   }
//   return (
//     <div className='App'>
//       <h1>Hello World</h1>
//       <h2>{data}</h2>
//       <User/>
//       <button onClick={updateData}>Update Data</button>
//     </div>
//   )
// }

// export default App

// ***********************************************************************************************************************

// State in class component
// ************************* */

// import React,{ Component} from 'react';
// import './App.css';

// class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             data:'Bolendra Moran'
//         }
//     }
//     function()
//     {
//         this.setState({data:"Bolendra Moran is learning react"})
//         alert("Button is clicked")
//     }
//     render(){
//         return(
//             <div>
//                 <h1>{this.state.data}</h1>
//                 <button onClick={()=>this.function()}>Update data</button>
//             </div>
//         )
//     }
// }
// export default App;

// ***********************************************************************************************************************

// Props in State Component
// ************************* */

// import React, { useState } from "react";

// import Student from "./Student";

// function App() {
//   const [name, setName] = useState("Bolendra Moran");
//   return (
//     <div className="App">
//       <h1>Hello Bolendra Moran is learning Props in functional Component</h1>
//       <Student name={name}/>
//       <button onClick={() => setName("Bolendra the Software developer")}>
//         Update
//       </button>

//       {/* <Student name={"Bolendra Moran"} email={"bolendra10@gmail.com"}/> */}
//       {/* <Student name={"Virat Kohli"} email={"virat@gmail.com"}/>
//             <Student name={"Mahendra Singh Dhoni"} email={"Mahi@gmail.com"}/> */}
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************
// Props in Class Component
// **************************/

// import './App.css';

// import Student from './Student';

// import React from 'react';

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             name:"Bolendra Moran"
//         }
//     }
//    render()
//    {
//     return (
//         <div className='App'>
//             <h1>I am learning Props in Class Component</h1>
//             <Student name={this.state.name} email={"bolendra10@gmail.com"}></Student>
//             <button onClick={()=>this.setState({name:"Bolendra The Software Developer"})}>Update Name</button>

//         </div>
//     )
//    }
// }
// export default App;

// ***********************************************************************************************************************

// Get Input Box Value
// ********************
// import logo from './logo.svg';
// import './App.css';
// import React ,{useState} from 'react';
// function App(){
//     const[data,setData]=useState(null);
//     const[print,setPrint]=useState(false)

//     function getData(val)
//     {
//         console.warn(val.target.value)
//         setData(val.target.value)
//     }
//     return(
//         <div className="App">
//             {
//                 print?
//                 <h1>{data}</h1>
//                 :null
//             }
//             <input type="text" onChange={getData}/>
//             <button onClick={()=>setPrint(true)}>Print Data</button>
//         </div>
//     )
// }

// export default App;
// ***********************************************************************************************************************

// Hide + Show + Toggle in Reactjs
// *******************************

// import './App.css';
// import React from 'react';
// function App(){
// const [status,setStatus]=React.useState(true)
//     return(
//         <div className='App'>
//             {
//                 status? <h1>Hello World</h1>:null
//             }
//             {/* <button onClick={()=>setStatus(false)}>Hide</button>
//             <button onClick={()=>setStatus(true)}>Show</button> */}
//             <button onClick={()=>setStatus(!status)}>Toggle</button>

//         </div>
//     )
// }
// export default App;

// ***********************************************************************************************************************

//  Handle Form | checkbox | input field | select

// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react'
// function App() {
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setInterest]=useState("");
//   function getFormData(e)
//   {
//     console.warn(name,tnc,interest)
//     e.preventDefault()
//   }
//   return (
//     <div className="App">
//      <h1>Handle Form in React</h1>
//      <form onSubmit={getFormData}>
//        <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
//        <select onChange={(e)=>setInterest(e.target.value)}>
//          <option>Select Options</option>
//          <option>Marvel</option>
//          <option>DC</option>
//        </select> <br /><br />
//        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
//        <br /><br />
//        <button type="submit">Submit</button>
//        <button>Clear</button>

//      </form>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// Conditional rendering | If Condition

// import React from "react";

// import Profile from "./Profile";

// function App() {
//   return (
//     <div className="App">
//       <Profile />
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// Basic Form Validation

// import logo from './logo.svg';
// import './App.css';
// import Login from './Login';
// function App(){
//     const data=true;
//     return(
//         <div className='App'>
//             <Login/>
//         </div>
//     )
// }
// export default App;

// ***********************************************************************************************************************

// import React from "react";
// import './App.css';
// import User from "./User.js";

// function App(){
//     function getData(){
//         alert("Hello Component");
//     }
//     return(
//         <div className="App">
//             <User data={getData}/>
//         </div>
//     )
// }
// export default App;

// ***********************************************************************************************************************

//  Constructor life cycle method

// import logo from "./logo.svg";
// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Bolendra Moran",
//     };

//     console.warn("constructor");
//   }
//   render() {
//     console.warn("render");
//     return (
//       <div>
//         <h1>Hello World{this.state.name}</h1>
//       </div>
//     );
//   }
// }

// Here constructor method is called before the render method
// super() is called to call the parent constructor i.e., component class.
// Calling API in constructor() or componentWillMount() is not a syntax error but increases code complexity
// and hampers performance. So, to avoid unnecessary re-rendering and code complexity, it's
// better to call API after render(), i.e componentDidMount().
// export default App;

// ***********************************************************************************************************************

//  Render Life cycle method

//  Render method is applicable only for class Component and we do not make render method inside functional component
// import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import User from './User';
// function App(){
//     const [name,setName]=React.useState("Bolendra Moran")

//     return (
//         <div className='App'>
//             <h1>Render Method in REACT</h1>
//             <User/>
//         </div>
//     )
// }

// export default App;.

// ***********************************************************************************************************************

//  ComponentdidMount life cycle method

// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     console.log("Constructor is called");
//     this.state = { name: "Bolendra Moran" };
//   }

//   componentDidMount() {
//     console.log("Component did mount is called");
//   }
//   render() {
//     console.log("Render is called");
//     return (
//       <div className="App">
//         <h1>component Did Mount {this.state.name}</h1>
//         <button
//           onClick={() =>
//             this.setState({
//               name: "Bolendra Moran the software developer is learning Component did mount in react",
//             })
//           }
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// ***********************************************************************************************************************

// ComponentDidUpdate
// Below is a Class Component

// import "./App.css";
// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log("constructor");
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidUpdate(preProps, preState, snapshot) {
//     console.log("componentDidUpdate", preState.count, this.state.count);
//     if (this.state.count < 10) {
//       this.setState({ count: this.state.count + 1 });
//     }
//   }

//   render() {
//     console.log("render");
//     return (
//       <div className="App">
//         <h1>Component Did Update {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: 1 });
//           }}
//         >
//           Update
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// ***********************************************************************************************************************

// ShouldComponentUpdate Life cycle method

// import "./App.css";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate", this.state.count);
//     return true;
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>Should Component update {this.state.count}</h1>
//         <button
//           onClick={() => {
//             this.setState({ count: this.state.count + 1 });
//           }}
//         >
//           {" "}
//           Update Counter
//         </button>
//       </div>
//     );
//   }
// }

// export default App;

// ***********************************************************************************************************************

// ComponentWillUnmount Life Cycle Method

// import './App.css';
// import React from 'react';
// import Student from './Student';

// class App extends React.Component{
//     constructor()
//     {
//         super();
//         this.state={
//             show:true
//         }
//     }
//     render(){
//         return (
//             <div className='App'>
//                 {
//                     this.state.show?<Student/>
//                     :<h4>Component is removed</h4>
//                 }
//                 <button onClick={()=>this.setState({show:false})}>Toggle Student Component</button>
//             </div>
//         )
//     }
// }

// export default App;

// ***********************************************************************************************************************

// Hooks In react.js

// import './App.css';
// import React ,{useState} from "react";

// function App(){
//     const[data,setData]=useState("Bolendra")
//     return(
//         <div className='App'>
//             <h1> I am learning Hook in React.js</h1>
//             <h2>{data}</h2>
//             <button onClick={()=>setData("Bolendra Moran is a Software Developer")}>Update</button>

//         </div>
//     )
// }

// export default App;

// ***********************************************************************************************************************

// Use Effect Hook in React.js

// import './App.css';
// import  React,{useState,useEffect} from 'react'
// function App(){
//     const[count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log("useEffect is called")
//     })
//     return(
//         <div className='App'>
//             <h1>I am learning useEffect Hook in react.js {count}</h1>
//             <button onClick={()=>setCount(count+1)}>Increase Count</button>

//         </div>
//     )
// }

// export default App;

// ***********************************************************************************************************************

// useEffect with condition like componentdidmount

// import "./App.css";
// import React, { useEffect, useState } from "react";
// function App() {
//   const [data, setData] = useState(10);
//   const [count, setCount] = useState(100);

//   useEffect(() => {
//     console.log("Data is is increased");
//   }, [data]);

//   useEffect(() => {
//     console.log("count is increasd");
//   }, [count]);
//   return (
//     <div className="App">
//       <h1>Data:{data}</h1>
//       <h1>Count:{count}</h1>
//       <button onClick={() => setData(data + 1)}>Update Data</button>
//       <br></br>
//       <button onClick={() => setCount(count + 1)}>Update Count</button>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// using props

// import "./App.css";
// import React, { useEffect, useState } from "react";
// import User from "./User";
// function App() {
//   const [data, setData] = useState(10);
//   const [count, setCount] = useState(100);
//   return (
//     <div className="App">
//       <User count={count} data={data} />
//       <button onClick={() => setCount(count + 1)}>Update Counter</button>
//       <button onClick={() => setData(data + 1)}>Update Data</button>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// import "./App.css";
// import "./style.css";
// import style from "./custom.module.css";
// import React from "react";
// function App() {
//   const styleItem = { color: "Blue", backgroundColor: "black" };
//   return (
//     <div className="App">
//       <h1 className="primary">Style Type1 in REACT.JS</h1>
//       <h1 style={styleItem}>Style type 2 in REACT.JS</h1>
//       <h1 className={style.success}>Style Type 3 in REACT.JS</h1>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// Install Bootstrap and implement bootstrap

// import "./App.css";
// import React from "react";
// import { Button } from "react-bootstrap";

// function App() {
//   return (
//     <div className="App">
//       <h1>Installed Bootstrap</h1>
//       <Button onClick={() => alert("Hello")}>Click Me</Button>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// Handle Array with List

// import "./App.css";
// import React from "react";
// function App() {
//   // const students=["Bolenra","Moran","Software","Developer"]
//   // students.map((item)=>{
//   //     console.log("Detail of the person",item)
//   // })

//   const students = [
//     {
//       name: "Bolendra Moran",
//       email: "bolendra@gmail.com",
//       phone: 123456789,
//     },
//     {
//       name: "Bolendra Moran23",
//       email: "bolendra234@gmail.com",
//       phone: 123454561,
//     },
//     {
//       name: "Bolendra Moran2345",
//       email: "bolendra23456@gmail.com",
//       phone: 123478965,
//     },
//   ];
//   return (
//     <div className="App">
//       <h1> Handling Array with List</h1>
//       <table border="2">
//         <tr>
//             <td>Name</td>
//             <td>Email-ID</td>
//             <td>Contact</td>
//         </tr>

//       {
//       students.map((item) => (
//         <tr>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.phone}</td>
//         </tr>
//       ))
//       }
//       </table>

//     </div>
//   );
// }
// export default App;
// ***********************************************************************************************************************

// import './App.css';
// import React from 'react';
// import {Table} from 'react-bootstrap';
// function App(){

//   const users=[
//     {name:'Bolendra Moran',email:'bolendra102222234@gmail.com',contact:1236776456},
//     {name:'Bolendra Moran123',email:'bolendra103344@gmail.com',contact:1267673456},
//     {name:'Bolendra Moran456',email:'bolendra102324@gmail.com',contact:1265463456},
//     {name:'Bolendra Moran789',email:'bolendra101234@gmail.com',contact:1234545456},
//   ]

//   return(
//     <div className='App'>
//     <h1>List with Bootstrap Table</h1>
//     <Table striped variant='dark'>
//       <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Contact</td>
//         </tr>
//         {
//           users.map((item,i)=>
//           // item.contact==='123456789'?
//           <tr key={i}>
//             <td>{item.name}</td>
//             <td>{item.email}</td>
//             <td>{item.contact}</td>
//           </tr>
//           //:null
//           )
//         }
//       </tbody>
//     </Table>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// Nested list with nested Array

// import "./App.css";
// import React from "react";
// import { Table } from "react-bootstrap";
// function App() {
//   const users = [
//     {
//       name: "Bolendra1",
//       email: "bolendra10@gmail.com",
//       address: [
//         { hm: "123", city: "Noida", country: "India" },
//         { hm: "456", city: "Gurgaon", country: "India" },
//         { hm: "789", city: "Noida", country: "India" },
//         { hm: "101", city: "Delhi", country: "India" },
//       ],
//     },
//     {
//       name: "Burcewayne",
//       email: "bruce@test.com",
//       address: [
//         { hm: "101", city: "Noida", country: "India" },
//         { hm: "10", city: "Gurgaon", country: "India" },
//         { hm: "23", city: "Noida", country: "India" },
//         { hm: "45", city: "Delhi", country: "India" },
//       ],
//     },
//     {
//       name: "Peter",
//       email: "peter@test.com",
//       address: [
//         { hm: "101", city: "Noida", country: "India" },
//         { hm: "10", city: "Gurgaon", country: "India" },
//         { hm: "23", city: "Noida", country: "India" },
//         { hm: "45", city: "Delhi", country: "India" },
//       ],
//     },
//     {
//       name: "Sam",
//       email: "sam@test.com",
//       address: [
//         { hm: "101", city: "Noida", country: "India" },
//         { hm: "10", city: "Gurgaon", country: "India" },
//         { hm: "23", city: "Noida", country: "India" },
//         { hm: "45", city: "Delhi", country: "India" },
//       ],
//     },
//   ];
//   return (
//     <div className="App">
//       <h1>List with Nested Array</h1>
//       <Table variant="dark">
//         <tbody>
//           <tr>
//             <td>S.N</td>
//             <td>Name</td>
//             <td>Email</td>
//             <td>Address</td>
//           </tr>
//           {users.map((item, i) =>
//             <tr key={i}>
//               <td>{i + 1}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>
//                 <Table variant="dark">
//                   <tbody>
//                     {
//                       item.address.map((data)=>
//                       <tr>
//                         <td>{data.hm}</td>
//                         <td>{data.city}</td>
//                         <td>{data.country}</td>
//                       </tr>
//                       )
//                     }
//                   </tbody>
//                 </Table>
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default App;

// ***********************************************************************************************************************

// Reuse Component in loop

// import './App.css';
// import User from './User';
// import React from 'react';
// function App(){
//   const users=[
//     {name:'Bolendra Moran',email:'bolendra10@gmail.com',contact:"123456"},
//     {name:'Bolendra Moran123',email:'bolendra10212@gmail.com',contact:"12332356"},
//     {name:'Bolendra 23',email:'bolen@gmail.com',contact:"332356"},
//   ]
//   return (
//     <div className='App'>
//       <h1>Reuse Component with List</h1>
//       {
//         users.map((item,i)=>
//         <User data={item}/>
//         )
//       }
//     </div>
//   )
// }
// export default App;
// ***********************************************************************************************************************

// React Fragment

// import './App.css';
// import React from 'react';
// import Cols from './cols';
// function App(){
//     return(
//         <>
//         <h1>REACT FRAGMENT</h1>
//         <table>
//             <tbody>
//                 <tr>
//                     <Cols/>
//                     <Cols/>
//                     <Cols/>
//                 </tr>
//             </tbody>
//         </table>

//         </>
//     );
// }

// export default App;
// ***********************************************************************************************************************

// Send Data from Child component to Parent Component

// here user.js is the child component and app.js is the parent component

// import React from 'react';
// import './App.css';
// import User from './User';
// function App(){
//     function getName(name)
//     {
//         alert(name)
//     }
//     return(
//         <div className='App'>
//             <h1>Lifting State UPI</h1>
//             <User getData={getName}/>

//         </div>
//     )
// }

// export default App;

// ***********************************************************************************************************************

// import "./App.css";
// import React from "react";
// import Counter from "./Counter";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 1,
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <Counter count={this.state.count}>
//           <button
//             onClick={() => {
//               this.setState({ count: this.state.count + 1 });
//             }}
//           >
//             Update Count
//           </button>
//         </Counter>
//       </div>
//     );
//   }
// }
// export default App;

// ***********************************************************************************************************************

// Use Memo Hook in react.js
// import './App.css';
// import React,{useState} from 'react'
// function App(){
//     const [count,setCount]=useState(1)
//     const [item,setItem]=useState(20)

//     const newApple=React.useMemo(

//         function appleTime(){
//             console.log("Hello")
//             return 100*count
//         },[item]
//     )

//     return(
//         <div className='App'>
//             <h1>hooks in React {count}</h1>
//             {newApple}
//             <button onClick={()=> setCount(count+1)}>Update State</button>
//             <button onClick={()=>setItem(item+1)}>update Item</button>
//         </div>
//     )
// }

// export default App;

// ***********************************************************************************************************************

//  Ref in React.js

// import './App.css';
// import React,{createRef} from 'react';
// class App extends React.Component{

//     constructor(){

//         super();
//         this.inputRef=createRef();
//     }

//     getVal(){
//         console.log(this.inputRef.current.value)
//         this.inputRef.current.style.color="red"
//         this.inputRef.current.style.backgroundColor="black"
//     }
//     render(){
//         return (
//             <div className='App'>
//                 <h1>Ref in react</h1>
//                 <input type="text" ref={this.inputRef}/>
//                 <button onClick={()=>this.getVal()}>Check Ref</button>
//             </div>
//         )
//     }

// }
// export default App;

// ***********************************************************************************************************************

// useRef in React.js

// import './App.css';
// import React ,{useRef} from 'react'

// function App(){

//     let inputRef=useRef(null);
//     function controlInput(){
//         inputRef.current.value="abc"
//         inputRef.current.style.display="none"
//         inputRef.current.focus()
//     }

//     return(
//         <div className='App'>
//             <h1>useRef in React</h1>
//             <input type="text" ref={inputRef}/>
//             <button onClick={controlInput}>Handle Input</button>
//         </div>
//     );
// }

// export default App;
// ***********************************************************************************************************************

// ForwardRef

// import './App.css';
// import React,{useRef} from 'react';
// import User from './User';
// function App(){

//     let inputRef=useRef(null)
//     function updateInput()
//     {

//         inputRef.current.value="1000";
//         inputRef.current.style.color="red"
//         inputRef.current.focus()
//     }
//     return (
//         <div className='App'>
//             <h1>ForwardRef in React</h1>
//             <User ref={inputRef}/>
//             <button onClick={updateInput}>Update Input Box</button>
//         </div>
//     );
// }

// export default App;

// ***********************************************************************************************************************

// Controlled Component in react

// import './App.css';
// import React,{useState} from 'react';
// function App(){

//     const [val,setVal]=useState("")
//     console.log(val)
//     return (
//         <div className='App'>
//             <h1>Controlled Component</h1>
//             <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
//             <h1>{val}</h1>
//         </div>

//     )
// }

// export default App;
// ***********************************************************************************************************************

// Uncontrolled Component

// import './App.css';
// import React,{useRef} from 'react'
// function App(){
//     let inputRef=useRef(null);
//     let inputRef2=useRef(null);

//     function submitForm(e){
//         e.preventDefault()
//         console.log("input field 1 value :", inputRef.current.value)
//         console.log("input field 2 value :", inputRef2.current.value)
//         let input3=document.getElementById('input3').value
//         console.log("input field 3 value : ",input3)
//     }
//     return(
//         <div className='App'>
//             <h1>UnConrolled Component</h1>
//             <form onSubmit={submitForm}>
//                 <input ref={inputRef} type="text"/><br></br>
//                 <input ref={inputRef2} type="text"/><br></br>
//                 <input id="input3" type="text"/><br></br>
//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }
// export default App;
// ***********************************************************************************************************************

// Simple HOC

// import './App.css';
// import React, { useRef, useState } from 'react'
// function App() {
//   return (
//     <div className="App">
//       <h1>HOC </h1>
//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />
//       <HOCBlue cmp={Counter} />

//     </div>
//   );
// }
// function HOCRed(props)
// {
//   return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
// }
// function HOCGreen(props)
// {
//   return <h2 style={{backgroundColor:'green',width:100}}>Grren<props.cmp /></h2>
// }
// function HOCBlue(props)
// {
//   return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
// }
// function Counter()
// {
//   const [count,setCount]=useState(0)
//   return<div>
//     <h3>{count}</h3>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//   </div>
// }

// export default App;

// ***********************************************************************************************************************
// ***************************************React-Router V6 Tutorial********************************************************

// React Router v6 tutorial in Hindi 1# getting started

// https://reactrouter.com/en/main/start/tutorial

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";

// import Home from "./component/Home";
// import About from "./component/About";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

// ***********************************************************************************************************************

//  React Router v6 tutorial in Hindi #2 Links, NaBar, anchor Tag

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import "./App.css";

// import Home from "./component/Home";
// import About from "./component/About";
// import Navbar from "./component/Navbar";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

// Note:- Do not put <Navbar/> above <BrowserRouter> Because whatever work we want to do related to reactRoute
// that shoul be done inside BrowserRouter and not outside BrowserRouter

// ***********************************************************************************************************************

// React Router v6 404 Page Not Found and Redirect

// import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

// import "./App.css";

// import Home from "./component/Home";
// import About from "./component/About";
// import Navbar from "./component/Navbar";
// import Page404 from "./component/Page 404";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/*" element={<h1>404 Page not Found</h1>}/> */}
//           {/* <Route path="/*" element={<Page404 />} /> */}

//           {/* For redirect to different page use below line of code */}

//           <Route path="/*" element={<Navigate to="/"/>}/>
//         {/* Above line 1202 means that the moment we click wrong link it will re-direct to Home Page */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

// ***********************************************************************************************************************

// React Router v6 tutorial in Hindi #4 dynamic Routing with params

// import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

// import "./App.css";

// import Home from "./component/Home";
// import About from "./component/About";
// import Navbar from "./component/Navbar";
// import Page404 from "./component/Page 404";
// import User from "./component/User";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/*" element={<h1>404 Page not Found</h1>}/> */}
//           {/* <Route path="/*" element={<Page404 />} /> */}
//           {/* For redirect to different page use below line of code */}
//           <Route path="/*" element={<Navigate to="/"/>}/>
//         {/* Above line 1235 means that the moment we click wrong link it will re-direct to Home Page */}
//         <Route path="/user/:name" element={<User/>}/>
//         {/*In line no.1237 we have implemented the params by using ":name" */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

// ***********************************************************************************************************************

// // React Router v6 Link and Nav Link style
// import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

// import "./App.css";
// import Home from "./component/Home";
// import About from "./component/About";
// import Navbar from "./component/Navbar";
// import Page404 from "./component/Page 404";
// import User from "./component/User";
// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           {/* <Route path="/*" element={<h1>404 Page not Found</h1>}/> */}
//           {/* <Route path="/*" element={<Page404 />} /> */}
//           {/* For redirect to different page use below line of code */}
//           <Route path="/*" element={<Navigate to="/"/>}/>
//         {/* Above line 1235 means that the moment we click wrong link it will re-direct to Home Page */}
//         <Route path="/user/:name" element={<User/>}/>
//         {/*In line no.1237 we have implemented the params by using ":name" */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
// export default App;

// ***********************************************************************************************************************

// Active link in navbar

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Navbar from "./component/Navbar";
// import Page404 from "./component/Page 404";
import User from "./component/User";
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Channel from "./component/Channel";
import Login from "./component/Login";
import Protected from "./component/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Protected Component ={Home} />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />}/>
          {/* <Route path="/*" element={<h1>404 Page not Found</h1>}/> */}
          {/* <Route path="/*" element={<Page404 />} /> */}
          {/* For redirect to different page use below line of code */}
          <Route path="/*" element={<Navigate to="/" />} />
          {/* Above line 1304 means that the moment we click wrong link it will re-direct to Home Page */}
          <Route path="/user/:name" element={<User />} />
          {/*In line no.1306 we have implemented the params by using ":name" */}
          <Route path="/filter" element={<Protected Component ={Filter} />} />
          <Route path="/contact" element={<Protected Component ={Contact} />}/>
    
          <Route path="/channel" element={<Channel />}>
          {/* <Route path="/contact" element={<Contact/>} /> */}

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
