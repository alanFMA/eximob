import { Forms, YoutubeVideo } from './Forms';
import { Container } from './styles';

const CadastroContent: React.FC<any> = () => (
  <Container>
    <YoutubeVideo videoId="ygxLeEQOIUM" />
    <Forms />
  </Container>
);

export default CadastroContent;
