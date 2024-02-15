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

import useGoogleSearch from "../context/useGoogleSearch";
import response from "../context/response";

function SearchPage() {
  const [{ term }, dispatch] = useDataLayerValue();
  const { data } = useGoogleSearch(term);
  // const data = response;
  // console.log("I am your search results", data);
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="w-full px-3 py-4 lg:p-6 flex flex-col md:flex-row items-center z-30 border-b border-gray-200">
        <Link to="/">
          <img
            className="h-14 w-24 md:h-20 md:w-40"
            // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAAC+CAMAAAARDgovAAAA1VBMVEX///8Alv//+wD/JgAAj/8A+QD/AAAAlP8fn//k/uRg+mAAkv/R6f/4/f8Ajv94vv//GgD/v7jp9f//rKT/7er//tT//tj///X/pp1Qrf+43P//k4j/j4T//+j//bOKxf//x8H/oJb/uLGh0f///FtAqP+WzP//NxzB4f//19LZ7f///t7//Zr/XUv/+zf/Szb//an//sD/6OUAnP9W+lZktv///Y///IT/+0v/cWL/aVn/9fP/4Nz/PCP/f3L/0Mv//HT//HX/hXj//Gf/Uz8u+S5w+3AhEFCNAAAEvUlEQVR4nO3Ze1faSBgG8AnESbopIQTkqlzLTW29sNAioq1u9/t/pH3fmUwunj1HW6qgPL/+0SSGOZmHzMybIAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALxDM8/x3NR+0Xb8jxu1+OHg4ODvzS5qK1zHsuxRsl/0LHvzJP7a8Kq2wbWIHcb7RWevk3Aa8f6eJ2H5TbO/30nQVGEVov29TsKdO5ZXjPb3OolZwaPxEXU/ncS03DrqdbPnH7cXXxft48yxsNnpDE6EKJBHSXR7R61+5eUu/w/i0SEGtuVERUWSRH8sAyKDVnJ29VtO+5RkETZ82/M8f1gY2p5fSCfRktyElMvVa3VnAyoJMXRMUREncS3zETm+ik6+yCXa0bGJ7ahJ13Jm1JadSqIyNk0EcvrqHftldPWOECe+KSpMEp8DzoDQ/0Gg7+90ELnchTo2oU9ank3/VBypJFZ5/ig3wS3dbKuDz6aT4NJSFxVREj26/GDdv7m6u1Vb/KdTFcDi8Lh6praqdCz0eOkZhIVw4DjZJDhLeTtdVUrrIB+Mt9jH54mSEKao0EmsuPtLfcYdbcs6bag5Qs8PtS+0+YU25pSgq1fgMHtPdPljXd3EedTCTjNJ8F3uFEwSdZkPzs0pJb69adXgIE6jYzXeORQFmwI0pTo3kSRxHeRlWR2vtMZ51cJuM0mIBhUVc5ME3dnyLj7nPOBxzrPE9/gYD5CFaNKiU0y3lSQRRJ3vflZTTTLt7qo4iVAXFToJnuOSc3qURF98pb5fxseqvJSKET25xoW6eo41SVxJHl6VXp5zkDRfvFqPflecBBcV1kx01FN5kLmb+9SruniIJkmtpiaK7DP8KJXElD5zvdS3w7r+RuqJKAldVIyemcSxSoJzm8THOtkkaPXlHJbJMNtpqSS4qHDmanTQFCeT7/GIRkdJjY52fOyQ9h74PvI68TGO0iRRkaqiGr+J20FJJcH3Oj+XUhJLNTMYPGtcibaaGYwftHcmwmjFUU7s9IzJQVy/kdtBSSchdNlMSfT5GzXfJt0SvKSqhdNMmYdRbUG3QfyaR70IjJO4D+KKRIjy/ev0ZhOZJFTprOZA/kbXusbumRLpRxKFCuJB6BHlDXnS/Ohma0weHvJWt1uWwXjnF49MElxU6CS4QgzkfalbX8flpropct8uLi8+qa0aHxzw+LAt19IPYqlqWxXs+Va/VD9XW1vp3i/IJsFFhV4Xe3rG42UwLjermSewaB0Z+ZYxyz6LLk0T6iFu1wsrGtxOKgn1FeuXNnUVgupLPNzTUZi6W0xmvkeN2NZJw8kkIVqmibxc7/7bmqHrpn/4EQ3Xnela6WYplX+6yV9riyiHs/RnJp1Go9jU1Ta/s/r581+RaWJcftlOvLxpqd99/GWeXrYvT//3bLX0PDq04iZ2fmD8Gc34txKqJ1I/nOybkWP75rdEfpodbPVqtolnWFvV24WiLjH3VoPWXc+aFxsOP9WPnv7A+zW0+b22fok53/bFbFeRygkOw/M7T5/8voWdIT3CDkfh06cCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCO+w/szE5ae0E3OAAAAABJRU5ErkJggg=="
            src="https://i.redd.it/s2wq8lpw1iz61.png"
          />
        </Link>
        <div className="w-full flex flex-col">
          <Search hideButtons />

          <div className="flex items-center mt-3 justify-between md:justify-center md:gap-8">
            <div className="flex items-center text-gray-600">
              <SearchIcon />
              <Link to="/">All</Link>
            </div>
            <div className="hidden md:flex items-center text-gray-600">
              <DescriptionIcon />
              <Link to="/">News</Link>
            </div>
            <div className="flex items-center text-gray-600">
              <ImageIcon />
              <Link to="/">Images</Link>
            </div>
            <div className="flex items-center text-gray-600">
              <SmartDisplayIcon />
              <Link to="/">Videos</Link>
            </div>
            <div className="hidden md:flex items-center text-gray-600">
              <LocationOnIcon />
              <Link to="/">Maps</Link>
            </div>
            <div className="flex items-center text-gray-600">
              <MoreVertIcon />
              <Link to="/">More</Link>
            </div>
          </div>
        </div>
      </div>
      {true && (
        <div className="w-screen px-4 py-3 md:py-5 md:px-20 flex flex-col">
          <p className="text-gray-400 font-semibold text-sm md:text-md mb-2">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.searchTime} secs)
          </p>
          {data?.items?.map((item) => (
            <div key={item.title} className="mb-6">
              <a
                className="flex items-center overflow-hidden gap-2 text-xs"
                href={item.link}
              >
                {item.pagemap?.cse_image !== undefined && (
                  <div
                    className="w-8 h-8 rounded-full bg-no-repeat bg-gray-100 bg-cover bg-center flex-none"
                    style={{
                      backgroundImage: `url(${item.pagemap?.cse_image[0].src})`,
                    }}
                  ></div>
                )}
                {item.link}
              </a>
              <a
                className="font-semibold text-lg text-blue-800"
                href={item.link}
              >
                <h2>{item.title}</h2>
              </a>
              <p className="text-sm">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
