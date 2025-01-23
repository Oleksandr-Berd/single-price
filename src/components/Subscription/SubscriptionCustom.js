import styled from "styled-components";

export const SubscriptionCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 24px;

  text-align: left;
  background-color: #2ab3b1;
  color: #fff;

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
  }

  & > p {
    margin-bottom: 26px;

    font-size: 16px;
    line-height: 1.63;
    letter-spacing: -0.2px;
  }
`;

export const SubscriptionPrice = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  margin-bottom: 4px;

  & > h4 {
    margin-right: 11px;

    font-size: 32px;
    letter-spacing: -0.4px;
  }

  & > p {
    font-size: 16px;
    line-height: 1.63;
    opacity: 0.5;
  }
`;

export const SubscriptionButton = styled.button`
  width: 100%;

  padding-top: 15px;
  padding-bottom: 14px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.2px;
  background-color: #c0df33;
  color: #fff;

  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06),
    inset 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px 5px rgba(0, 255, 255, 0.5);
`;
