import { Forms } from './Forms';
import { Container } from './styles';
import Trofeu from '../../assets/trofeu.png';

const CadastroContent: React.FC<any> = () => (
  <Container>
    <img src={Trofeu} width="25%" alt="" />
    <Forms />
  </Container>
);

export default CadastroContent;
