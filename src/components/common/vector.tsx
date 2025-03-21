import React from 'react';
import styled from 'styled-components';

import { IconMountainsMapPin } from '../../assets/icons/iconMountainsMapPin';

type VectorProps = {
  icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
};

const Vector = ({ icon = <IconMountainsMapPin />, className, style, onClick }: VectorProps) => {
  return (
    <StyledVector className={className} onClick={onClick} style={style}>
      {React.cloneElement(icon)}
    </StyledVector>
  );
};

export default Vector;

const StyledVector = styled.button`
  position: relative;
  aspect-ratio: 28 / 57;
  overflow: hidden;
`;
