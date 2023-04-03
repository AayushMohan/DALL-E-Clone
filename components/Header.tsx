import DropdownMenu from "./DropdownMenu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex p-4 justify-between items-center sticky top-0 bg-white z-50 border-b">
      <Image
        src="https://links.papareact.com/4t3"
        alt="logo"
        width={20}
        height={20}
        className="flex space-x-2 items-center cursor-pointer"
      />
      <div className="font-semibold cursor-pointer flex items-center hover:bg-gray-100 hover:p-2 rounded-lg">
        <h2>DALL•E</h2>
        <DropdownMenu />
      </div>
      <Image
        src="https://avatars.githubusercontent.com/u/66319691?v=4"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full cursor-pointer"
      />
    </header>
  );
};

export default Header;
