// import { useSearchParams } from "react-router-dom";

// function Filter(){

//     const [searchParams,setSearchParams]=useSearchParams();
//     console.log(searchParams.get('age'))
//     console.log(searchParams.get('city'))
//     const age=searchParams.get('age')
//     const city=searchParams.get('city')
//     return (
//         <div>
//             <h1>Filter Page</h1>
//             <h3>Age is:{age}</h3>
//             <h3>City is :{city}</h3>
//         </div>
//     )
// }

// export default Filter;

import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParams,setSearchParams]=useSearchParams();
    const age=searchParams.get('age');
    const city=searchParams.get('city');

    console.log(age);

    return (
        <div>
            <h1>Filter Page</h1>
            <h3>Age is:- {age}</h3>
            <h3>City is:- {city}</h3>

            <button onClick={()=>setSearchParams({age:60})}>Set Age</button>
            <input type="text"
            onChange={(e)=>setSearchParams({text:e.target.value,age:70,city:"Tinsukia"})}
            ></input>
        </div>
    )
}

export default Filter