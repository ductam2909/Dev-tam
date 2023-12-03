import React from 'react';
import { Space, Table, Tag } from 'antd';

import type { ColumnsType } from 'antd/es/table';
// import ReactPlayer from 'react-player';
import * as S from './styled';

interface DataType {
  key: string;
  url: string;
  title: string;
}

type TablesProps = {
  datas: any;
};

export default function Tables({ datas }: TablesProps): JSX.Element {
  const columns: ColumnsType<DataType> = [
    {
      // title: 'Video',
      key: 'url',
      render: (record) => (
        <>
          <Playvideo url={record?.url} title={record?.title} />
        </>
      ),
    },
  ];

  // const data: DataType[] = [
  //   {
  //     key: '1',
  //     url: 'https://res.cloudinary.com/dh2wb2nzw/video/upload/v1701435873/video1/ng%C3%A2n_s%C3%A1ch_bt787d.mp4',
  //     title: 'Tên 1',
  //   },
  //   {
  //     key: '2',
  //     url: 'https://res.cloudinary.com/dh2wb2nzw/video/upload/v1701435873/video1/ng%C3%A2n_s%C3%A1ch_bt787d.mp4',
  //     title: 'Tên 2',
  //   },
  // ];
  const Playvideo = (prams: any) => {
    return (
      <S.Item>
        <iframe width="100%" height="500" src={prams?.url}></iframe>
        {/* <ReactPlayer
          width="100%"
          height="500px"
          playing
          // onProgress={true}
          controls
          // playIcon={<button>Play</button>}
          light="https://i.stack.imgur.com/zw9Iz.png"
          url={prams?.url}
        /> */}
        <p>{prams?.title}</p>
      </S.Item>
    );
  };

  return (
    <S.Wraper>
      <Table
        columns={columns}
        dataSource={datas}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ['5', '10'],
        }}
      />
    </S.Wraper>
  );
}
