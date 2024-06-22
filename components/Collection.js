import useSWR from 'swr'
import { getUrl2 } from '../lib/tmdb'
import { fetcher, renderResults, sliceArray } from '../utils'
import CardNormal from './CardNormal'

import Loading from './Loading'

export default function Collection({
  endpoint,
  limit,
  setQuerys,
}) {

  const { data, error, isLoading } = useSWR(endpoint, fetcher)
 
  if (error) return <div>Error occurred</div>

  if (isLoading) return <div>Loading...</div>;
  
  setQuerys(data)
  return (
    <div class="container mx-auto">
      {data?.Search?.length > 0 ?
        <div class="grid">
          {data ?
            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data?.Search?.map((item) => {
                return (
                  <section
                    key={item?.imdbID}
                    className="card-collection-wrapper">
                    <CardNormal data={item} />
                  </section>
                )
              })}
            </div>
            :
            <Loading />
          }
        </div>
        : <h1 style={{
          textAlign: "center",
          fontSize: "30px",
          marginTop: " 63px"
        }}> No Item found</h1>
      }
    </div>
  )
}
