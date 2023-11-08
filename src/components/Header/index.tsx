import NavBar from '../NavBar';
import { Container } from './styles';
import Logo from '../../assets/logo.png';

const Header: React.FC<any> = () => (
  <>
    <Container>
      <img src={Logo} alt="" />
      <NavBar />
    </Container>
  </>
);

export default Header;
