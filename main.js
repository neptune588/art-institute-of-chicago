<<<<<<< HEAD
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
=======
import { getArtworks, getAllArtworks } from './src/utils/axios'

const params = {
  limit: 10,
  query: {
    match: {
      artist_title: 'Vincent van Gogh'
    }
  },
  fields: ['id', 'title', 'artist_display', 'image_id']
}

const response = await getArtworks(params);

console.log(response)
>>>>>>> 3361a66d576eab692aa6f82cf1326029e2d181fe
