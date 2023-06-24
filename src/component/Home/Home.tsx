import React from 'react';
import * as S from './styled'
import { Col, Input, Row } from 'antd';

export default function Home() {
  return <S.Wraper>
    <Row justify={'center'} align={'middle'} gutter={[16,16]}>
      <Col md={7}><h2>restos</h2></Col>
      <Col md={1}><h4>Home</h4></Col>
      <Col md={1}><h4>about</h4></Col>
      <Col md={1}><h4>contasct</h4></Col>
      <Col md={1}><h4>contact</h4></Col>
      <Col md={6} offset={4}><Input/></Col>
    </Row>
  </S.Wraper>;
}
