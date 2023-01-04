import styled from 'styled-components';

export const StaricticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const StaricticsPartial = styled.div`
  width: 130px;
  background-color: burlywood;
  border-radius: 15px;
`;

export const StaricticsName = styled.p`
  display: block;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 10px;
  color: black;
`;

export const StatisticsValue = styled(StaricticsName)`
  color: white;
  margin-bottom: 5px;
`;
