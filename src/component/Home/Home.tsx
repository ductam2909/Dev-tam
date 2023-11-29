import React from 'react';
import * as S from './styled';
import { Col, Image, Input, Row } from 'antd';

export default function Home() {
  return (
    <S.Wraper>
      <S.Fixed>
        <S.Header>
          <Row justify="space-between" align="middle">
            <Col>
              <Row gutter={[16, 16]} style={{ height: '100%' }} align="middle">
                <Col>
                  <S.CenteredCol>
                    <S.Logo>
                      <Image src="https://chelien.com.vn/_next/image?url=%2Flogo%2Flogo-blue-png.png&w=1920&q=75" />
                    </S.Logo>
                  </S.CenteredCol>
                </Col>
                <Col>Về chúng tôi</Col>
                <Col>Câu chuyện</Col>
                <Col>Menu</Col>
              </Row>
            </Col>
            <Col>
              <Row gutter={[16, 16]} style={{ height: '100%' }} align="middle">
                <Col>Cửa hàng</Col>
                <Col>Tin tức</Col>
                <Col>
                  <img src="https://chelien.com.vn/images/header/contact.svg" alt="Submit" />
                </Col>
              </Row>
            </Col>
          </Row>
        </S.Header>
      </S.Fixed>
      <S.Intro>
        <Row>
          <Col md={8} xs={24}>
            <Row>
              <Col>
                <img src="https://chelien.com.vn/_next/static/media/welcomeIcon.dab12e6b.svg" />
              </Col>
              <Col>
                <span className="text">
                  Mang hơi hướng chè truyền thống nhưng phong cách hiện đại – độc – lạ tại mảnh đất miền Trung.
                </span>
              </Col>
            </Row>
          </Col>
          <Col md={12} xs={24}>
            <img src="https://chelien.com.vn/_next/static/media/haloIcon.477de9b4.svg" />
          </Col>
        </Row>
      </S.Intro>
    </S.Wraper>
  );
}
