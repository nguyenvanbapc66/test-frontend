import styled from 'styled-components';

import { colors } from '../../settings/theme';

// Base font size: 16px
const BaseText = styled.p<{
  weight?: '400' | '500' | '600' | '700' | number;
  color?: string;
  variant?: keyof typeof colors;
}>`
  --base-font-size: 1rem;

  margin: 0;
  padding: 0;
  font-size: var(--base-font-size);
  line-height: var(--base-font-size);
  font-weight: ${(props) => props.weight || '400'};
  color: ${(props) => (props.variant ? colors[props.variant] : props.color || colors.black)};
  transition: all 0.15s ease-out;
`;

const Text = {
  // Base font size: 24px
  three_xl: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 1.5);
    line-height: calc(var(--base-font-size) * 1.5);
  `,
  // Base font size: 22px
  two_xl: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 1.375);
    line-height: calc(var(--base-font-size) * 1.375);
  `,
  // Base font size: 20px
  xl: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 1.25);
    line-height: calc(var(--base-font-size) * 1.25);
  `,
  // Base font size: 18px
  lg: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 1.125);
    line-height: calc(var(--base-font-size) * 1.125);
  `,
  // Base font size: 16px
  base: styled(BaseText)`
    font-size: var(--base-font-size);
    line-height: var(--base-font-size);
  `,
  // Base font size: 14px
  md: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 0.875);
    line-height: calc(var(--base-font-size) * 0.875);
  `,
  // Base font size: 12px
  sm: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 0.75);
    line-height: calc(var(--base-font-size) * 0.75);
  `,
  // Base font size: 10px
  xs: styled(BaseText)`
    font-size: calc(var(--base-font-size) * 0.625);
    line-height: calc(var(--base-font-size) * 0.625);
  `,
};

export default Text;
