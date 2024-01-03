import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { Button, Col, Input, Row, Select } from 'antd';
import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';
import * as XLSX from 'xlsx';

export default function ThuyNoiDia() {
  const [jsonData, setJsonData] = useState<any>(null);
  const [name, setName] = useState<any>();
  const [valueSelect, setValueSelect] = useState<any>();
  const [infoImage, SetInfoImage] = useState<any>();

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      readExcel(file);
    }
  };

  const readExcel = (file: any) => {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const data = e?.target?.result;
      const workbook = XLSX.read(data, { type: 'binary' });

      // Assuming the first sheet is the one you want to read
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet data to JSON
      const jsonData: any = XLSX.utils.sheet_to_json(sheet);

      setJsonData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const printPDF = () => {
    const input: HTMLElement | null = document?.getElementById('ids');
    if (input !== null) {
      html2canvas(input, { scale: 2, removeContainer: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new JsPdf('l', 'px', [600, (600 * canvas.height) / canvas.width]);

        pdf.addImage(imgData, 'JPEG', 0, 0, 600, (600 * canvas.height) / canvas.width);
        pdf.save(`${infoImage?.sodangky}.pdf`);
      });
    }
  };

  const printPDF_v2 = () => {
    const input: HTMLElement | null = document?.getElementById('ids');
    if (input !== null) {
      html2canvas(input, { scale: 2, removeContainer: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new JsPdf('p', 'pt', 'a4');

        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${infoImage?.sodangky}.pdf`);
      });
    }
  };

  const printPng = () => {
    const input: HTMLElement | null = document.getElementById('ids');
    if (input !== null) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
          link.href = imgData;
          link.download = 'filename.png';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(imgData);
        }
      });
    }
  };

  const handerfilter = (e: any) => {
    setName(e);
  };

  useEffect(() => {
    if (jsonData && name) {
      const ketQuaLoc = jsonData?.filter((item: any) => item.HSTT === parseInt(name));
      setValueSelect(ketQuaLoc[0]);
      console.log(ketQuaLoc);

      if (ketQuaLoc.length > 0) {
        const ngayCap = new Date(ketQuaLoc[0]['ngay cap']);
        const thoiHan = new Date(ketQuaLoc[0]['THỜI HẠN'] * 86400 * 1000);

        const kq = {
          donvi: ketQuaLoc[0]['ĐƠN VỊ'],
          ngaycap: ketQuaLoc[0]['ngay cap'],
          thoihan: thoiHan?.toLocaleDateString(),
          sodangky: ketQuaLoc[0]['SỐ XE'],
          number: ketQuaLoc[0]['so gpkd'],
        };
        SetInfoImage(kq);
      }
    }
  }, [name]);
  return (
    <S.Wraper>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <S.Image id="ids">
            <p className="number">{infoImage?.number}</p>
            <p className="name">{infoImage?.donvi}</p>
            <p className="sodangky">{infoImage?.sodangky}</p>
            <p className="thoihan_tu">{infoImage?.ngaycap}</p>
            <p className="thoihan_den">1/1/2023</p>
          </S.Image>
        </Col>
        <Col md={8}>
          <Input onChange={(e) => handerfilter(e?.target?.value)} value={name}></Input>
        </Col>
        <Col md={8}>
          <Button
            onClick={() => {
              setName(parseInt(name) + 1);
            }}
          >
            Next
          </Button>
          <Button onClick={() => printPDF()} style={{ marginLeft: 10 }}>
            Save
          </Button>
        </Col>
        <Col span={24}>
          <div>
            <input type="file" onChange={handleFileChange} />
            {jsonData && (
              <div>
                <h2>JSON Data:</h2>
                <pre>{JSON.stringify(infoImage, null, 2)}</pre>
                {/* <pre>{JSON.stringify(jsonData, null, 2)}</pre> */}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </S.Wraper>
  );
}
