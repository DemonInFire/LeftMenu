import styled from "styled-components";

const Wrapper = styled.div<{$isScreenSm: boolean}>`
  display: flex;
  flex-direction: column;

  position: ${({ $isScreenSm }) => $isScreenSm ? 'absolute' : 'block'};
  bottom: ${({ $isScreenSm }) => $isScreenSm ? '0' : 'auto'};
  flex-direction: ${({ $isScreenSm }) => $isScreenSm ? 'row' : 'column'};
  margin-top: ${({ $isScreenSm }) => $isScreenSm ? '0' : '100px'};
`;

const MainWrapper = styled.div`
  display: flex;
`;

const StyledLeftMenu = {
  Wrapper,
  MainWrapper,
};

export default StyledLeftMenu;