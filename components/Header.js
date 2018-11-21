import styled from 'styled-components';
import Nav from './Nav';

const Header = styled.header`
  flex-shrink: 0;
`;

export default () => (
  <Header>
    <Nav />
  </Header>
);
