import styled from 'styled-components';

const Footer = styled.footer`
  flex-shrink: 0;
`;

export default () => (
  <Footer>&copy; {new Date().getFullYear()} Lykke AG</Footer>
);
