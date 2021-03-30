import { Row, Card, Button} from 'react-bootstrap'
import VerticallyCenteredModal from './VerticallyCenteredModal';

export default function CardExoplanet(props){

    const [modalShow, setModalShow] = React.useState(false);
    const [exoplanet,setExoplanet] = React.useState(props.exoplanet)
  
    return(
        <Row className="justify-content-md-center" key= {exoplanet.pl_name}>
                <Card className="sml-card" style={{ marginRight: 30 }} key= {exoplanet.pl_name}>
                  <Card.Body>
                    <Card.Title>{exoplanet.pl_name}</Card.Title>
                    <Card.Text>
                      <strong>Host Star Name:</strong> {exoplanet.pl_hostname}
                    </Card.Text>
                    
                    <Button onClick={() => setModalShow(true)} >
                      Mais Informações &rarr;
                    </Button>
                    <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} exoplanet={exoplanet}/>  
                  
                  </Card.Body>
                </Card >
        </Row>  
    );
}