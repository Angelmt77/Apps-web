import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

const Li = styled.li`
  color: white;
  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  gap: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <Ul>
        <LeftMenu>
          <Li><Link href="/inventory">Inventario</Link></Li>
          <Li><Link href="/auctions">Subastas</Link></Li>
          <Li><Link href="/location">Ubicación</Link></Li>
          <Li><Link href="/service">Servicio</Link></Li>
          <Li><Link href="/support">Soporte</Link></Li>
        </LeftMenu>
        <Li><Link href="/login">Iniciar Sesión</Link></Li>
      </Ul>
    </Nav>
  );
};

export default Header;
