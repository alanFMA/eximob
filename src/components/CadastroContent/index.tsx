import { Forms } from './Forms';
import { Container, TrofeuImage } from './styles';
import Trofeu from '../../assets/trofeu.png';

const CadastroContent: React.FC<any> = () => (
  <Container>
    <TrofeuImage src={Trofeu} />
    <Forms />
  </Container>
);

export default CadastroContent;
