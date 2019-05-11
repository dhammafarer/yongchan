import * as React from "react";
import { languages } from "src/data/skills";
import { Card } from "src/components/Card";
import styled from "styled-components";
import { weight, radius, color, space } from "src/theme";
import { pica, greatPrimer } from "src/theme/typography";

interface Props {
  items: typeof languages;
}

const Inner = styled.div`
  padding: ${space(3)} ${space(4)};
`;

const Title = styled.div`
  ${greatPrimer};
  color: ${color("primary.dark")};
  font-weight: ${weight("bold")};
`;
const Lang = styled.div`
  margin-bottom: ${space(1)};
  display: flex;
  align-items: center;
`;
const Label = styled.div`
  ${pica};
  margin-bottom: 0;
  width: 35%;
  color: ${color("primary.main")};
`;

const LevelGauge = styled.div`
  flex-grow: 1;
  width: 60%;
  background: linear-gradient(
    90deg,
    ${color("primary.light")},
    ${color("secondary.main")}
  );
  height: 10px;
  overflow: hidden;
  border-radius: ${radius(2)};
`;

const Level = styled.div`
  background: ${color("grey.100")};
  height: 100%;
  width: 100%;
  float: right;
`;

const Languages: React.SFC<Props> = ({ items }) => (
  <Card>
    <Inner>
      <Title>Languages</Title>
      {items.map(item => (
        <Lang>
          <Label>{item.name}</Label>
          <LevelGauge>
            <Level style={{ width: `${(1 - item.level) * 100}%` }} />
          </LevelGauge>
        </Lang>
      ))}
    </Inner>
  </Card>
);

export { Languages };
