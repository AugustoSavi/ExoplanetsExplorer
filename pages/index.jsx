import Head from 'next/head'
import axios from 'axios';
import database from '../database.json';
import { Container, CardDeck, Row, Card, Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'

async function getExoplanets(){
  const exoplanets = await axios.get(
    'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json'
  );
  return exoplanets.data;
}


export default function Home() {
  
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <>
      <Head>
        <title>Exoplanets</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <Navbar bg="dark" variant="dark" className="justify-content-between" >
        <Navbar.Brand href="#home">Exoplanets</Navbar.Brand>
        <Form inline >
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

        <Container>
          <CardDeck className="justify-content-md-center">
          {database.map((exoplanet) => {
            return (

            <Row className="justify-content-md-center" key= {exoplanet.pl_hostname}>
              <Card className="sml-card" style={{ marginRight: 30 }} key= {exoplanet.pl_hostname}>
                <Card.Body>
                  <Card.Title>{exoplanet.pl_hostname}</Card.Title>
                  <Card.Text>
                    Find in-depth information about Next.js features and API.
                  </Card.Text>
                  <Button variant="primary" href="https://nextjs.org/docs">
                    More &rarr;
                  </Button>
                </Card.Body>
              </Card >
            </Row>

            );
          })}

          </CardDeck>
        </Container>
        
    </>
  )
}
