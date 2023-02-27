// Simple functional Component
//***************************************/

//import logo from './logo.svg';
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
//***************************************/

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
//************************* */

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
//************************* */

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
//**************************/

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

