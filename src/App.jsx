import React from 'react';

// component import
import DisplayBannerLeft from './containers/ApolloLayout/DisplayBannerLeft';
import DisplayBannerRight from './containers/ApolloLayout/DisplayBannerRight';

function App() {
  return (
    <div className="app-container">
      <DisplayBannerLeft />
      <DisplayBannerRight />
    </div>
  );
}

export default App;
