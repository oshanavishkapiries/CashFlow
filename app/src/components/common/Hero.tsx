import { Link } from "react-router-dom";
import GetStartedBtn from "./GetStartedBtn";

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          Empowering Your Financial Journey.
          <br />
          <span className="text-gray-400">Simple, Secure, Smart.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          CashFlow, an open-source platform, is a simple, secure, and smart way
          to manage your finances.
        </p>
        <Link to="/home">
          <GetStartedBtn />
        </Link>
      </div>
    </div>
  );
}
