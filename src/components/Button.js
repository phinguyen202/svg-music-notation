import React from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "common/styles";

const Wrapper = styled.button`
  ${font}
  ${primaryColors}
  ${shape}
`;

export default function Button({ text }) {
  return <Wrapper>{text}</Wrapper>;
}