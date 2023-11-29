import styled from 'styled-components';

export const Wraper = styled.div`
/* padding:20px; */
`;

export const Main = styled.div`
`;

export const Item = styled.div`
height: 100px;
background-color: #ccc;
`;

export const Top = styled.div`
  padding: 0 20px;
  border-bottom: solid 1px #ccc;
  margin: 0 30px;
  .enquiry {
    color: #03F4EB;
    font-size: 18px;
  }
`;

export const Header = styled.div`
background-image: url('https://p.w3layouts.com/demos_new/template_demo/18-05-2019/informing-demo_Free/827676246/web/images/banner1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.52);
`;


export const Intro = styled.div`
  padding: 0 20px;
  margin: 0 30px;
  height: 50%;
  /* background-color: #ccc; */

  .info {
    color: #fff;
    font-size: 30px;
    font-weight: 800;
  }
  h4 {
    color: #fff;
  }

  .start {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
    h1 {
      font-size: 45px;
      color: #fff;
      text-align: center;
    }
  }
`;