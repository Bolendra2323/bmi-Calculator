import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <h1>OOP's 404 Page Not found</h1>
      <p>This is not the correct Page. Instead Go to below Link</p>
      <Link to="/" >Go to Home page</Link>
    </div>
  );
}

export default Page404;
