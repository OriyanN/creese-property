import React, { useState } from 'react';
import './AnimatedButton.css'; // Assuming you have converted your CSS into a CSS module

function AnimatedButton({ onSubmit }) {
  const [buttonState, setButtonState] = useState('normal');

  const handleClick = () => {
    // Dummy logic for demonstration. You should replace this with your actual form submission logic.
    const isSuccess = Math.random() > 0.5;

    if (isSuccess) {
      setButtonState('success');
      setTimeout(() => {
        setButtonState('normal');
      }, 6000);
      // Optionally call onSubmit or other success logic here
    } else {
      setButtonState('error');
      setTimeout(() => {
        setButtonState('normal');
      }, 6000);
    }
  };

  return (
    <div className="wrapper">
      <div className={`block ${buttonState}`}>
        <button className={`button ${buttonState}`} onClick={handleClick}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AnimatedButton;
