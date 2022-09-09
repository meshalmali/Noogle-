import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useDataLayerValue } from "../context/DataLayer";

function Search({ hideButtons = false }) {
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();
  const [{ term }, dispatch] = useDataLayerValue();

  const handleKeyPress = (e) => {
    // console.log("You hit enter");
    if (e.key === "Enter") {
      search("home");
    }
  };

  const search = (flow) => {
    // console.log("You hit search button and input is", input);

    dispatch({
      type: "SET_SEARCH_TERM",
      term: inputValue,
    });

    if (flow === "home") {
      navigate("/search");
    }
  };

  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input
          onKeyDown={handleKeyPress} // For when you hit enter
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button variant="outlined" onClick={() => search("home")}>
            Noogle Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttonsHide">
          <Button variant="outlined" onClick={() => search("home")}>
            Noogle Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
