import React from "react";
export default function Logo() {
    return (
        <svg version="1.1" id="loading-avatar" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" xmlSpace="preserve">
        <g className="circle">
          <path fill="#A5A5A5" d="M256,29.245C130.771,29.245,29.245,130.754,29.245,256c0,125.225,101.526,226.755,226.755,226.755 c125.229,0,226.755-101.53,226.755-226.755C482.755,130.754,381.229,29.245,256,29.245z"></path>
        </g>
        <circle className="out" fill="none" stroke="#888888" strokeWidth="30" strokeMiterlimit="10" cx="256" cy="256" r="222.127"></circle>
        <g>
          <circle className="fill" id="avatar-fill" fill="none" stroke="#292929" strokeWidth="34" strokeMiterlimit="10" cx="256" cy="256" r="223.978"></circle>
          <circle className="fill" fill="none" stroke="#888888" strokeWidth="35" strokeMiterlimit="10" cx="256" cy="256" r="223.978"></circle>
          <circle className="fill" fill="none" stroke="#292929" strokeWidth="36" strokeMiterlimit="10" cx="256" cy="256" r="223.978"></circle>
        </g>
      </svg>
    );
  }