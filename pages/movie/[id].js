import Head from 'next/head'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import FilmImage from '../../components/FilmImage'

import FilmRating from '../../components/FilmRating'
import Loading from '../../components/Loading'
import { fetcher, pathToSearchMovie } from '../../utils'
import { getMovieDetail } from "../../lib/tmdb"


import manageImage from '../../assets/av.jpg'
import Image from "next/image"

export default function Movie() {
  const router = useRouter()
  const { id } = router.query
  const endPoint = getMovieDetail(id)

  const { data: movie, error: movieError } = useSWR(endPoint, fetcher)

  console.log(movie, "rrrr")
  if (movieError) return <div>{movieError}</div>
  if (!movie) return <div>{movieError}</div>

  return (
    <>
      <Head>
        <title>{movie.Title} | Entertainment App</title>
      </Head>

      <div className="relative w-full h-40 md:h-60 lg:h-80 image-background">
        <Image
          src={manageImage}
          alt="Manage Image"
          layout="fill"
          objectFit="cover"
          className="absolute"
          quality={100}
        />
      </div>
      <section className='md:w-2/5 sideby'>
        <h4 className="font-small blue_back">Lorem Ipsum / {movie?.Type}</h4>
        <h1 className="font-large">{movie.Title}</h1>
      </section>

      {movie === undefined ? (
        <Loading />

      ) : (

        <section className='flex flex-col sm:mx-8 md:mx-0 md:flex-row md:items-start lg:justify-center top-margin-details'>
          <FilmImage
            src={movie.Poster}
            title={movie.title}
          />
          <div className='md:w-3/5'>
            <h1 className="mb-6 font-medium">{movie?.Title}</h1>
            <p className="pcolor maxwidth">{movie?.Plot}</p>
            <FilmRating number={(movie.imdbRating)} />

            <h1 className="pcolor font-small ">type</h1>
            <h1 className="blackdark mb-6">{movie?.Type}</h1>

            <h1 className="pcolor font-small">Release Date</h1>

            <h1 className="blackdark mb-6">{movie?.Released}</h1>

            <h1 className="pcolor font-small">Run Time</h1>
            <h1 className="blackdark mb-6">{movie?.Runtime}</h1>

            <h1 className="pcolor font-small">Geners</h1>
            <h1 className="blackdark mb-6">{movie?.Genre}</h1>

          </div>
        </section >
      )
      }
    </>
  )
}






