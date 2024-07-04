//<h1>Esta es la página home</h1>

import React from "react";
import Button from "../Button";

const Home = () => {
  return (
    <div>
      
      <h1>Home Page</h1>
      <div className="Home-Icon">
      <img src='https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg' alt='Home' className='Home-Icon-pic'/>
      </div>
      <Button />
    </div>
  );
};

export default Home;
