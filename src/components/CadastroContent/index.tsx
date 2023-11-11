import { YoutubeVideo } from './Forms';
import Forms from './Forms/Forms';
import { Container } from './styles';

const CadastroContent: React.FC<any> = () => (
  <Container>
    <YoutubeVideo videoId="ygxLeEQOIUM" />
    <Forms />
  </Container>
);

export default CadastroContent;
