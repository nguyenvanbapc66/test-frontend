import styled from 'styled-components';

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
};

const Image = ({ src, alt, fill = false, ...props }: ImageProps) => {
  return <StyledImage src={src} alt={alt} $fill={fill} loading='lazy' {...props} />;
};

export default Image;

const StyledImage = styled.img<{ $fill: boolean }>`
  width: ${({ $fill }) => ($fill ? '100%' : 'auto')};
  height: ${({ $fill }) => ($fill ? '100%' : 'auto')};
  object-fit: cover;
`;
