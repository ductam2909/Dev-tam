import styled from 'styled-components';
import logo from '../../../public/logo512.png';

export const Wraper = styled.div`
  margin: 0 20px;

`;

export const Main = styled.div`
`;

export const Image = styled.div`
position: relative;
width: 70%;
height: 500px;
background-image: url(http://localhost:3000/img/lienvan-lao.jpg);
background-size:cover;
background-repeat: no-repeat;
background-position: center; 
p {
    font-size: 16px;
    /* font-weight: bold; */
    font-weight: 400;
}
.name {
    /* position: absolute;
    bottom: 175px;
    left: 70px; */
    padding-left: 65px;
    padding-top: 282px;
    line-height: 28px;
    width: 400px;
    /* overflow-wrap: break-word; */
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.sodangky {
    position: absolute;
    bottom: 92px;
    left: 65px;
}

.thoihan_tu {
    position: absolute;
    bottom: 36px;
    left: 170px;
}

.thoihan_den {
    position: absolute;
    bottom: 36px;
    left: 400px;
}
.number {
    position: absolute;
    left: 720px;
    top: 55px;
}
`;
