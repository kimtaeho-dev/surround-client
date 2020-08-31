import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 48px;
`;

const PlayerContainer = styled.div`
    position: relative;
    flex: 1;
    width: auto;
    padding-bottom: 100%;
`;

export {
	Container,
	PlayerContainer,
};
