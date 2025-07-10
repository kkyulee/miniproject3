import { FooterStyle, InnerStyle } from "./style";

const Footer = () => {
  return (
    <FooterStyle>
      <InnerStyle>
        <p>
          주식회사 지마켓은 통신판매중개자이며 통신판매의 당사자가 아닙니다.
          따라서 주식회사 지마켓은 상품·거래 정보 및 가격에 대하여 책임을 지지
          않습니다. 본 사이트의 모든 정보, 콘텐츠, UI 등에 대한 무단 복제, 전송,
          배포, 스크래핑 등의 행위는 엄격히 금지됩니다.콘텐츠산업 진흥법에 따른
          표시
        </p>
        <p>@Copyright Gmarket Inc. All rights reserved.</p>
      </InnerStyle>
    </FooterStyle>
  );
};

export default Footer;
