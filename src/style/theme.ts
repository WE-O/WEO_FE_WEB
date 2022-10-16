const size = {
  mobile: "768px",
};

const brandColors = {
  primaryGreen: `#22CC88`,
  subGreen: `#82E673`,
  secondaryPurple: `#A451F7`,
  subPurple: `#534165`,
  orange: `#EB683F`,
  red: `#DF1D1D`,
  blue: `#0078D4`,
};

const greyscaleColors = {
  white: `#FFFFFF`,
  planGrey:`#999999`,
  lightGrey1: `#DFDFDF`,
  lightGrey2: `#C1C1C1`,
  grey1: `#9D9EA3`,
  grey2: `#8B8B8B`,
  grey3: `#6F6F6F`,
  grey4: `#555555`,
  darkGrey1: `#3D3D3D`,
  darkGrey2: `#242424`,
  dark: `#000000`,

};

const backgroundColors = {
  background: `#F6F4EE`,
  lightBackground1: `#FAFAF6`,
  lightBackground2: `#F5F4F3`,
  lightBackground3: `#F7F7F7`,
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  ...brandColors,
  ...greyscaleColors,
  ...backgroundColors,
};

export default theme;
