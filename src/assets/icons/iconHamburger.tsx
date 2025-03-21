import { colors } from '../../settings/theme';

export const IconHamburger = ({ stroke = colors.white, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M3 7H21' stroke={stroke} strokeWidth='1.5' strokeLinecap='round' />
      <path d='M3 12H21' stroke={stroke} strokeWidth='1.5' strokeLinecap='round' />
      <path d='M3 17H21' stroke={stroke} strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  );
};
