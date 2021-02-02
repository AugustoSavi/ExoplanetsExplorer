import Head from 'next/head'
import axios from 'axios';
import database from '../database.json';
import { Container, CardDeck, Row, Card, Button, Navbar, Form, FormControl } from 'react-bootstrap'
import VerticallyCenteredModal from '../src/components/VerticallyCenteredModal';

/*
async function getExoplanets(){
  const exoplanets = await axios.get(
    'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json'
  );
  return exoplanets.data;
}
*/

export default function Home() {
  
  const [modalShow, setModalShow] = React.useState(false);

  return (
      <>
      <Head>
        <title>Exoplanets</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar bg="dark" variant="dark" fixed="top" className="justify-content-between" >
        <Navbar.Brand href="#home">Exoplanets</Navbar.Brand>
        <Form inline >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

        <Container style={{ paddingTop: 70 }}>
          <CardDeck className="justify-content-md-center">
          {database.map((exoplanet) => {
            return (
              <Row className="justify-content-md-center" key= {exoplanet.pl_name}>
                <Card className="sml-card" style={{ marginRight: 30 }} key= {exoplanet.pl_name}>
                  <Card.Body>
                    <Card.Title>{exoplanet.pl_name}</Card.Title>
                    <Card.Text>
                      <strong>Host Star Name:</strong> {exoplanet.pl_hostname}
                    </Card.Text>
                    <Button onClick={() => setModalShow(true)} >
                      More &rarr;
                    </Button>
                  </Card.Body>
                </Card >
              </Row>
            );
          })}
          </CardDeck>
        </Container>
        
        <VerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}
