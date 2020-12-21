import styled from 'styled-components';

const Container = styled.div(
  ({ theme: { up, breakpoints } }) => `
  height: 100%;
  margin: 0px auto;
  ${up(breakpoints.xs)} {
    max-width: ${breakpoints.xs}px;
  }
${up(breakpoints.sm)} {
  max-width: ${breakpoints.sm}px;
}
${up(breakpoints.md)} {
  max-width: ${breakpoints.md}px;
}
${up(breakpoints.lg)} {
  max-width: ${breakpoints.lg}px;
}s
${up(breakpoints.xl)} {
  max-width: ${breakpoints.xl}px;
}
`
);

export default Container;
