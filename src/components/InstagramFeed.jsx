import React, { useEffect } from 'react';

import '../pages/HomePage.css';

const InstagramFeed = () => {
  useEffect(() => {
    // Dynamically load the LightWidget script
    const script = document.createElement('script');
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="instagram-feed-container">
      <div className="instagram-feed-overlay"></div>
      <iframe
        src="//lightwidget.com/widgets/f41a0773fb8759ad882ac9141b80e294.html"
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{width: '100%', border: 0, overflow: 'hidden'}}
      ></iframe>
    </div>
  );
};

export default InstagramFeed;
