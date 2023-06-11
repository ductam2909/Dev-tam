import React, { useState } from 'react';
import * as S from './styled';
import { Row, Col, Form, Button } from 'antd';
import Input from 'antd/es/input/Input';
const Login: React.FC = () => {
  const [valueInput, setValueInput] = useState<any>([]);

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setValueInput([...valueInput, values]);
    form.resetFields(); // Clear form fields
  };

  return (
    <S.Wraper>
      <S.Main>
        <Form style={{ width: '100%' }} onFinish={onFinish} form={form}>
          <Row justify={'center'}>
            <Col span={12} style={{ textAlign: 'center' }}>
              <h3>Login Form</h3>
            </Col>
            <Col md={22} xs={22}>
              <Form.Item
                label="Name"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col md={22} xs={22}>
              <Form.Item label="Paswword" name="Password">
                <Input />
              </Form.Item>
            </Col>
            <Col md={22} xs={22}>
              <Form.Item label="Address" name="address">
                <Input />
              </Form.Item>
            </Col>
            <Col md={22} xs={22}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </S.Main>
    </S.Wraper>
  );
};

export default Login;
