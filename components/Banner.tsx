"use client";
import { baseUrl } from "@/constants/movie";
import { Movie } from "@/typings";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";

import React, { useEffect, useState } from "react";
interface Props {
  movies: Movie[];
}
function Banner({ movies }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length)]);
  }, [movies]);

  if (!movie) {
    // Return null or some loading/error state if movies are still loading or an error occurred.
    return null;
  }

  const { title, name, original_name, overview, backdrop_path, poster_path } = movie;
  const imagePath = `${baseUrl}${backdrop_path || poster_path}`;
console.log('Image Path:', imagePath);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      {backdrop_path || poster_path ? (
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
          <Image
            src={`${baseUrl}${backdrop_path || poster_path}`}
            alt="netflixOriginal"
            fill
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>
      ) : null}

      <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl ">
        {title || name || original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {overview}
      </p>
      <div className="flex space-x-3 ">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 fill-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70">
          More Info <IoIosInformationCircleOutline className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
