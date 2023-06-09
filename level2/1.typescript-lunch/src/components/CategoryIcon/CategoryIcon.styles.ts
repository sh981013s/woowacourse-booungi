import styled from 'styled-components';

export const CategoryIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;

  border-radius: 50%;
  background: var(--lighten-color);

  & > img {
    width: 36px;
    height: 36px;
  }
`;
