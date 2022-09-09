import React, { useState, useEffect } from "react";

import API_KEY from "./key";
const CX = "84e7afde7cd754265";

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => setData(result));
    };

    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
