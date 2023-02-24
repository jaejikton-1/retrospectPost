import React from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../fbase";

const Profile = () => {
  const onLogOutClick = () => {
    authService.signOut();
    history("/");
  };
  const history = useNavigate();
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
