import { Row, Card, Button} from 'react-bootstrap';
import VerticallyCenteredModal from './VerticallyCenteredModal';
import Image from 'next/image';

export default function CardExoplanet(props){

    const [modalShow, setModalShow] = React.useState(false);
    const [exoplanet,setExoplanet] = React.useState(props.exoplanet)

    return(
        <Row className="justify-content-md-center" key= {exoplanet.pl_name} style={{ marginTop: 30}}>
          <Card  style={{ marginRight: 30, width: '12rem' }} key= {exoplanet.pl_name}>
            <Image
            src="/image.bmp"
            alt="Picture of the author"
            width={10}
            height={180}
            />

            <Card.Body>
              <Card.Title>{exoplanet.pl_name}</Card.Title>
              <Button onClick={() => setModalShow(true)}  size="sm" block>
                Mais Informações
              </Button>
              <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} exoplanet={exoplanet}/>  
            
            </Card.Body>
          </Card >
        </Row>  
    );
}