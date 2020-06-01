import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import LottoPick from "../Components/LottoPick";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

export default () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Lotto-pick</title>
      </Helmet>
      <LottoPick />
    </Wrapper>
  );
};
