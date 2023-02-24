import React from "react";
import { useState } from "react";
const Profile = () => {
  const [loggedIn, setloggedIn] = useState(true);

  return (
    <div>
        {loggedIn? <h1>Welcome Bolendra</h1> :<h1>Welcome Guest</h1>}
    </div>
  );
};

export default Profile;
