import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { Button, Col, Input, Row, Select } from 'antd';
import html2canvas from 'html2canvas';
import JsPdf from 'jspdf';
import * as XLSX from 'xlsx';
import { log } from 'console';

export default function Home() {
  const [jsonData, setJsonData] = useState<any>(null);
  const [name, setName] = useState<any>();
  const [valueSelect, setValueSelect] = useState<any>();
  const [infoImage, SetInfoImage] = useState<any>();
  const [template, SetTemplate] = useState<any>('thuynoidia');
  const [config, setConfig] = useState<any>();
  const [arrayConfig, setArrayConfig] = useState<any>([]);
  const [arrayConfigValue, setArrayConfigValue] = useState<any>([]);
  const [dateArray, setDateArray] = useState<any>([]);
  const [fullConfig, setFullConfig] = useState<any>();

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

  useEffect(() => {
    if (name) {
      setFullConfig(jsonData?.find((item: any) => item?.STT === parseInt(name)));
    }
  }, [jsonData, name]);
  console.log(fullConfig, 'fullConfig');
  console.log(name, 'name');

  const printPDF = () => {
    const input: HTMLElement | null = document?.getElementById('ids');
    if (input !== null) {
      html2canvas(input, { scale: 2, removeContainer: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new JsPdf('l', 'px', [1240, (1748 * canvas.height) / canvas.width]);

        pdf.addImage(imgData, 'JPEG', 0, 0, 1240, (1748 * canvas.height) / canvas.width);
        pdf.save(`1.pdf`);
      });
    }
  };

  const printPDF_v2 = () => {
    const input: HTMLElement | null = document?.getElementById('ids');
    if (input !== null) {
      html2canvas(input, { scale: 2, removeContainer: true }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new JsPdf(config.size.direction, 'pt', config.size.name);

        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        pdf.save(`${name}.pdf`);
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
    if (jsonData && name && arrayConfigValue?.length > 0) {
      const excelStartDate = new Date('1899-12-30T00:00:00Z');
      const ketQuaLoc = jsonData?.filter((item: any) => item?.STT === parseInt(name));
      setValueSelect(ketQuaLoc[0]);

      if (ketQuaLoc.length > 0) {
        const rs: any = {};
        arrayConfigValue.forEach((element: any) => {
          if (dateArray.includes(element)) {
            if (typeof ketQuaLoc[0][element] === 'string') {
              // eslint-disable-next-line @typescript-eslint/no-var-requires
              const moment = require('moment');
              const momentDate = moment(ketQuaLoc[0][element], 'DD/MM/YYYY');

              // Lấy ngày đã chuyển đổi
              rs[element] = momentDate.format('DD/MM/YYYY');
            } else
              rs[element] = new Intl.DateTimeFormat('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              }).format(new Date(excelStartDate.getTime() + ketQuaLoc[0][element] * 24 * 3600 * 1000));
          } else rs[element] = ketQuaLoc[0][element];
        });
        SetInfoImage(rs);
      }
    }
  }, [name]);

  const handleLoadSizeJSON = (e: any) => {
    const handleFile = (e: any) => {
      const content = e.target.result;
      // You can set content in state and show it in render.
    };

    const handleChangeFile = (file: any) => {
      const fileData = new FileReader();
      fileData.onloadend = handleFile;
      fileData.readAsText(file);
    };
  };

  const configExclude1 = ['dateValue', 'monthValue', 'yearValue'];
  const configExclude3 = ['soLuongValue', 'kieuValue', 'congSuatValue'];
  const configExclude4 = ['trongTaiValue', 'loaiValue'];

  useEffect(() => {
    const fetchData = () => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const jsonConfig = require(`./${template}.json`);
      console.log(jsonConfig, 'jsonConfig');

      const arrayConfigTemp: any = [];
      const arrayConfigValueTemp: any = [];
      const dateArrayTemp: any = [];
      Object.keys(jsonConfig.config).forEach((ele: any) => {
        if (jsonConfig.config[ele]?.isField) {
          arrayConfigTemp.push(ele);
        } else {
          arrayConfigValueTemp.push(ele);
        }
        if (jsonConfig.config[ele]?.isDate) {
          dateArrayTemp.push(ele);
        }
      });

      setConfig(jsonConfig);
      setArrayConfig(arrayConfigTemp);

      setArrayConfigValue(arrayConfigValueTemp);
      setDateArray(dateArrayTemp);
    };
    fetchData();
  }, [template]);

  const optionSelect = [
    {
      value: 'thuynoidia',
      label: 'Thủy Nội địa',
    },
    {
      value: 'giayphepxetaplai',
      label: 'Giấy phép xe tập lái',
    },
    {
      value: 'tauthuyvantaikhachdulich',
      label: 'Tàu thủy vận tải khách du lịch',
    },
    {
      value: 'giaovienlaixe',
      label: 'Chứng nhận giáo viên dạy thực hành lái ô tô',
    },
    {
      value: 'lienvanvietlao',
      label: 'Giấy phép liên vận Việt - Lào',
    },
    {
      value: 'bangtotnghiepthpt',
      label: 'Bằng tốt nghiệp trung học phổ thông',
    },
  ];

  return (
    <S.Wraper>
      <Row justify={'center'} align={'middle'} gutter={[16, 16]}>
        <Col md={4}>
          <h4>Chọn Loại Giấp Phép</h4>
        </Col>
        <Col md={4}>
          <Select
            defaultValue={optionSelect[0]}
            options={optionSelect}
            style={{ minWidth: '100%' }}
            onChange={(e) => {
              SetTemplate(e);
            }}
          ></Select>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          {config && (
            <S.Input id="ids" $config={config}>
              {console.log(arrayConfig, 'arrayConfig')}
              {arrayConfig?.length > 0 &&
                arrayConfig?.map((element: any, index: any) => (
                  <p key={index} className={element}>
                    {config?.config[element]?.value}
                  </p>
                ))}

              {arrayConfigValue?.length > 0 &&
                arrayConfigValue?.map((element: any, index: any) => (
                  <p key={index} className={element || ''}>
                    {infoImage ? infoImage[element] : ''}
                  </p>
                ))}
              <S.ExcludeWrapper>
                {fullConfig &&
                  Object?.keys(fullConfig)?.filter((item: any) => configExclude3?.includes(item))?.length > 0 && (
                    <S.ExcludeConfig1>
                      <span>Số lượng, kiểu và công suất máy chính:</span>
                      <span>
                        {' '}
                        {fullConfig?.soLuongValue}
                        {fullConfig?.kieuValue && ', '}
                        {fullConfig?.kieuValue} {fullConfig?.congSuat && ', '}
                        {fullConfig?.congSuat}
                      </span>
                    </S.ExcludeConfig1>
                  )}
                {fullConfig &&
                  Object?.keys(fullConfig)?.filter((item: any) => configExclude4?.includes(item))?.length > 0 && (
                    <S.ExcludeConfig2>
                      <span>Trọng tải toàn phần, số lượng người được phép chở, sức kéo, đẩy:</span>
                      <span>
                        {' '}
                        {fullConfig?.trongTaiValue}
                        {fullConfig?.loaiValue && ' '}
                        {fullConfig?.loaiValue}
                      </span>
                    </S.ExcludeConfig2>
                  )}
                {/* {fullConfig && */}
                {/* Object?.keys(fullConfig)?.filter((item: any) => configExclude1?.includes(item))?.length > 0 && ( */}
                <S.ExcludeConfig2>
                  <S.Date>
                    Quảng Nam, ngày {fullConfig?.dateValue || '    '} tháng {fullConfig?.monthValue || '    '} năm{' '}
                    {fullConfig?.yearValue || '    '}
                  </S.Date>
                </S.ExcludeConfig2>
                {/* )} */}
              </S.ExcludeWrapper>
            </S.Input>
          )}
        </Col>
        <Col md={8}>
          <Input onChange={(e) => handerfilter(e?.target?.value)} value={name}></Input>
        </Col>
        {jsonData && (
          <Col md={8}>
            <Button
              onClick={() => {
                setName(parseInt(name) + 1);
              }}
              disabled={name >= jsonData.length}
            >
              Next
            </Button>
            <Button
              onClick={() => {
                setName(parseInt(name) - 1);
              }}
              disabled={name <= 0}
            >
              Pre
            </Button>
            <Button onClick={() => printPDF_v2()} style={{ marginLeft: 10 }}>
              Save
            </Button>
          </Col>
        )}

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
