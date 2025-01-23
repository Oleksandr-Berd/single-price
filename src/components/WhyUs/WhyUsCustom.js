import styled from "styled-components";

export const WhyUsCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 24px;

  text-align: left;
  background-color: #62ccc9;

  @media (min-width: 1280px) {
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  & > h3 {
    margin-bottom: 18px;

    font-size: 18px;
    letter-spacing: -0.22px;
    color: #fff;
  }

  & > p {
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.17px;
    color: #fff;
    opacity: 0.75;
  }
`;
