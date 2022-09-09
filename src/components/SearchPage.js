import React from "react";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../context/DataLayer";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Search from "./Search";
import "./SearchPage.css";
import useGoogleSearch from "../context/useGoogleSearch";
import response from "../context/response";

function SearchPage() {
  const [{ term }, dispatch] = useDataLayerValue();
  const { data } = useGoogleSearch(term);
  // const data = response;
  console.log("I am your search results", data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAA1VBMVEX///8Alv//+wD/JgAAj/8A+QD/AAAAlP8fn//k/uRg+mAAkv/R6f/4/f8Ajv94vv//GgD/v7jp9f//rKT/7er//tT//tj///X/pp1Qrf+43P//k4j/j4T//+j//bOKxf//x8H/oJb/uLGh0f///FtAqP+WzP//NxzB4f//19LZ7f///t7//Zr/XUv/+zf/Szb//an//sD/6OUAnP9W+lZktv///Y///IT/+0v/cWL/aVn/9fP/4Nz/PCP/f3L/0Mv//HT//HX/hXj//Gf/Uz8u+S5w+3AhEFCNAAAEvUlEQVR4nO3Ze1faSBgG8AnESbopIQTkqlzLTW29sNAioq1u9/t/pH3fmUwunj1HW6qgPL/+0SSGOZmHzMybIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALxDM8/x3NR+0Xb8jxu1+OHg4ODvzS5qK1zHsuxRsl/0LHvzJP7a8Kq2wbWIHcb7RWevk3Aa8f6eJ2H5TbO/30nQVGEVov29TsKdO5ZXjPb3OolZwaPxEXU/ncS03DrqdbPnH7cXXxft48yxsNnpDE6EKJBHSXR7R61+5eUu/w/i0SEGtuVERUWSRH8sAyKDVnJ29VtO+5RkETZ82/M8f1gY2p5fSCfRktyElMvVa3VnAyoJMXRMUREncS3zETm+ik6+yCXa0bGJ7ahJ13Jm1JadSqIyNk0EcvrqHftldPWOECe+KSpMEp8DzoDQ/0Gg7+90ELnchTo2oU9ank3/VBypJFZ5/ig3wS3dbKuDz6aT4NJSFxVREj26/GDdv7m6u1Vb/KdTFcDi8Lh6praqdCz0eOkZhIVw4DjZJDhLeTtdVUrrIB+Mt9jH54mSEKao0EmsuPtLfcYdbcs6bag5Qs8PtS+0+YU25pSgq1fgMHtPdPljXd3EedTCTjNJ8F3uFEwSdZkPzs0pJb69adXgIE6jYzXeORQFmwI0pTo3kSRxHeRlWR2vtMZ51cJuM0mIBhUVc5ME3dnyLj7nPOBxzrPE9/gYD5CFaNKiU0y3lSQRRJ3vflZTTTLt7qo4iVAXFToJnuOSc3qURF98pb5fxseqvJSKET25xoW6eo41SVxJHl6VXp5zkDRfvFqPflecBBcV1kx01FN5kLmb+9SruniIJkmtpiaK7DP8KJXElD5zvdS3w7r+RuqJKAldVIyemcSxSoJzm8THOtkkaPXlHJbJMNtpqSS4qHDmanTQFCeT7/GIRkdJjY52fOyQ9h74PvI68TGO0iRRkaqiGr+J20FJJcH3Oj+XUhJLNTMYPGtcibaaGYwftHcmwmjFUU7s9IzJQVy/kdtBSSchdNlMSfT5GzXfJt0SvKSqhdNMmYdRbUG3QfyaR70IjJO4D+KKRIjy/ev0ZhOZJFTprOZA/kbXusbumRLpRxKFCuJB6BHlDXnS/Ohma0weHvJWt1uWwXjnF49MElxU6CS4QgzkfalbX8flpropct8uLi8+qa0aHxzw+LAt19IPYqlqWxXs+Va/VD9XW1vp3i/IJsFFhV4Xe3rG42UwLjermSewaB0Z+ZYxyz6LLk0T6iFu1wsrGtxOKgn1FeuXNnUVgupLPNzTUZi6W0xmvkeN2NZJw8kkIVqmibxc7/7bmqHrpn/4EQ3Xnela6WYplX+6yV9riyiHs/RnJp1Go9jU1Ta/s/r581+RaWJcftlOvLxpqd99/GWeXrYvT//3bLX0PDq04iZ2fmD8Gc34txKqJ1I/nOybkWP75rdEfpodbPVqtolnWFvV24WiLjH3VoPWXc+aFxsOP9WPnv7A+zW0+b22fok53/bFbFeRygkOw/M7T5/8voWdIT3CDkfh06cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCO+w/szE5ae0E3OAAAAABJRU5ErkJggg=="
          />
        </Link>
        <div className="searchPage_headerbody">
          <Search hideButtons />

          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <SmartDisplayIcon />
                <Link to="/videos">Videos</Link>
              </div>
              <div className="searchPage_option">
                <LocationOnIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage_optionsRight">
              <div className="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultsCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.searchTime} seconds)
          </p>
          {data?.items?.map((item) => (
            <div key={item.title} className="result">
              <a className="result_link" href={item.link}>
                {item.link}
              </a>
              <a className="result_title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="result_snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
