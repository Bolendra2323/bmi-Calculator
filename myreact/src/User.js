// Below is a functional Component

// import React from 'react'

// const User = () => {
//   return (
//     <h1>Hello I am writing User component in functional component</h1>
//   )
// }

// export default User

// ***************************************************************************************************************************

// Below is a class Component

// In a class component never forget to write render ,
// import React, { Component } from "react";

// export default class User extends Component {
//   render() {
//     return <h1> Hello User I am using class component</h1>;
//   }
// }

// ***************************************************************************************************************************

// Here below functional Component is the child component

import React from "react";

function User(props){
    return(
        <div>
            <h1>Hello User I am learning pass function as Props</h1>
            <button onClick={props.data}>Click Me</button>
        </div>
    )
}

export default User;