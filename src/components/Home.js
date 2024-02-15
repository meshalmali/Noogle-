import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Home.css";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft gap-5 flex">
          <Link to="/">About</Link>
          <Link to="/">Store</Link>
        </div>
        <div className="home_headerRight flex gap-5">
          <Link to="/">Email</Link>
          <Link to="/">Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>
      <div className="home_body">
        {/* <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" /> */}
        <img src="https://i.redd.it/s2wq8lpw1iz61.png" className="p-8 md:p-0" />
        <div className="home_inputContainer">
          <Search flow="home" />
        </div>
      </div>
    </div>
  );
}

export default Home;
