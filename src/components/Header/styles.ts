/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 15%;
  margin: 45px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: #fff;
  z-index: 1;
  @media screen and (max-width: 901px) {
    width: 95%;
    margin: 10px auto;
  }
`;
