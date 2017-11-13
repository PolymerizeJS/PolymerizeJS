import React from 'react';
import BannerContentLeft from './BannerContentLeft/BannerContentLeft';
import BannerContentRight from './BannerContentRight/BannerContentRight';

function App() {
  return (
    <div className="app-container">
      <BannerContentLeft />
      <BannerContentRight />
    </div>
  );
}

export default App;
