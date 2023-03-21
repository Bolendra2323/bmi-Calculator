import { Link ,useNavigate,useLocation} from "react-router-dom";

function Home() {

    const location=useLocation();
    console.log(location);
    const navigate=useNavigate();
    const navToPage=(url)=>{

        // One way to implement conditional routing

        // let x=false;
        // if(x){
        //     navigate('/about')
        // }else{
        //     navigate('/filter')
        // }

        // Another way to implement conditional routing
        navigate(url)
    }
  return (
    <div>
      <h1>Home Page .</h1>
      <p>Hello This is a Home page And you are in the home page </p>
      <Link to="/about">About Page</Link>
      <br />
      <button onClick={()=> navToPage('/about')}>Go to About Page</button>
      <br />
      <button onClick={()=> navToPage('/filter')}>Go to Filter Page</button>
    </div>
  );
}

export default Home;
