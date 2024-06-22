import { OMDB_API_KEY, OMDB_ENDPOINT } from '../utils'


export function getMovieDetail(valueId) {
  return `${OMDB_ENDPOINT}?apikey=${OMDB_API_KEY}&i=${valueId}`
}

export function allListFunc(id,type) {
  return `${OMDB_ENDPOINT}?apikey=${OMDB_API_KEY}&s=${id}&type=${type}`
}





