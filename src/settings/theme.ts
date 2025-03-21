enum BREAKPOINT_KEYS {
  tiny = 'tiny',
  mobile = 'mobile',
  tablet = 'tablet',
  smallLaptop = 'smallLaptop',
  laptop = 'laptop',
  desktop = 'desktop',
  largeDesktop = 'largeDesktop',
}

const colors = {
  primary: '#F2542D',
  secondary: '#562C2C',
  tertiary: '#562C2CCC',
  quaternary: '#666666',
  quinary: '#562C2C4D',
  senary: '#FFF6F4',
  septenary: '#F2542D80',
  white: '#FFFFFF',
  black: '#000000',
};

const breakpoints: Record<BREAKPOINT_KEYS, number> = {
  tiny: 0,
  mobile: 480,
  tablet: 768,
  smallLaptop: 1000,
  laptop: 1300,
  desktop: 1601,
  largeDesktop: 1921,
};

const bpEnum = (key: keyof typeof BREAKPOINT_KEYS, upto = false) => {
  return (upto ? breakpoints[key] : breakpoints[key] - 1) + 'px';
};

export { BREAKPOINT_KEYS, bpEnum, colors };
