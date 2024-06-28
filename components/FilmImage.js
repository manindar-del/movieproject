import Image from 'next/image'
import { shimmer, TMDB_IMAGE_ENDPOINT, toBase64 } from '../utils'

export default function FilmImage({ src, title }) {
  return (
    <section className='px-20 text-center md:pr-8 space md:pl-0'>
      <img
        className='rounded-lg'
        src={`${src}`}
        alt={title}
        width={350}
        height={530}
        placeholder='blur'
       
      />
    </section>
  )
}
