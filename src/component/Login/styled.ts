import styled from 'styled-components';

export const Wraper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://allimages.sgp1.digitaloceanspaces.com/maytinhvinhcom/2021/11/1637143041_940_Goi-y-4-trang-web-cung-cap-hinh-nen-desktop.jpg');
  background-size: cover;
  background-position: center;
`;

export const Main = styled.div`
  width: 40%;
  background-color: rgba(181, 210, 250, 0.5);
  border-radius: 10px;
  /* padding: 50px 10px; */
  margin: 0 20px;
  @media screen and (max-width: 768px) {
    /* CSS styles for screens with a maximum width of 768px */
    width: 100%;
  }
`;