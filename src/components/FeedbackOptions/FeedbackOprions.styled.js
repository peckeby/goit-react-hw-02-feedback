import styled from 'styled-components';

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const FeedBackOptionBtn = styled.button`
  cursor: pointer;
  border-color: bisque;
  border-radius: 15px;
  width: 100px;
  height: 40px;
  background-color: antiquewhite;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    background-color: beige;
  }
`;
