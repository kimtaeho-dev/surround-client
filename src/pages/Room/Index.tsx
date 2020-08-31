import React, { useState } from 'react';
import MusicPlayer from 'src/components/common/MusicPlayer';

import { Container, PlayerContainer } from './Styles';

function Room() {
	const [ videoId, setVideoId ] = useState('');

	return (
		<Container>
			<PlayerContainer>
				<MusicPlayer videoId={ videoId } />
			</PlayerContainer>
		</Container>
	);
}

export default Room;
