import React from 'react';

import imgBg from "/assets/Creese-Property-Home-Image.png";

const FallbackPage = () => {
  return (
    <div>
      <img src={imgBg} alt="Loading Page..." height={'100%'} width={'100%'} />
    </div>
  );
};

export default FallbackPage;