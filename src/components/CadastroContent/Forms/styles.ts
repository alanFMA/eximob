/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  border: 1px solid red;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContent = styled.div`
  width: 75%;
  text-align: justify;

  p:first-child {
    letter-spacing: 0.3px;
  }

  p {
    margin-top: 15px;
  }

  span {
    color: #fec200;
  }
`;
