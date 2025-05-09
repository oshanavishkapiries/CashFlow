import SummaryCarousel from "./SummaryCarousel";

const Hero = ({ loading, user }: { loading: boolean; user: any }) => {
  return (
    <div
      className="w-full h-[250px] bg-cover bg-center bg-no-repeat relative pb-[100px]"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/60"></div>
      <div className="absolute top-10 left-10 text-foreground">
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <h1 className="text-2xl font-bold">
            Welcome ! ,<br /> {user.displayName || "User"}
          </h1>
        ) : (
          <h1 className="text-2xl font-bold">Welcome, Guest</h1>
        )}
      </div>
      <SummaryCarousel />
    </div>
  );
};

export default Hero;
