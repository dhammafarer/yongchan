import styled from "styled-components";
import { weight, color } from "src/theme";
import { rem } from "src/theme/utils";
import {
  trafalgar,
  paragon,
  doublePica,
  greatPrimer,
  pica,
  bodyCopy,
  brevier,
} from "src/theme/typography";

export const Content = styled.div`
  width: 100%;
  ${bodyCopy};
  margin: 0 auto;
  max-width: ${rem(768)};
  overflow: auto;
  box-sizing: border-box;
  color: ${color("text.dark")};
  h1 {
    ${trafalgar};
    font-weight: ${weight("bold")};
  }
  h2 {
    ${paragon};
    font-weight: ${weight("bold")};
  }
  h3 {
    ${doublePica};
  }
  h4 {
    ${greatPrimer};
  }
  h5 {
    ${pica};
  }
  p {
    ${bodyCopy};
  }
  small {
    ${brevier};
  }
  img {
    display: block;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 768px;
  }
`;
