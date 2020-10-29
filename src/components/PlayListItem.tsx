import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0;
`;

const Thumbnail = styled.div`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 4px; 
  background-color: white;
  margin-right: 16px;
`;

const TextWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

const Title = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  color: white;
  pointer-events: none;
`;

const Author = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: rgba(235, 235, 245, 0.6);
  margin-top: 4px;
  pointer-events: none;
`;

function PlayListItem() {
  return (
    <Container>
      <Thumbnail />
      <TextWrapper>
        <Title>title</Title>
        <Author>author</Author>
      </TextWrapper>
    </Container>
  );
}

export default PlayListItem;
