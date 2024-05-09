import { Link } from "react-router-dom";

const Ads = () => {
  return (
    <>
      <div className="w-full bg-primary relative z-0 rounded-xl h-56 flex items-center justify-center flex-col font-primary outline outline-primary outline-1 overflow-hidden">
        <Link
          to="https://divitation.com"
          target="_blank"
          className="text-center font-medium tracking-wider"
        >
          <img
            src="./images/premium.png"
            alt="ads"
            className="h-full object-cover bg-primary opacity-80 absolute -z-10 top-0 left-0 right-0 hover:scale-125 duration-200 ease-out transition-all"
          />
          <p className="text-white text-xl">Digital Wedding Invitation</p>
          <p className="text-white">Divitation</p>
        </Link>
      </div>
    </>
  );
};

export default Ads;
