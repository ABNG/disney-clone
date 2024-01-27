import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import SearchInput from "./SearchInput";
import GenreDropDown from "./GenreDropDown";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full sticky top-0 z-50 bg-[#1A1C29] p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 flex justify-between items-center">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="invert"
        />
      </Link>
      <div className="flex gap-2 items-center">
        <GenreDropDown />
        <SearchInput />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
