import { Movie } from '@/typings'
import Image from 'next/image'
import React from 'react'

interface Props{
    movie:Movie 
    // movie:Movie | DocumentData
}
function Thumbnail({movie}:Props) {
  return (
    <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:scale-102 '>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        fill
        priority={true}
        alt=''
        sizes='(min-width: 180px)'
      />
    </div>
  )
}

export default Thumbnail
