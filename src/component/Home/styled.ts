import styled from 'styled-components';
import logo from '../../../public/logo512.png';
import lienvan from '../../../src/access/img/lienvan.jpg'

export const Wraper = styled.div`
  margin: 0 20px;

`;

export const Main = styled.div`
`;

export const Image = styled.div`
position: relative;
width: 800px;
  height: 500px;
  background-size: contain; /* Sử dụng contain thay vì cover */
  background-repeat: no-repeat;
  background-position: center; /* Canh giữa */
background-image: url(${lienvan});
p {
    font-size: 14px;
    font-weight: 400;
}
.name {
    position: absolute;
    bottom: 188px;
    left: 65px;
    width: 400px;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.sodangky {
    position: absolute;
    bottom: 113px;
    left: 65px;
}

.thoihan_tu {
    position: absolute;
    bottom: 65px;
    left: 130px;
}

.thoihan_den {
    position: absolute;
    bottom: 65px;
    left: 340px;
}
.number {
    position: absolute;
    left: 640px;
    top: 79px;
}
`;
