import styled, { css } from 'styled-components';

export const Wraper = styled.div`
  margin: 0 20px;
`;

export const Main = styled.div``;
// export const Image = styled.div`
// position: relative;
// width: 1748px;
//   height: 2480px;
//   background-size: contain; /* Sử dụng contain thay vì cover */
//   background-repeat: no-repeat;
//   background-position: center; /* Canh giữa */
// background-image: url(${lienvan});
// p {
//     font-size: 14px;
//     font-weight: 400;
// }
// .name {
//     position: absolute;
//     bottom: 188px;
//     left: 65px;
//     width: 400px;
//     word-wrap: break-word;
//     overflow-wrap: break-word;
// }
// .sodangky {
//     position: absolute;
//     bottom: 113px;
//     left: 65px;
// }

// .thoihan_tu {
//     position: absolute;
//     bottom: 65px;
//     left: 130px;
// }

// .thoihan_den {
//     position: absolute;
//     bottom: 65px;
//     left: 340px;
// }
// .number {
//     position: absolute;
//     left: 640px;
//     top: 79px;
// }
// `;

export const ExcludeWrapper = styled.p`
  position: absolute;
  top: 755px;
  left: 50px;
  width: 100%;
  line-height: 12pt;
`;
export const ExcludeConfig1 = styled.p`
  font-family: 'Times New Roman';
  font-size: 14pt;
  font-weight: 'normal';
  font-style: 'normal';
  color: '#000000';
  word-spacing: 0.1;
  line-height: 12pt;
`;
export const ExcludeConfig2 = styled.p`
  font-family: 'Times New Roman';
  font-size: 14pt;
  font-weight: 'normal';
  font-style: 'normal';
  color: '#000000';
  word-spacing: 0.1;
  line-height: 12pt;
`;

export const Input = styled.div.attrs<{ $config?: any }>((props) => ({}))`
  ${(props) => {
    let rs = `
    position: relative;
    width: ${props?.$config.size.width}pt;
    height: ${props?.$config.size.height}pt;
    background-size: contain; /* Sử dụng contain thay vì cover */
    background-repeat: no-repeat;
    background-position: center; /* Canh giữa */
    `;
    if (props.$config.img) {
      rs += `background-image: url(${require(`../../access/img/${props.$config.img}.jpg`)});`;
    }
    if (props.$config.config) {
      const keys = Object?.keys(props.$config?.config);
      keys.forEach((key) => {
        const className = key;
        const cssString = `
      .${className} {
        color: ${props?.$config.config[`${className}`]?.color};
        font-size : ${props?.$config.config[`${className}`]?.fontSize}pt;
        font-family: ${props?.$config.config[`${className}`]?.fontFamily};
        font-weight: ${props?.$config.config[`${className}`]?.fontWeight};
        font-style: ${props?.$config.config[`${className}`]?.fontStyle};
        color: ${props?.$config.config[`${className}`]?.color};
        position: ${props?.$config.config[`${className}`]?.position};
        top : ${props?.$config.config[`${className}`]?.top}px;
        bottom : ${props?.$config.config[`${className}`]?.bottom}px;
        left : ${props?.$config.config[`${className}`]?.left}px;
        width : ${props?.$config.config[`${className}`]?.width}px;
        word-wrap: ${props?.$config.config[`${className}`]?.wordWrap};
        overflow-wrap: ${props?.$config.config[`${className}`]?.overflowWrap};
        word-spacing: ${props?.$config.config[`${className}`]?.wordSpacing}px;
        text-indent: ${props?.$config.config[`${className}`]?.textIndent}px;
        text-align: ${props?.$config.config[`${className}`]?.alignment};
        text-transform: ${props?.$config.config[`${className}`]?.textTransform};
        text-decoration:${props?.$config.config[`${className}`]?.textDecoration};
        line-height:${props?.$config.config[`${className}`]?.lineHeight}px;
        // bottom:${props?.$config.config[`${className}`]?.bottom}px;
        // right:${props?.$config.config[`${className}`]?.right}px;
        ${
          props?.$config.config[`${className}`]['before']
            ? `&:before{
          content: '${props?.$config.config[`${className}`]['before']?.content}';
          };`
            : ``
        };
          ${
            props?.$config.config[`${className}`]['after']
              ? `&:after{
            content: '${props?.$config.config[`${className}`]['after']?.content}';
            };`
              : ``
          }; 
           
        
        
     
     
        // Thêm các thuộc tính khác nếu cần
      };
      
      
    `;

        rs += cssString;
      });
    }

    return rs;
  }}
`;

export const Date = styled.p`
  position: absolute;
  top: 70px;
  left: 350px;
  font-family: 'Times New Roman';
  font-size: 15pt;
  font-weight: 'normal';
  font-style: 'normal';
  color: '#000000';
  word-spacing: 0.1;
  font-style: italic;
`;
