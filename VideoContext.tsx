import React, {createContext, useContext, useState, ReactNode} from 'react';

type VideoContextType = {
  currentVideo: 'video1' | 'video2';
  toggleVideo: (video: 'video1' | 'video2') => void;
};

const VideoContext = createContext<VideoContextType | undefined>(undefined);

type VideoProviderProps = {
  children: ReactNode;
};

export const VideoProvider: React.FC<VideoProviderProps> = ({children}) => {
  const [currentVideo, setCurrentVideo] = useState<'video1' | 'video2'>(
    'video1',
  );

  const toggleVideo = (video: 'video1' | 'video2') => {
    setCurrentVideo(video);
  };

  return (
    <VideoContext.Provider value={{currentVideo, toggleVideo}}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
};
