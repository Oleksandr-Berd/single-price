import styled from "styled-components";

export const OfferCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 28px;
  padding-bottom: 32px;

  text-align: left;
  background-color: #fff;

  @media (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  & > h3 {
    margin-bottom: 24px;

    font-size: 20px;
    letter-spacing: -0.25px;
    color: #2ab3b1;

    @media (min-width: 1280px) {
      font-size: 24px;
    }
  }

  & > h4 {
    margin-bottom: 16px;

    font-size: 15px;
    line-height: 1.33;
    letter-spacing: -0.19px;
    color: #c0df33;

    @media (min-width: 1280px) {
      font-size: 18px;
    }
  }

  & > p {
    font-size: 14px;
    line-height: 1.86;
    letter-spacing: -0.17px;
    color: #9aa7be;

    @media (min-width: 1280px) {
      font-size: 16px;
    }
  }
`;
