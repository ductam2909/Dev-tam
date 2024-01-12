import React, { useState } from 'react';
import AppRouter from './AppRouter';
import { Button, Col, Input, Row, Select } from 'antd';

const optionSelect = [
  {
    value: 'lienvan',
    label: 'Liên Vận',
  },
  {
    value: 'thuynd',
    label: 'Thủy Nội địa',
  },
  {
    value: 'giayphepxetaplai',
    label: 'Giấy phép xe tập lái',
  },
];
const App: React.FC = () => {
  const [valuSelect, SetValueSelect] = useState<any>();

  return (
    <div className="main">
      {/* <Row justify={'center'} align={'middle'} gutter={[16, 16]}>
        <Col md={4}>
          <h4>Chọn Loại Giấp Phép</h4>
        </Col>
        <Col md={4}>
          <Select
            defaultValue={optionSelect[0]}
            options={optionSelect}
            style={{ minWidth: '100%' }}
            onChange={(e) => {
              console.log(e);
            }}
          >
            Thủy nội địa
          </Select>
        </Col>
      </Row> */}
      <AppRouter />
    </div>
  );
};

export default App;
