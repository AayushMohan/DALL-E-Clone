import Image from "next/image";

const Header = () => {
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-white z-50 shadow-md">
      <div className="flex space-x-2 items-center">
        <Image
          src="https://links.papareact.com/4t3"
          alt="logo"
          width={20}
          height={20}
        />
        <div>
          <h1 className="font-bold">
            The <span className="text-violet-500">AI</span> Image Generator
          </h1>
          <h2 className="text-xs">Powered by DALL·E 2 & Chat GPT</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
