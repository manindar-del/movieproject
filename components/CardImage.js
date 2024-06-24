import Image from 'next/image'
import { shimmer, toBase64 } from '../utils'
import FilmRating from '../components/FilmRating'

export default function CardImage({src, alt }) {

  return (
    <div className='relative w-full rounded-lg'>
      <FilmRating number={6.7} />
        <img
          className='rounded-lg'
          src={src}
          alt={alt}
          layout='fill'
          objectFit='cover'
    
        />
      </div>
    
  )
}
