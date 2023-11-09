/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: #fff;

  @media screen and (max-width: 901px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const TrofeuImage = styled.img`
  width: 25%;

  @media screen and (max-width: 901px) {
    max-width: 120px;
    width: 12%;
    position: absolute;
    left: 3%;
    top: 20%;
  }
`;
