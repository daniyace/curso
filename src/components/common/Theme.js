import { css } from 'styled-components';

const mediaQuery =
  (...query) =>
  (...rules) =>
    css`
      @media ${css(...query)} {
        ${css(...rules)}
      }
    `;

export const screenSizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const media = {
  values: {
    ...screenSizes,
    mainMenu: screenSizes.lg,
    filterMenu: screenSizes.md,
  },
  getSize: (size, modifier = (x) => x) => {
    const screenSize = modifier(media.values[size]);
    return screenSize !== undefined ? `${screenSize}px` : size;
  },
  up: (size) => mediaQuery`(min-width: ${media.getSize(size)})`,
  down: (size) => mediaQuery`(max-width: ${media.getSize(size, (x) => x - 1)})`,
  between: (min, max) =>
    mediaQuery`(min-width: ${media.getSize(
      min
    )}) and (max-width: ${media.getSize(max, (x) => x - 1)})`,
};

export const colors = {
  primary: {
    dark: '#7fc798',
    main: '#431280',
    medium: '#bdebce',
    mediumLight: '#d0f1dc',
    light: '#e8f8ed',
    extraLight: '#f1fbf5',
  },
  error: {
    main: '#ed5d5d',
  },
  background: {
    main: '#ffffff',
    warm: '#f8f8f8',
    gradient: '#f9f9f9',
    surface: '#fdfdfd',
  },
  text: {
    main: 'rgba(0,0,0,0.9)',
    dark: '#333333',
    gray: '#7f7f7f',
    light: '#ffffff',
  },
  gray: {
    main: '#c5c5c5',
    light: '#e1e1e1',
    border: '#dfe1e3',
    extraLight: '#f0f0f0',
  },
  tan: {
    main: '#ebe6d4',
    dark: '#e0dac5',
    medium: '#f2eee4',
    light: '#fefbf8',
  },
};

const sansSerif = 'Montserrat, sans-serif';
const serif = 'Open Sans, sans-serif';

const makeFont = (
  isSerif,
  [size, lineHeight],
  isBold,
  [mobileSize, mobileLineHeight] = []
) => css`
  font-family: ${isSerif ? serif : sansSerif};
  font-weight: ${isBold ? 'bold' : 'normal'};
  font-size: ${size / 10}rem;
  line-height: ${lineHeight};
  ${mobileSize &&
  css`
    ${media.down('sm')`
            font-size: ${mobileSize / 10}rem;
            line-height: ${mobileLineHeight};
        `}
  `}
  color: #000000;
  /* opacity: 0.9; */

  &.subdued {
    color: ${colors.text.gray};
  }

  &.green {
    color: ${colors.primary.dark};
  }

  &.text-uppercase {
    text-transform: uppercase;
  }
`;

export const typography = {
  sansSerif,
  serif,
  h1: makeFont(true, [42, 1.2], false, [28, 1.2]),
  h2: makeFont(true, [32, 1.2], false, [23, 1.2]),
  h3: makeFont(false, [30, 1.2], true, [24, 1.25]),
  h4: makeFont(true, [25, 1.2], false, [19, 1.25]),
  h5: makeFont(false, [26, 1.2], true, [20, 1.4]),
  h6: makeFont(false, [20, 1.4], true, [18, 1.2]),
  subtitle1: makeFont(false, [18, 1.56], true),
  subtitle2: makeFont(false, [16, 1.5], true),
  subtitle3: makeFont(false, [14, 1.43], true),
  subtitle4: makeFont(false, [12, 1.33], true),
  body1: makeFont(false, [17, 1.41], false),
  body2: makeFont(false, [16, 1.5], false),
  body3: makeFont(false, [14, 1.43], false),
  body4: makeFont(false, [12, 1.33], false),
  label1: makeFont(false, [16, 1.25], false),
  label2: makeFont(false, [12, 1], true),
};
