import Head from 'next/head'
import axios from 'axios';
import database from '../database.json';
import { Container, CardDeck, Button, Navbar, Form, FormControl } from 'react-bootstrap'

import CardExoplanet from '../src/components/CardExoplanet';

/*
async function getExoplanets(){
  const exoplanets = await axios.get(
    'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json'
  );
  return exoplanets.data;
}
*/

export default function Home() {
  
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

          {database.map((exoplanet, index) => {
            return <CardExoplanet exoplanet={exoplanet} key={index}/>
          })}

          </CardDeck>
        </Container>
    </>
  )
}
