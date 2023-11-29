import React from 'react';
import * as S from './styled'
import { Col, Input, Row } from 'antd';
import { Icon } from '@iconify/react';
export default function Home2() {
  return <S.Wraper>

    <S.Header>
    </S.Header>
    <S.BackgroundOverlay>
      <S.Top>
        <Row justify={'space-between'} align={'middle'}>
          <Col>
            <Row gutter={[16, 16]} align={'middle'}>
              <Col><Icon icon="line-md:facebook" color="white" /></Col>
              <Col><Icon icon="ri:twitter-fill" color="white" /></Col>
              <Col><Icon icon="mdi:google-plus" color="white" /></Col>
              <Col><Icon icon="formkit:instagram" color="white" /></Col>
            </Row>
          </Col>
          <Col><p className='enquiry'> Enquiry : 0123123123</p></Col>
        </Row>
      </S.Top>
      <S.Intro>
        <Row justify={'space-between'} align={'middle'}>
          <Col>
            <p className='info'>
              Informing
            </p>
          </Col>
          <Col span={12}>
            <Row gutter={[16, 16]} align={'middle'}>
              <Col md={4}><h4>Home</h4></Col>
              <Col md={4}><h4>about</h4></Col>
              <Col md={4}><h4>contact</h4></Col>
              <Col md={4}><h4>contact</h4></Col>
            </Row>
          </Col>
        </Row>
        <div className='start'>
          <h1>Start Learning For Bright Future</h1>
        </div>
      </S.Intro>
    </S.BackgroundOverlay>
  </S.Wraper>;
}
