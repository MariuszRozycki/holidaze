type BreakpointKeys = "sm" | "md" | "lg" | "xl" | "xxl";
type Breakpoints = Record<BreakpointKeys, number>;
const breakpoints: Breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export default breakpoints;
