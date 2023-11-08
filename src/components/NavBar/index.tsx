import { Link } from 'react-router-dom';
import { Container } from './styles';

const NavBar: React.FC<any> = () => (
  <Container>
    <Link to={''}>HOME</Link>
    <Link to={''}>SOBRE NÓS</Link>
    <Link to={''}>GALERIA</Link>
    <Link to={''}>CADASTRO</Link>
    <Link to={''}>REGRAS</Link>
    <Link to={''}>BLOG</Link>
    <Link to={''}>CONTATO</Link>
  </Container>
);

export default NavBar;
