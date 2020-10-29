import React from 'react';
import styled from 'styled-components';

import PlayListItem from './PlayListItem';

const Container = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  overflow: auto;
  margin-top: 24px;
  border-top: solid 1px white;
`;

function PlayList() {
  return (
    <Container>
      <PlayListItem />
    </Container>
  );
}

export default PlayList;
