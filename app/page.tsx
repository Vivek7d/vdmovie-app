
import Image from "next/image";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import requests from "@/utils/requests";
import { Movie } from "@/typings";
import Row from "@/components/Row";


interface Props {
  netflixOriginals: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}
export default async function Home() {
  const movieData= await getData();
  return (
    <div className="relative h-screen bg-gradient-to-b">
      <Header  />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner movies= {movieData.netflixOriginals}/>
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={movieData.trendingNow} />
          <Row title="Top Rated" movies={movieData.topRated} />
          <Row title="Action Thrillers" movies={movieData.actionMovies} />
          {/* My List Component */}
          <Row title="Comedies" movies={movieData.comedyMovies} />
          <Row title="Scary Movies" movies={movieData.horrorMovies} />
          <Row title="Romance Movies" movies={movieData.romanceMovies} />
          <Row title="Documentaries" movies={movieData.documentaries} />
        </section>
      </main>
    </div>
  );
}
const getData = async () => {
  try {
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ]);

    // You can now use the data as needed
    const netflixOriginalsData = netflixOriginals.results || [];
    const trendingNowData = trendingNow.results || [];
    const topRatedData = topRated.results || [];
    const actionMoviesData = actionMovies.results || [];
    const comedyMoviesData = comedyMovies.results || [];
    const horrorMoviesData = horrorMovies.results || [];
    const romanceMoviesData = romanceMovies.results || [];
    const documentariesData = documentaries.results || [];

    // Return or use the data as needed
    return {
      netflixOriginals: netflixOriginalsData,
      trendingNow: trendingNowData,
      topRated: topRatedData,
      actionMovies: actionMoviesData,
      comedyMovies: comedyMoviesData,
      horrorMovies: horrorMoviesData,
      romanceMovies: romanceMoviesData,
      documentaries: documentariesData,
    };
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error; // Propagate the error if needed
  }
};
