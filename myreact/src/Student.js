// Below is a functional Component

// import React from "react";

// const Student = (props) => {
//   return (
//     <div style={{backgroundColor:"navyblue" ,margin:10}}>
//       <h1>{props.name}</h1>
//       <h2>{props.email}</h2>
//     </div>
//   );
// };

// export default Student;

//*********************************************************************************************************/

// Below is a class Component

// import React from "react";

// export default class Student extends React.Component {
//   render() {
//     return (
//       <div style={{backgroundColor:'skyblue',margin:20}}>
//         <h1>Student--{this.props.name}</h1>
//         <h1>EmailId--{this.props.email}</h1>
//       </div>
//     );
//   }
// }

//*********************************************************************************************************/

// Below code is used for componentWillUnmount life cycle method

import React from 'react'

class Student extends React.Component{

  componentWillUnmount()
  {
    alert("componentWillUnmount is called")
  }
  rener()
  {
    return <h1>Student Component</h1>
  }
}

export default Student;
