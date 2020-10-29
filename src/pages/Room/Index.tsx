import React, { useState } from 'react';
import AppBar from 'src/components/AppBar';
import MusicPlayer from 'src/components/MusicPlayer';
import PlayList from 'src/components/PlayList';

import {
  ChatWrapper,
  Container,
  PlayerWrapper,
} from './Styles';

function Room() {
  const [videoId, setVideoId] = useState('');

  return (
    <Container>

      <AppBar />

      <PlayerWrapper>
        <MusicPlayer videoId={videoId} />
        <PlayList />
      </PlayerWrapper>

      <ChatWrapper>
        <button
          type="button"
          onClick={() => setVideoId('6NqTV84JEB4')}
        >
          video test 1
        </button>
        <br />
        <button
          type="button"
          onClick={() => setVideoId('EEfJgTJL4Mc')}
        >
          video test 2
        </button>
      </ChatWrapper>

    </Container>
  );
}

export default Room;
