import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";
import { useDataLayerValue } from "../context/DataLayer";

function Search({ hideButtons = false, flow }) {
  const [inputValue, setInputValue] = useState("");
  let navigate = useNavigate();
  const [, dispatch] = useDataLayerValue();

  const handleKeyPress = (e) => {
    // console.log("You hit enter");
    if (e.key === "Enter") {
      search();
    }
  };

  const search = () => {
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
    <div className="search">
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
          <Button variant="outlined" onClick={search}>
            Noogle Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
