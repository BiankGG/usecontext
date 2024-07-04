//<h1>Esta es la página profile</h1>

import React from "react";
import Button from "../Button";
import ProfileCard from '../ProfileCard'

const Profile = () => {
  return (
    <div className="profile-container" >
      <h1>My Profile Page</h1>
      < ProfileCard name='Lara' surname='griffin' address= 'c/cadiz n1' age= '38' postalCode='11520' city='cadiz' phone='610351733'  image='https://avatars.githubusercontent.com/u/7118369?v=4'/>
      <Button  />
    </div>
  );
};
export default Profile;


// name='' surname='' address= '' age= '' postalCode='' city='' phone='' image=