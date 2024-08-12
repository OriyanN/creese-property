import React from 'react';
import './Loader.css';

const Loader = () => (
    <div className="loader">
      <svg
        className="spinner"
        width="50px"
        height="50px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#294162"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
          transform="rotate(0,25,25)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );  

export default Loader;