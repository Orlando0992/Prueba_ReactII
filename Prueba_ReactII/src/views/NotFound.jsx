import { Container } from 'react-bootstrap';
import notFound from '../assets/imgs/NotFound.jpg'

export default function NotFound() {
    return (
        <Container className="notFound mt-5 text-center">
            <img src={notFound} width="200px"></img>
            <p>Esta pagina no existe.</p>
        </Container>
    );
}
