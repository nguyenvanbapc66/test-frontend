import styled from 'styled-components';

import { colors } from '../../settings/theme';

type ButtonProps = {
  variant?: 'outlined' | 'solid';
  color?: keyof typeof colors;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ variant = 'solid', color = 'primary', children, className, onClick }: ButtonProps) => {
  return (
    <StyledButton $variant={variant} $color={color} className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  $variant: 'outlined' | 'solid';
  $color: keyof typeof colors;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${(props) => (props.$variant === 'solid' ? colors[props.$color] : colors.white)};
  color: ${(props) => (props.$variant === 'outlined' ? colors[props.$color] : colors.white)};
  border: ${(props) => (props.$variant === 'outlined' ? `1px solid ${colors[props.$color]}` : 'none')};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  transition: all 0.15s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
