import Image from "next/image";

const Header = () => {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          width={30}
          height={30}
        />

        <div className="font-bold">
          <h1>
            The <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">
            Powered by DALL•E 2, ChatGPT & Microsoft Azure!
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
