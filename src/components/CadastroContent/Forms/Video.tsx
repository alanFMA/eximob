/* eslint-disable */
import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

interface YouTubeVideoProps {
  videoId: string;
}

const Container = styled.div`
  position: relative;
  width: 40%;
  height: 0;
  padding-bottom: 56.25%; /* Proporção de aspecto 16:9 (altura / largura) */
  overflow: hidden;
  margin: 0 5px;

  @media screen and (max-width: 901px) {
    width: 90%;
    padding-bottom: 260px;
  }
`;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {
  const opts = {
    width: '100%',
    height: '270px',
    playerVars: {
      autoplay: 1,
      rel: 0,
    },
  };

  return (
    <Container>
      <VideoWrapper>
        <YouTube videoId={videoId} opts={opts} />
      </VideoWrapper>
    </Container>
  );
};

export default YouTubeVideo;
