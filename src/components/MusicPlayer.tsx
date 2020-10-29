import React, {
  useCallback,
  useState,
} from 'react';
import YouTube, { Options } from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100%;
  height: auto;
`;

const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: calc(9 / 16 * 100%);

  /* :hover ::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      background: linear-gradient(
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 0) 100%);
  } */
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
    mute: 1,
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
      const currentPlayerId = setInterval(() => {
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
      <PlayerContainer>
        <YouTube
          videoId={videoId}
          containerClassName="player-container"
          opts={YoutubePlayerOptions}
          onStateChange={onStateChange}
          onPause={handlePause}
        />
      </PlayerContainer>
    </Container>
  );
}

export default MusicPlayer;
