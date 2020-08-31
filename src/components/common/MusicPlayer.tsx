import React from 'react';
import YouTube from 'react-youtube';

function MusicPlayer({
	videoId,
}: {
	videoId: string;
}) {
	return (
		<YouTube
			videoId={ videoId }
			containerClassName="player-container"
			opts={ {
				width: '100%',
				height: '100%',
				playerVars: {
					controls: 0,
					showinfo: 0,
					playsinline: 1,
					autoplay: 1,
				},
			} }
		/>
	);
}

export default MusicPlayer;
