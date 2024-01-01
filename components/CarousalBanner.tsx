"use client";

import { MovieModel } from "@/data/model/movie_model";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { FullImageUrl } from "@/lib/full_image_url";
type Props = {
  movies: Array<MovieModel>;
};

const CarousalBanner = ({ movies }: Props) => {
  return (
    <Carousel
      opts={{
        loop: true,
        duration: 100,
      }}
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
      className="overflow-hidden relative cursor-pointer lg:-mt-40"
    >
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem key={movie.id} className="min-w-0 relative">
            <Image
              src={FullImageUrl(movie.backdrop_path, true)}
              alt=""
              key={movie.id}
              width={1920}
              height={1080}
              priority
            />
            <div className="hidden lg:inline absolute bg-transparent top-0 left-0 mt-0 lg:mt-40 pt-40 xl:pt-52 p-10 space-y-5 text-white z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent">
              <h2 className="text-5xl font-bold max-w-xl z-20">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarousalBanner;
