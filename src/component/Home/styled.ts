import styled from 'styled-components';
import { Row, Col, Image } from 'antd';

export const Wraper = styled.div`
`;

export const Header = styled.div`
  padding: 5px 30px;
  height: 100px;
  background-color: #e7f3fb;
  font-size: 20px;
  font-weight: bold;
`;

export const Fixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;



export const Logo = styled.div`
width: 100px;
height: 10px;
`;

export const Main = styled.div`
`;

export const CenteredCol = styled(Row)`
height: 100px;
`;

export const Intro = styled.div`
 height: 1600px;
 background-color: #E7F3FB;
 padding-top: 100px;
 padding-left: 50px;
 padding-right: 50px;
 .text {
color:#000000;
display: inline;
font-size:24px;
grid-area: auto;
line-height: 40px;
 }
`;
