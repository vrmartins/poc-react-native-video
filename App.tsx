import React from 'react';
import {VideoProvider} from './VideoContext';
import VideoManager from './VideoManager';
import VideoSwitcher from './VideoSwitcher';

const App: React.FC = () => {
  return (
    <VideoProvider>
      <VideoManager />
      <VideoSwitcher />
    </VideoProvider>
  );
};

export default App;
