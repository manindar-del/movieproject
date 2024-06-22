import { v4 as uuidv4 } from 'uuid'

// CONSTANTS
export const OMDB_ENDPOINT = process.env.OMDB_ENDPOINT
export const OMDB_API_KEY = process.env.OMDB_API_KEY
export const OMDB_IMAGE_ENDPOINT = 'https://img.omdbapi.com'



// Fetcher for SWR
export const fetcher = url => fetch(url).then(res => res.json())






