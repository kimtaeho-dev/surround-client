import React, {
  useCallback,
  useState,
} from 'react';
import YouTube, { Options } from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
  width: 232px;
  height: 232px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const YoutubePlayerOptions: Options = {
  width: '100%',
  height: '100%',
  playerVars: {
    rel: 0,
    controls: 0,
    showinfo: 0,
    playsinline: 1,
    autoplay: 1,
    modestbranding: 1,
    disablekb: 1,
    mute: 0,
  },
};

interface PlayerMethods {
  getCurrentTime(): number;
  getDuration(): number;
  getPlayerState(): number;
  playVideo: () => void;
}

interface Player {
  data: number;
  target: PlayerMethods; // YT
}

enum PlayerState {
  ENDED = 0,
  PLAYING = 1,
  PAUSED = 2,
  BUFFERING = 3,
  CUED = 5,
}

function MusicPlayer({
  videoId,
}: {
  videoId: string;
}) {
  const [playerId, setPlayerId] = useState<number>(0);

  const updatePlayerCurrentTime = useCallback((player: PlayerMethods) => {
    if (player.getPlayerState() === PlayerState.PLAYING) {
      const currentPlayerId = window.setInterval(() => {
        console.log(player.getCurrentTime());
      }, 500);
      setPlayerId(currentPlayerId);
    } else {
      clearInterval(playerId);
    }
  }, [playerId]);

  const onStateChange = useCallback((player: Player) => {
    updatePlayerCurrentTime(player.target);
  }, [updatePlayerCurrentTime]);

  const handlePause = useCallback((event: Player) => {
    event.target.playVideo();
  }, []);

  return (
    <Container>
      <Wrapper>
        <YouTube
          videoId={videoId}
          containerClassName="player-container"
          opts={YoutubePlayerOptions}
          onStateChange={onStateChange}
          onPause={handlePause}
        />
      </Wrapper>
    </Container>
  );
}

export default MusicPlayer;
