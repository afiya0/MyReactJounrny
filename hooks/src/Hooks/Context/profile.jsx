import React, { useContext } from "react";
import UserContext from "./userContext";

const Profile = () => {
  const user = useContext(UserContext);

  return <h1>Profile: {user}</h1>;
};

export default Profile;