async function loadJson (url) {
  /* Write your code here */
}

loadJson('https://github.com/ULL-MII-SYTWS/async-await-template')
  .then(r => console.log(JSON.stringify(r)))
  .catch(err => console.log(err))
