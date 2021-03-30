import {Modal, Button} from 'react-bootstrap'

export default function VerticallyCenteredModal(props) {
  
  const [exoplanet,setExoplanet] = React.useState(props.exoplanet)

  return (
          <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {exoplanet.pl_hostname}
              </Modal.Title>
            </Modal.Header>

              <Modal.Body>
              { exoplanet.pl_hostname ?
                  <>
                      <h4>pl_hostname</h4>
                      <p>{exoplanet.pl_hostname}</p>
                  </>
                  : null
              }

              { exoplanet.pl_letter ?
                  <>
                      <h4>pl_letter</h4>
                      <p>{exoplanet.pl_letter}</p>
                  </>
                  : null
              }

              { exoplanet.pl_name ?
                  <>
                      <h4>pl_name</h4>
                      <p>{exoplanet.pl_name}</p>
                  </>
                  : null
              }

              { exoplanet.pl_discmethod ?
                  <>
                      <h4>pl_discmethod</h4>
                      <p>{exoplanet.pl_discmethod}</p>
                  </>
                  : null
              }

              { exoplanet.pl_controvflag ?
                  <>
                      <h4>pl_controvflag</h4>
                      <p>{exoplanet.pl_controvflag}</p>
                  </>
                  : null
              }

              { exoplanet.pl_pnum ?
                  <>
                      <h4>pl_pnum</h4>
                      <p>{exoplanet.pl_pnum}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbper ?
                  <>
                      <h4>pl_orbper</h4>
                      <p>{exoplanet.pl_orbper}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbpererr ?
                  <>
                      <h4>pl_orbpererr</h4>
                      <p>{exoplanet.pl_orbpererr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbpererr ?
                  <>
                      <h4>pl_orbpererr</h4>
                      <p>{exoplanet.pl_orbpererr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbperlim ?
                  <>
                      <h4>pl_orbperlim</h4>
                      <p>{exoplanet.pl_orbperlim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbpern ?
                  <>
                      <h4>pl_orbpern</h4>
                      <p>{exoplanet.pl_orbpern}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbsmax ?
                  <>
                      <h4>pl_orbsmax</h4>
                      <p>{exoplanet.pl_orbsmax}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbsmaxerr ?
                  <>
                      <h4>pl_orbsmaxerr</h4>
                      <p>{exoplanet.pl_orbsmaxerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbsmaxerr ?
                  <>
                      <h4>pl_orbsmaxerr</h4>
                      <p>{exoplanet.pl_orbsmaxerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbsmaxlim ?
                  <>
                      <h4>pl_orbsmaxlim</h4>
                      <p>{exoplanet.pl_orbsmaxlim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbsmaxn ?
                  <>
                      <h4>pl_orbsmaxn</h4>
                      <p>{exoplanet.pl_orbsmaxn}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbeccen ?
                  <>
                      <h4>pl_orbeccen</h4>
                      <p>{exoplanet.pl_orbeccen}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbeccenerr ?
                  <>
                      <h4>pl_orbeccenerr</h4>
                      <p>{exoplanet.pl_orbeccenerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbeccenerr ?
                  <>
                      <h4>pl_orbeccenerr</h4>
                      <p>{exoplanet.pl_orbeccenerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbeccenlim ?
                  <>
                      <h4>pl_orbeccenlim</h4>
                      <p>{exoplanet.pl_orbeccenlim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbeccenn ?
                  <>
                      <h4>pl_orbeccenn</h4>
                      <p>{exoplanet.pl_orbeccenn}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbincl ?
                  <>
                      <h4>pl_orbincl</h4>
                      <p>{exoplanet.pl_orbincl}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbinclerr ?
                  <>
                      <h4>pl_orbinclerr</h4>
                      <p>{exoplanet.pl_orbinclerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbinclerr ?
                  <>
                      <h4>pl_orbinclerr</h4>
                      <p>{exoplanet.pl_orbinclerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbincllim ?
                  <>
                      <h4>pl_orbincllim</h4>
                      <p>{exoplanet.pl_orbincllim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_orbincln ?
                  <>
                      <h4>pl_orbincln</h4>
                      <p>{exoplanet.pl_orbincln}</p>
                  </>
                  : null
              }

              { exoplanet.pl_bmassj ?
                  <>
                      <h4>pl_bmassj</h4>
                      <p>{exoplanet.pl_bmassj}</p>
                  </>
                  : null
              }

              { exoplanet.pl_bmassjerr ?
                  <>
                      <h4>pl_bmassjerr</h4>
                      <p>{exoplanet.pl_bmassjerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_bmassjerr ?
                  <>
                      <h4>pl_bmassjerr</h4>
                      <p>{exoplanet.pl_bmassjerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_bmassjlim ?
                  <>
                      <h4>pl_bmassjlim</h4>
                      <p>{exoplanet.pl_bmassjlim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_bmassn ?
                  <>
                      <h4>pl_bmassn</h4>
                      <p>{exoplanet.pl_bmassn}</p>
                  </>
                  : null
              }

              { exoplanet.pl_bmassprov ?
                  <>
                      <h4>pl_bmassprov</h4>
                      <p>{exoplanet.pl_bmassprov}</p>
                  </>
                  : null
              }

              { exoplanet.pl_radj ?
                  <>
                      <h4>pl_radj</h4>
                      <p>{exoplanet.pl_radj}</p>
                  </>
                  : null
              }

              { exoplanet.pl_radjerr ?
                  <>
                      <h4>pl_radjerr</h4>
                      <p>{exoplanet.pl_radjerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_radjerr ?
                  <>
                      <h4>pl_radjerr</h4>
                      <p>{exoplanet.pl_radjerr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_radjlim ?
                  <>
                      <h4>pl_radjlim</h4>
                      <p>{exoplanet.pl_radjlim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_radn ?
                  <>
                      <h4>pl_radn</h4>
                      <p>{exoplanet.pl_radn}</p>
                  </>
                  : null
              }

              { exoplanet.pl_dens ?
                  <>
                      <h4>pl_dens</h4>
                      <p>{exoplanet.pl_dens}</p>
                  </>
                  : null
              }

              { exoplanet.pl_denserr ?
                  <>
                      <h4>pl_denserr</h4>
                      <p>{exoplanet.pl_denserr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_denserr ?
                  <>
                      <h4>pl_denserr</h4>
                      <p>{exoplanet.pl_denserr}</p>
                  </>
                  : null
              }

              { exoplanet.pl_denslim ?
                  <>
                      <h4>pl_denslim</h4>
                      <p>{exoplanet.pl_denslim}</p>
                  </>
                  : null
              }

              { exoplanet.pl_densn ?
                  <>
                      <h4>pl_densn</h4>
                      <p>{exoplanet.pl_densn}</p>
                  </>
                  : null
              }

              { exoplanet.pl_ttvflag ?
                  <>
                      <h4>pl_ttvflag</h4>
                      <p>{exoplanet.pl_ttvflag}</p>
                  </>
                  : null
              }

              { exoplanet.pl_kepflag ?
                  <>
                      <h4>pl_kepflag</h4>
                      <p>{exoplanet.pl_kepflag}</p>
                  </>
                  : null
              }

              { exoplanet.pl_kflag ?
                  <>
                      <h4>pl_kflag</h4>
                      <p>{exoplanet.pl_kflag}</p>
                  </>
                  : null
              }

              { exoplanet.ra_str ?
                  <>
                      <h4>ra_str</h4>
                      <p>{exoplanet.ra_str}</p>
                  </>
                  : null
              }

              { exoplanet.dec_str ?
                  <>
                      <h4>dec_str</h4>
                      <p>{exoplanet.dec_str}</p>
                  </>
                  : null
              }

              { exoplanet.ra ?
                  <>
                      <h4>ra</h4>
                      <p>{exoplanet.ra}</p>
                  </>
                  : null
              }

              { exoplanet.st_raerr ?
                  <>
                      <h4>st_raerr</h4>
                      <p>{exoplanet.st_raerr}</p>
                  </>
                  : null
              }

              { exoplanet.dec ?
                  <>
                      <h4>dec</h4>
                      <p>{exoplanet.dec}</p>
                  </>
                  : null
              }

              { exoplanet.st_decerr ?
                  <>
                      <h4>st_decerr</h4>
                      <p>{exoplanet.st_decerr}</p>
                  </>
                  : null
              }

              { exoplanet.st_posn ?
                  <>
                      <h4>st_posn</h4>
                      <p>{exoplanet.st_posn}</p>
                  </>
                  : null
              }

              { exoplanet.st_dist ?
                  <>
                      <h4>st_dist</h4>
                      <p>{exoplanet.st_dist}</p>
                  </>
                  : null
              }

              { exoplanet.st_disterr ?
                  <>
                      <h4>st_disterr</h4>
                      <p>{exoplanet.st_disterr}</p>
                  </>
                  : null
              }

              { exoplanet.st_disterr ?
                  <>
                      <h4>st_disterr</h4>
                      <p>{exoplanet.st_disterr}</p>
                  </>
                  : null
              }

              { exoplanet.st_distlim ?
                  <>
                      <h4>st_distlim</h4>
                      <p>{exoplanet.st_distlim}</p>
                  </>
                  : null
              }

              { exoplanet.st_distn ?
                  <>
                      <h4>st_distn</h4>
                      <p>{exoplanet.st_distn}</p>
                  </>
                  : null
              }

              { exoplanet.st_optmag ?
                  <>
                      <h4>st_optmag</h4>
                      <p>{exoplanet.st_optmag}</p>
                  </>
                  : null
              }

              { exoplanet.st_optmagerr ?
                  <>
                      <h4>st_optmagerr</h4>
                      <p>{exoplanet.st_optmagerr}</p>
                  </>
                  : null
              }

              { exoplanet.st_optmaglim ?
                  <>
                      <h4>st_optmaglim</h4>
                      <p>{exoplanet.st_optmaglim}</p>
                  </>
                  : null
              }

              { exoplanet.st_optband ?
                  <>
                      <h4>st_optband</h4>
                      <p>{exoplanet.st_optband}</p>
                  </>
                  : null
              }

              { exoplanet.gaia_gmag ?
                  <>
                      <h4>gaia_gmag</h4>
                      <p>{exoplanet.gaia_gmag}</p>
                  </>
                  : null
              }

              { exoplanet.gaia_gmagerr ?
                  <>
                      <h4>gaia_gmagerr</h4>
                      <p>{exoplanet.gaia_gmagerr}</p>
                  </>
                  : null
              }

              { exoplanet.gaia_gmaglim ?
                  <>
                      <h4>gaia_gmaglim</h4>
                      <p>{exoplanet.gaia_gmaglim}</p>
                  </>
                  : null
              }

              { exoplanet.st_teff ?
                  <>
                      <h4>st_teff</h4>
                      <p>{exoplanet.st_teff}</p>
                  </>
                  : null
              }

              { exoplanet.st_tefferr ?
                  <>
                      <h4>st_tefferr</h4>
                      <p>{exoplanet.st_tefferr}</p>
                  </>
                  : null
              }

              { exoplanet.st_tefferr ?
                  <>
                      <h4>st_tefferr</h4>
                      <p>{exoplanet.st_tefferr}</p>
                  </>
                  : null
              }

              { exoplanet.st_tefflim ?
                  <>
                      <h4>st_tefflim</h4>
                      <p>{exoplanet.st_tefflim}</p>
                  </>
                  : null
              }

              { exoplanet.st_teffn ?
                  <>
                      <h4>st_teffn</h4>
                      <p>{exoplanet.st_teffn}</p>
                  </>
                  : null
              }

              { exoplanet.st_mass ?
                  <>
                      <h4>st_mass</h4>
                      <p>{exoplanet.st_mass}</p>
                  </>
                  : null
              }

              { exoplanet.st_masserr ?
                  <>
                      <h4>st_masserr</h4>
                      <p>{exoplanet.st_masserr}</p>
                  </>
                  : null
              }

              { exoplanet.st_masserr ?
                  <>
                      <h4>st_masserr</h4>
                      <p>{exoplanet.st_masserr}</p>
                  </>
                  : null
              }

              { exoplanet.st_masslim ?
                  <>
                      <h4>st_masslim</h4>
                      <p>{exoplanet.st_masslim}</p>
                  </>
                  : null
              }

              { exoplanet.st_massn ?
                  <>
                      <h4>st_massn</h4>
                      <p>{exoplanet.st_massn}</p>
                  </>
                  : null
              }

              { exoplanet.st_rad ?
                  <>
                      <h4>st_rad</h4>
                      <p>{exoplanet.st_rad}</p>
                  </>
                  : null
              }

              { exoplanet.st_raderr ?
                  <>
                      <h4>st_raderr</h4>
                      <p>{exoplanet.st_raderr}</p>
                  </>
                  : null
              }

              { exoplanet.st_raderr ?
                  <>
                      <h4>st_raderr</h4>
                      <p>{exoplanet.st_raderr}</p>
                  </>
                  : null
              }

              { exoplanet.st_radlim ?
                  <>
                      <h4>st_radlim</h4>
                      <p>{exoplanet.st_radlim}</p>
                  </>
                  : null
              }

              { exoplanet.st_radn ?
                  <>
                      <h4>st_radn</h4>
                      <p>{exoplanet.st_radn}</p>
                  </>
                  : null
              }

              { exoplanet.pl_nnotes ?
                  <>
                      <h4>pl_nnotes</h4>
                      <p>{exoplanet.pl_nnotes}</p>
                  </>
                  : null
              }

              { exoplanet.rowupdate ?
                  <>
                      <h4>rowupdate</h4>
                      <p>{exoplanet.rowupdate}</p>
                  </>
                  : null
              }

              { exoplanet.pl_facility ?
                  <>
                      <h4>pl_facility</h4>
                      <p>{exoplanet.pl_facility}</p>
                  </>
                  : null
              }


              </Modal.Body>

            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
  );
}