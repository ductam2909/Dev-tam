import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { Button, Col, Input, Row } from 'antd';
// import ReactPlayer from 'react-player';
import axios from 'axios';
import Tables from './component/Table/Table';
import { SearchOutlined } from '@ant-design/icons';
import { Data } from './component/Data/Data';

export default function Home() {
  useEffect(() => {
    axios
      .get('https://656b6935dac3630cf72812d3.mockapi.io/video')
      .then((res) => {
        setDataTable(res?.data);
        setData(res?.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [valueSearch, setValueSearch] = useState<any>();
  const [data, setData] = useState<any>();
  const [dataTable, setDataTable] = useState<any>();

  useEffect(() => {
    if (valueSearch === '') {
      setDataTable(data);
    }
  }, [valueSearch]);

  // const Playvideo = () => {
  //   return (
  //     <S.Item>
  //       <ReactPlayer
  //         width="100%"
  //         // height="400px"
  //         playing
  //         // onProgress={true}
  //         controls
  //         // playIcon={<button>Play</button>}
  //         light="https://i.stack.imgur.com/zw9Iz.png"
  //         url="https://res.cloudinary.com/dh2wb2nzw/video/upload/v1701435873/video1/ng%C3%A2n_s%C3%A1ch_bt787d.mp4"
  //       />
  //       <p>Tên video</p>
  //     </S.Item>
  //   );
  // };
  const hadleSearch = () => {
    const result = data.filter((item: any) => item?.title?.includes(valueSearch));
    setDataTable(result);
  };

  return (
    <S.Wraper>
      <S.Header>
        <Row justify={'start'} align={'middle'} gutter={[16, 16]}>
          <Col md={1}>
            <h4>Home</h4>
          </Col>
          <Col md={1}>
            <h4>Top1</h4>
          </Col>
          <Col md={1}>
            <h4>Top2</h4>
          </Col>
          <Col md={6}>
            <Row gutter={[8, 8]}>
              <Col>
                <Input
                  placeholder="Tìm kiếm"
                  prefix={<SearchOutlined />}
                  onChange={(e) => {
                    setValueSearch(e.target.value);
                  }}
                />
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    hadleSearch();
                  }}
                >
                  Tìm
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </S.Header>
      {/* <Row gutter={[16, 16]}>
        <Col md={6} xs={24}>
          <Playvideo />
        </Col>
        <Col md={6} xs={24}>
          <Playvideo />
        </Col>
        <Col md={6} xs={24}>
          <Playvideo />
        </Col>
        <Col md={6} xs={24}>
          <Playvideo />
        </Col>
        <Col md={8} xs={24}>
          <Playvideo />
        </Col>
      </Row> */}
      <Tables datas={dataTable} />
    </S.Wraper>
  );
}
