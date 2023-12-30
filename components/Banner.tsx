"use client";

import { useEffect, useState } from "react";
import { Movie } from "@/typings";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/atoms/modalAtom";

const baseUrl = "https://image.tmdb.org/t/p/original";

interface Props {
  movies: Movie[];
}

export default function Banner({ movies }: Props) {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  // Select a random movie when component mounts or when movies change
  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    setSelectedMovie(randomMovie);
  }, [movies]);

  const router = useRouter();

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12 lg:pl-24">
      <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
        {selectedMovie && (
          <Image
            src={`${baseUrl}/${
              selectedMovie?.backdrop_path || selectedMovie?.poster_path
            }`}
            alt="Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        {selectedMovie?.title ||
          selectedMovie?.name ||
          selectedMovie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {selectedMovie?.overview}
      </p>
      <div className="flex space-x-3">
        <button
          onClick={() =>
            router.push(`/watch/${selectedMovie?.title}/${selectedMovie?.id}`)
          }
          className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-white text-black"
        >
          <AiFillPlayCircle className="h-4 w-4 text-black md:h-7 md:w-7 cursor-pointer" />
          Play
        </button>
        <button
          className="cursor-pointer flex items-center gap-x-2 rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl bg-[gray]/70"
          onClick={() => {
            setCurrentMovie(selectedMovie);
            setShowModal(true);
          }}
        >
          <IoMdInformationCircleOutline className="h-5 w-5  md:h-8 md:w-8 cursor-pointer" />
          More Info
        </button>
      </div>
    </div>
  );
}
