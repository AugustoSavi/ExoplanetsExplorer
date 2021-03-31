const puppeteer = require('puppeteer');

export default async function linkimage(req, res) {
  const { exoplanetName } = req.query;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`http://www.exoplanetkyoto.org/exohtml/${exoplanetName.replace(" ","_")}.html`);

  const linkImage = await page.evaluate(() => {
    return document.querySelector("body > table:nth-child(1) > tbody > tr > td:nth-child(2) > img").currentSrc
  });

  await browser.close();
  
  console.log('Link imagem:', linkImage);

  res.status(200).json( "ok" )
}
