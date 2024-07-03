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
