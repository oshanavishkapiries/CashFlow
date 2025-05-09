import Hero from "@/components/common/homePage/Hero";
import { useUser } from "@/context/UserContext";


const Home = () => {
  const { user, loading } = useUser();

  return (
    <div className="w-full h-screen flex flex-col">
      {/* hero section start */}
      <Hero loading={loading} user={user} />
      {/* hero section end */}

      {/* container start */}
      <div className="w-full h-full flex flex-col pt-[70px]">oshan</div>
      {/* container end */}
    </div>
  );
};

export default Home;
