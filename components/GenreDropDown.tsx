import { MovieApi } from "@/data/api/movie_api";
import { GenreModel } from "@/data/model/genre_model";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

type Props = {};

const GenreDropDown = async (props: Props) => {
  const genres: Array<GenreModel> = await MovieApi.getGenreList();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex justify-center items-center text-white">
        Genre
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-[50vh] w-full">
          {genres.map((genre) => (
            <DropdownMenuItem key={genre.id} asChild>
              <Link
                href={`/genre/${genre.id}?genre=${genre.name}`}
                className="w-full"
              >
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropDown;
