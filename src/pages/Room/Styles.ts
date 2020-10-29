import styled from 'styled-components';

const ContainerPadding = 48;
const ContainerTopPadding = 24;
const HeaderPadding = 84;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  max-width: 1700px;
  margin: auto;
  padding: ${ContainerPadding}px;
  padding-top: calc(${ContainerTopPadding}px + ${HeaderPadding}px);
`;

const PlayerWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
`;

const ChatWrapper = styled.div`
  flex: 1;
  width: auto;
  height: 100%;
  border-left: solid 1px white;
  margin-left: 24px;
`;

export { Container, PlayerWrapper, ChatWrapper };
