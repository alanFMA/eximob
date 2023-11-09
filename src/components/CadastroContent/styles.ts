/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 45px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: #fff;

  @media screen and (max-width: 901px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TrofeuImage = styled.img`
  width: 25%;

  @media screen and (max-width: 901px) {
    max-width: 120px;
    width: 15%;
    position: absolute;
    left: 15%;
  }
`;
