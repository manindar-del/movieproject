import { useRouter } from 'next/router'
import CardImage from './CardImage'
import CardInfo from './CardInfo'
import {Link} from "next/link"

export default function CardNormal({ data }) {
  const router = useRouter()
  const handleClick = () => {
    if (data?.Type === 'movie') {
      router.push(`/movie/${data?.imdbID}`)
    } else if (data?.Type === "series") {
      router.push(`/tv/${data?.imdbID}`)
    }
  }


  return (

    <div
      className='card-hover-animation mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer'
      onClick={handleClick}>
      <CardImage src={data?.Poster} alt={data?.Title} />
      <CardInfo title ={data?.Title}/>
      
    </div>
  )
}
