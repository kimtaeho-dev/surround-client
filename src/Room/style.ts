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

export {
  // eslint-disable-next-line import/prefer-default-export
  Container,
};
