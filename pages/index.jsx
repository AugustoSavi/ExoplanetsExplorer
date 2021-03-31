import Head from 'next/head'
import database from '../database.json';
import { Container, CardDeck, Navbar, Form, FormControl } from 'react-bootstrap'

import CardExoplanet from '../src/components/CardExoplanet';

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
          <FormControl type="text" placeholder="Search" style={{ width: '24rem' }} />
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
